"use client";
import Link from "next/link";
import {
  FaEnvelope,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import copy from "copy-to-clipboard";

export function Socials() {
  return (
    <>
      <div className="flex space-x-3 items-center">
        <Link
          href="#"
          className="inline-flex items-center hover:bg-white text-white hover:text-[#111111] px-2 py-1 rounded transition duration-200 mr-2 border border-white"
        >
          <FaFileDownload size={18} className="mr-2" />
          Resume
        </Link>
        <Link
          href="https://github.com/alimohseni99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaGithub size={24} />
        </Link>
        <span
          onClick={() => {
            copy("ali.mohseni05@yahoo.se");
            alert("Email address copied to clipboard!");
          }}
          className="text-gray-400 hover:text-white cursor-pointer"
          id="email-icon"
        >
          <FaEnvelope size={24} />
        </span>
        <Link
          href="https://www.linkedin.com/in/ali-mohseni-se/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaLinkedin size={24} />
        </Link>
      </div>
    </>
  );
}
