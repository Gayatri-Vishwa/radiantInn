import React from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";

import { IoCall } from "react-icons/io5";

function ContactSection() {
  return (
    <section
      id="contact"
      className="
      py-20
      bg-[#241f1a]
      text-white
      px-4
      "
    >
      <div
        className="
      max-w-7xl
      mx-auto
      grid
      md:grid-cols-2
      gap-12
      items-center
      "
      >
        {/* Contact Info */}
        <div>
          <p
            className="
          uppercase
          tracking-[4px]
          text-amber-300
          "
          >
            Contact Us
          </p>

          <h2
            className="
          text-4xl
          md:text-5xl
          font-bold
          mt-4
          "
          >
            Visit
            <span className="text-amber-300 uppercase"> RADIENT INN</span>
          </h2>

          <p
            className="
          text-stone-300
          mt-6
          leading-relaxed
          "
          >
            Experience delicious food, elegant ambience, and unforgettable
            moments with your loved ones.
          </p>

          {/* Details */}
          <div className="mt-8 space-y-5">
            <div>
              <h3
                className="
              text-amber-300
              font-semibold
              flex items-center
              gap-2
              "
              >
                <FaMapMarkerAlt /> Location
              </h3>

              <p className="text-stone-300">
                Near Shanti Nagar ,Muzaffar Nagar
              </p>
            </div>

            <div>
              <h3
                className="
              text-amber-300
              font-semibold
               flex items-center
              gap-2
              "
              >
                <FaClock /> Opening Hours
              </h3>

              <p className="text-stone-300">Mon - Sun : 11:00 AM - 11:00 PM</p>
            </div>

            <div>
              <h3
                className="
              text-amber-300
              font-semibold
              flex
              items-center
              gap-2
             
              "
              >
                <IoCall /> Phone
              </h3>

              <p className="text-stone-300">+91 7599932543</p>
            </div>
          </div>

          {/* Call Button */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="tel:+917599932543"
              className="
    flex
    items-center
    gap-2
    px-7
    py-3
    bg-amber-300
    text-black
    rounded-full
    font-semibold
    hover:bg-amber-400
    transition
    "
            >
              <IoCall />
              Call Now
            </a>

            <a
              href="https://wa.me/917599932543?text=Hello%20Palasa,%20I%20would%20like%20to%20know%20more%20about%20your%20restaurant."
              target="_blank"
              rel="noopener noreferrer"
              className="
    flex
    items-center
    gap-2
    px-7
    py-3
    bg-green-600
    text-white
    rounded-full
    font-semibold
    hover:bg-green-700
    transition
    "
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Image / Map Placeholder */}
        <div
          className=" h-[400px]
  rounded-2xl
  overflow-hidden
  shadow-xl
  "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.5050545400613!2d77.725553375532!3d29.472459875216593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1be948f1964d%3A0xd6584e6d82ee16ee!2sPalasa%20Hotel%20%26%20Resort!5e0!3m2!1sen!2sin!4v1783690102328!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        
      </div>
    </section>
  );
}

export default ContactSection;
