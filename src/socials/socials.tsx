"use client";
import copy from "copy-to-clipboard";
import Link from "next/link";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function Socials() {
  return (
    <>
      <div className="flex space-x-3 items-center">
        <Link
          href="/Cv.pdf"
          target="_blank"
          download={"Cv.pdf"}
          className="text-gray-400 cursor-pointer y-white hover:text-[#ffffff] px-2 py-1 rounded transition duration-200"
          title="My Resume"
        >
          <BsFileEarmarkPdfFill size={24} />
        </Link>
        <Link
          href="https://github.com/alimohseni99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 cursor-pointer y-white hover:text-[#ffffff] px-2 py-1 rounded transition duration-200 "
          title="GitHub Profile"
        >
          <FaGithub size={24} />
        </Link>
        <span
          onClick={() => {
            copy("ali.mohseni05@yahoo.se");
            alert("Email address copied to clipboard!");
          }}
          className="text-gray-400 y-white hover:text-[#ffffff] px-2 py-1 rounded transition duration-200 cursor-pointer"
          title="My email"
        >
          <FaEnvelope size={24} />
        </span>
        <Link
          href="https://www.linkedin.com/in/ali-mohseni-se/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 cursor-pointer y-white hover:text-[#ffffff] px-2 py-1 rounded transition duration-200"
          title="Linkedin Profile"
        >
          <FaLinkedin size={24} />
        </Link>
      </div>
    </>
  );
}
