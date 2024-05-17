import Image from "next/image";
import React from "react";
import Group_137 from "../../../public/Group_137.png";
import Line from "../../public/Rectangle114.png";

const Contact: React.FunctionComponent = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <Image src={Group_137} alt="pic" width={0} height={0} />
        <div className="absolute left-0 top-1/4 z-10 m-14 rounded px-4 py-2">
          <div className="font-poppins leading-52.5 mb-3 text-left text-3xl font-extrabold text-[#f36562]">
            Contact Us For
          </div>
          <div className="font-poppins leading-75 text-left text-5xl font-extrabold text-[#3D4461] ">
            Enquiries / Grievances
          </div>
        </div>
      </div>
      <div className="m-16">
        <div className="mb-5">
          <p className="mb-3 font-bold">Healthcare Co. Limited</p>
          <p>
            FE 426, Sector III, Salt Lake, FE Block <br /> Lane, next to Tank
            12, Kolkata,
            <br />
            West Bengal 700106, India
          </p>
        </div>
        <div className="mb-5">
          <p className="mb-3 font-bold">Level 1 - Customer Support</p>
          <p>
            You may click the link for any queries or assistance related to your
            orders:
            <br />
            <a
              href="#"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              www.healthcare.com/needHelp
            </a>
          </p>
        </div>
        <div className="mb-5">
          <p className="mb-3 font-bold">For Corporate Enquiries</p>
          <p>
            Mail Us at:
            <br />
            <a
              href="#"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              corporate @healthcare.com
            </a>
          </p>
        </div>
        <div className="mb-5">
          <p className="mb-3 font-bold">Level 2 - Customer Support</p>
          <p>
            You can contact our customer support team by emailing your concern
            to us at{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              helpdesk@healthcare.com
            </a>
            . The team will revert to your concern/query within 8 hours from
            receipt of your query/concern.
          </p>
        </div>
        <div className="mb-5">
          <p className="mb-3 font-bold">Level 3 - Customer Support</p>
          <p>
            If your query remains unresolved by the preceding levels, you may
            contact the relevant grievance officers as given below with the
            details of your interactions with our customer support team through
            Level 1 & 2.
          </p>
        </div>
        <div className="m-16">
          <div className="flex flex-col rounded-md bg-gray-300">
            <div className="flex h-[26vh] w-full flex-row justify-around p-[3rem]">
              <span className="flex flex-col text-center">
                <a href="#" className="mb-2">Service</a>
                <a href="#" >Online Medicines Orders</a>
                <a href="#" >Online Diagnostic Bookings</a>
                <a href="#" >Online Diagnostic Bookings</a>
              </span>
              <span className="h-14 border-l border-red-400"></span>
              <span className="flex flex-col text-center">
                <a className="mb-2">E-mail ID</a>
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  enquiry@healthcare.com
                </a>
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  enquiry@healthcare.com
                </a>
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  enquiry@healthcare.com
                </a>
              </span>
              <span className="h-14 border-l border-red-400"></span>
              <span className="flex flex-col text-center">
                <a className="mb-2">Contact No.</a>
                <a href="#">+91 12345-067890</a>
                <a href="#">+91 12345-067890</a>
                <a href="#">+91 12345-067890</a>
              </span>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <p>
            The contact numbers displayed above are operational every day of the
            week from 10:00 am to 7:00 pm only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
