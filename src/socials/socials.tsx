"use client";
import copy from "copy-to-clipboard";
import Link from "next/link";
import {
  FaEnvelope,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export function Socials() {
  return (
    <>
      <div className="flex space-x-3 items-center">
        <Link
          href="/Cv.pdf"
          target="_blank"
          download={"Cv.pdf"}
          className="flex items-center bg-[#111111] hover:bg-white text-white hover:text-[#111111] px-3 py-1 rounded transition duration-300 mr-4 border border-white"
          title="My Resume"
        >
          <FaFileDownload size={18} className="mr-2" />
          Resume
        </Link>
        <Link
          href="https://github.com/alimohseni99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 cursor-pointer y-white hover:text-[#ffffff] rounded transition duration-200 "
          title="GitHub Profile"
        >
          <FaGithub size={24} />
        </Link>
        <span
          onClick={() => {
            copy("ali.mohseni05@yahoo.se");
            alert("Email address copied to clipboard!");
          }}
          className="text-gray-400 y-white hover:text-[#ffffff] rounded transition duration-200 cursor-pointer"
          title="My email"
        >
          <FaEnvelope size={24} />
        </span>
        <Link
          href="https://www.linkedin.com/in/ali-mohseni-se/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 cursor-pointer y-white hover:text-[#ffffff] rounded transition duration-200"
          title="Linkedin Profile"
        >
          <FaLinkedin size={24} />
        </Link>
      </div>
    </>
  );
}
