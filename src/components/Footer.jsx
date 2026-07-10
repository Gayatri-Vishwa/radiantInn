import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";


function Footer() {

  return (
    <footer
      className="
      bg-stone-950
      text-white
      px-4
      py-12
      "
    >

      <div className="
      max-w-7xl
      mx-auto
      grid
      md:grid-cols-4
      gap-10
      ">


        {/* Brand */}
        <div>

          <h2 className="
          text-3xl
          font-bold
          text-amber-300
          ">
            Palasa
          </h2>


          <p className="
          text-stone-400
          mt-4
          leading-relaxed
          ">
            Experience authentic flavors, elegant ambience,
            and unforgettable dining moments.
          </p>


        </div>



        {/* Quick Links */}
        <div>

          <h3 className="
          text-xl
          font-semibold
          ">
            Quick Links
          </h3>


          <ul className="
          mt-4
          space-y-3
          text-stone-400
          ">

            <li>Home</li>
            <li>Menu</li>
            <li>Gallery</li>
            <li>Contact</li>

          </ul>

        </div>




        {/* Contact */}
        <div>

          <h3 className="
          text-xl
          font-semibold
          ">
            Contact
          </h3>


          <div className="
          mt-4
          space-y-3
          text-stone-400
          ">

            <p>
              📍 Palasa Hotel & Resort
            </p>

            <p>
              📞 +91 XXXXX XXXXX
            </p>

            <p>
              🕒 11:00 AM - 11:00 PM
            </p>

          </div>

        </div>




        {/* Social */}
        <div>

          <h3 className="
          text-xl
          font-semibold
          ">
            Follow Us
          </h3>


          <div className="
          flex
          gap-5
          mt-5
          text-2xl
          text-amber-300
          ">

            <FaInstagram className="cursor-pointer hover:text-amber-400"/>
            <FaFacebook className="cursor-pointer hover:text-amber-400"/>
            <FaYoutube className="cursor-pointer hover:text-amber-400"/>

          </div>

        </div>


      </div>



      {/* Bottom */}
      <div className="
      border-t
      border-stone-800
      mt-10
      pt-6
      text-center
      text-stone-500
      ">

        © {new Date().getFullYear()} Palasa. All Rights Reserved.

      </div>


    </footer>
  );
}


export default Footer;