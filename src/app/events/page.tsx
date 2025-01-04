import EventsSectionOne from "@/components/Events/EventsSectionOne";
import EventsSectionTwo from "@/components/Events/EventsSectionTwo";
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
      <EventsSectionOne />
      <EventsSectionTwo />
    </>
  );
};

export default AboutPage;
