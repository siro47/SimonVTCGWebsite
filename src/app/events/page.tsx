import EventsSection from "@/components/Events/05-RiftboundXMadrid";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Page | SimonV TCG",
  description: "This is Event Page for SimonV TCG Webpage",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Eventos"
        description="Encuentra aquí los próximos eventos organizados por SimonV y apúntate"
      />

      <div className="container grid grid-cols-1 md:grid-cols-2">
        <EventsSection />
      </div>
    </>
  );
};

export default AboutPage;