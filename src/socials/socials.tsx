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
        <a
          href="#"
          className="inline-flex items-center hover:bg-white text-white hover:text-[#111111] px-2 py-1 rounded transition duration-200 mr-2 border border-white"
        >
          <FaFileDownload size={18} className="mr-2" />
          Resume
        </a>
        <a
          href="https://github.com/alimohseni99"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="mailto: ali.mohseni05@yahoo.se"
          className="text-gray-400 hover:text-white"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/ali-mohseni-se/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </>
  );
}
