"use client";

import { ButtonLink } from "@/components/ui/button-link";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Check, SendHorizontal, X } from "lucide-react";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { calBookingUrl, contactEmail, enquiryEndpoint } from "./contact-config";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactActions() {
  const dialog = useRef<HTMLDialogElement>(null);
  const pending = useRef<AbortController | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<"name" | "email" | "details", string>>
  >({});
  const mounted = useRef(false);
  const formId = useId();
  const submitting = status === "submitting";

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      pending.current?.abort();
      toast.dismiss(`${formId}-enquiry`);
    };
  }, [formId]);

  function showError(message: string) {
    setStatus("error");
    setError(message);
    toast.error("Enquiry not sent", {
      description: message,
      id: `${formId}-enquiry`,
      duration: 8000,
    });
  }

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();
    const errors: typeof fieldErrors = {};
    if (!name) errors.name = "Please enter your name.";
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    if (!email) errors.email = "Please enter your email address.";
    else if (!emailInput.validity.valid)
      errors.email = "Enter a valid email address, like you@example.com.";
    if (!details) errors.details = "Please tell us about your project.";
    setFieldErrors(errors);
    setError("");
    if (Object.keys(errors).length) {
      setStatus("idle");
      const firstField = Object.keys(errors)[0];
      (form.elements.namedItem(firstField) as HTMLElement)?.focus();
      return;
    }
    toast.dismiss(`${formId}-enquiry`);
    data.set("name", name);
    data.set("email", email);
    data.set("message", details);
    data.delete("details");
    data.set("_subject", "Motive9 project enquiry");
    const controller = new AbortController();
    pending.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 30000);
    setStatus("submitting");
    setError("");
    try {
      const response = await fetch(enquiryEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (!mounted.current) return;
      if (!response.ok) {
        showError(
          response.status === 429
            ? "Too many attempts. Please wait a little, then try again or email us directly."
            : "Your enquiry wasn’t sent. Please try again or email us directly.",
        );
        return;
      }
      form.reset();
      setStatus("success");
      toast.success("Enquiry sent", {
        description: "Thanks! We’ll get back to you by email.",
        id: `${formId}-enquiry`,
      });
    } catch {
      if (!mounted.current) return;
      showError(
        controller.signal.aborted
          ? "The request timed out. Please try again or email us directly."
          : "We couldn’t connect. Check your connection and try again, or email us directly.",
      );
    } finally {
      window.clearTimeout(timeout);
      if (pending.current === controller) pending.current = null;
    }
  }

  return (
    <div className="contact-options">
      <Button
        size="lg"
        className="enquiry-trigger"
        onClick={() => {
          if (status === "success") setStatus("idle");
          dialog.current?.showModal();
          dialog.current?.querySelector("input")?.focus();
        }}
      >
        Send an enquiry
      </Button>
      <ButtonLink
        size="lg"
        variant="secondary"
        className="booking-link"
        href={calBookingUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a call
        <span className="sr-only"> (opens in a new tab)</span>
      </ButtonLink>
      <dialog
        ref={dialog}
        className="enquiry-dialog"
        aria-labelledby={`${formId}-title`}
        aria-describedby={`${formId}-description`}
        onClose={() => toast.dismiss(`${formId}-enquiry`)}
        onCancel={(event) => {
          if (submitting) event.preventDefault();
        }}
      >
        <Toaster position="top-center" closeButton theme="light" />
        <div className="enquiry-heading">
          <Button
            variant="ghost"
            size="icon"
            className="enquiry-close"
            aria-label="Close enquiry form"
            disabled={submitting}
            onClick={() => dialog.current?.close()}
          >
            <X size={20} />
          </Button>
        </div>
        <h2 id={`${formId}-title`}>
          {status === "success"
            ? "Good things start here"
            : "Let’s hear your idea"}
        </h2>
        <p id={`${formId}-description`}>
          {status === "success"
            ? "Your enquiry has been submitted. We’ll reply to the email address you provided."
            : "A website, an app, design, or AI automation. Tell us what you have in mind."}
        </p>
        {status === "success" ? (
          <div className="enquiry-success" role="status">
            <Check size={28} />
            <p>Enquiry sent</p>
            <Button onClick={() => dialog.current?.close()}>Done</Button>
          </div>
        ) : (
          <form
            action={enquiryEndpoint}
            method="POST"
            noValidate
            onSubmit={submitEnquiry}
            onInput={(event) => {
              const input = event.target as
                HTMLInputElement | HTMLTextAreaElement;
              if (
                input.name === "name" ||
                input.name === "email" ||
                input.name === "details"
              ) {
                const field = input.name;
                setFieldErrors((previous) => ({
                  ...previous,
                  [field]: undefined,
                }));
              }
            }}
            aria-busy={submitting}
          >
            <fieldset disabled={submitting}>
              <div className="enquiry-fields">
                <div>
                  <label htmlFor={`${formId}-name`}>Name</label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={
                      fieldErrors.name ? `${formId}-name-error` : undefined
                    }
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    maxLength={100}
                  />
                  {fieldErrors.name && (
                    <p
                      id={`${formId}-name-error`}
                      className="enquiry-field-error"
                      role="alert"
                    >
                      {fieldErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor={`${formId}-email`}>Email</label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={
                      fieldErrors.email ? `${formId}-email-error` : undefined
                    }
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    maxLength={254}
                  />
                  {fieldErrors.email && (
                    <p
                      id={`${formId}-email-error`}
                      className="enquiry-field-error"
                      role="alert"
                    >
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>
              <label htmlFor={`${formId}-details`}>Project details</label>
              <textarea
                id={`${formId}-details`}
                name="details"
                aria-invalid={Boolean(fieldErrors.details)}
                aria-describedby={
                  fieldErrors.details ? `${formId}-details-error` : undefined
                }
                rows={4}
                placeholder="What would you like to build?"
                required
                maxLength={2000}
              />
              {fieldErrors.details && (
                <p
                  id={`${formId}-details-error`}
                  className="enquiry-field-error"
                  role="alert"
                >
                  {fieldErrors.details}
                </p>
              )}
              {status === "error" && (
                <p className="enquiry-error" role="alert">
                  {error}{" "}
                  <a href={`mailto:${contactEmail}`}>Email {contactEmail}</a>
                </p>
              )}
              <p className="enquiry-privacy">
                Your details are sent securely through Formspree so we can
                respond to your enquiry.
              </p>
              <div className="enquiry-form-actions">
                <Button disabled={submitting} type="submit">
                  {submitting ? "Sending…" : "Send"}
                  <SendHorizontal size={16} aria-hidden="true" />
                </Button>
              </div>
            </fieldset>
          </form>
        )}
      </dialog>
    </div>
  );
}
