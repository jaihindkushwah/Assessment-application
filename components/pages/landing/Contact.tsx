import React from "react";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-[600px] w-full flex font-normal  lg:flex-row font-sans  flex-col bg-white lg:gap-10 dark:bg-gradient-to-b from-[#010164] to-[#040438] py-5 lg:px-10 px-5"
    >
      <div className="flex-1 flex items-center flex-col md:p-5 p-0 dark:bg-gradient-to-b from-[#010164] to-[#040438] ">
        <span className="h-14 w-full"></span>
        <p className=" text-xl sm:text-2xl font-normal  mt-5 ">Contact Form</p>
        <ContactForm />
      </div>
      <div className="flex-1 relative flex flex-col items-center p-5 font-sans">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Wondering if we can actually live up to it?
        </h2>
        <p className="text-sm sm:text-[17px] mt-5">
          Well, worry no more,because we can and we have done so many times in
          the past! Book a Demo today.
        </p>
        <div className="w-full mt-4 rounded-full">
          <iframe
            className="aspect-square sm:aspect-video w-full rounded-md"
            frameBorder={0}
            scrolling="no"
            // marginheight={0}
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Chhatrapati%20Shivaji%20Maharaj%20International%20Airport%20Mumbai,%20Maharashtra%20400099+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
        </div>
        {/* <SpotlightBubbles /> */}
      </div>
    </section>
  );
}

export default ContactSection;
