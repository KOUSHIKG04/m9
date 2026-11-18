import type { StaticImageData } from "next/image";
import gitloud from "@/public/portfolio/gitloud.png";
import vaastu from "@/public/portfolio/vaastu.png";
import kgcraft from "@/public/portfolio/kgcraft.png";
import safeplate from "@/public/portfolio/safeplate.png";
import onEmit from "@/public/portfolio/on-emit.png";
import csvImporter from "@/public/portfolio/csv-importer.png";
import convo from "@/public/portfolio/convo.png";
import aiSolutions from "@/public/portfolio/ai-solutions.png";
import healthcareTelegramBot from "@/public/portfolio/healthcare-telegram-bot.jpg";
import whatsappSandbox from "@/public/portfolio/whatsapp-sandbox.jpg";
import eventCalendarManager from "@/public/portfolio/event-calendar-manager.jpg";

export const portfolioImages: Record<string, StaticImageData> = {
  gitloud,
  vaastu,
  kgcraft,
  safeplate,
  "on-emit": onEmit,
  "csv-importer": csvImporter,
  convo,
  "ai-solutions": aiSolutions,
  "healthcare-telegram-bot": healthcareTelegramBot,
  "whatsapp-sandbox": whatsappSandbox,
  "event-calendar-manager": eventCalendarManager,
};
