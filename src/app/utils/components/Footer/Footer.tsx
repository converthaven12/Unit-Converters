import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#E1E1E1] text-center p-2">
      <span className="text-[#0d3b23]">
        © All rights reserved. Converthaven.com
      </span>{" "}
<<<<<<< HEAD
      | <Link href="/Footer#about"><span className="text-[#0d3b23] cursor-pointer">About Us</span></Link> |{" "}
      <Link href="/Footer#terms"><span className="text-[#0d3b23] cursor-pointer">Terms of Use</span></Link> |{" "}
      <Link href="/Footer#privacy"><span className="text-[#0d3b23] cursor-pointer">Privacy Policy</span></Link>
=======
      | <span className="text-[#006633] cursor-pointer">About Us</span> |{" "}
      <span className="text-[#006633] cursor-pointer">Terms of Use</span> |{" "}
      <span className="text-[#006633] cursor-pointer">Privacy Policy</span>
>>>>>>> 3a4a94bd5a006ad548f88a9e78761d8ce8254009
    </div>
  );
};

export default Footer;
