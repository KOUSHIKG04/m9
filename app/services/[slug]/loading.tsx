import { SiteHeader } from "@/features/agency/components/site-header";

export default function LoadingService() {
  return (
    <div className="detail-page service-page">
      <SiteHeader />
      <main className="section-pad">
        <div className="container" role="status">
          <h1 className="display-heading">Our expertise.</h1>
          <p>Loading service details...</p>
        </div>
      </main>
    </div>
  );
}
