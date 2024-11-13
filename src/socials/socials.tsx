import { FaFileDownload } from "react-icons/fa";
export function Socials() {
  return (
    <>
      <a
        href="#"
        className="inline-flex items-center hover:bg-white text-white hover:text-[#111111] px-2 py-1 rounded transition duration-200 mr-2 border border-white"
      >
        <FaFileDownload size={18} className="mr-2" />
        Resume
      </a>
    </>
  );
}
