import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <br />
      <br />
      <br />
      <div className="flex justify-evenly">
        <div className="bg-white h-0.5 w-4/5"></div>
        <br />
        <br />
      </div>

      <div className="flex justify-evenly gap-10 h-72	">
        {" "}
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl flex gap-10">
            <img src="./Images/logo.png" className="h-10 " />
            <strong>Paperclip</strong>
          </h1>
          <p className="w-3/5">
            Your natural candle made for your home and for your wellness.
          </p>
        </div>
        <div className="flex flex-col justify-start gap-4">
          <h1 className="text-2xl text-yellow-500	">
            <strong> Discovery</strong>
          </h1>{" "}
          <ul className="flex flex-col justify-start gap-4">
            <li>New season</li>
            <li>Most searched</li>
            <li>Most selled</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start gap-4">
          <h1 className="text-2xl text-yellow-500	">
            <strong> About</strong>
          </h1>
          <ul className="flex flex-col justify-start gap-4">
            <li>Help</li>
            <li>Shipping</li>
            <li>Affiliate</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start gap-4 ">
          <h1 className="text-2xl text-yellow-500	">
            {" "}
            <strong> Info</strong>
          </h1>
          <ul className="flex flex-col justify-start gap-4">
            <li>Contact us</li>
            <li>Privacy Policies</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="h-20 w-full bg-slate-300 flex justify-center items-center text-blue-950		">
        ©Paperckip All Rights Reserved.
      </div>
    </footer>
  );
}
