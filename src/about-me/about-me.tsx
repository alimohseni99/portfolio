import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoDownloadOutline } from "react-icons/io5";
export function AboutMe() {
  return (
    <div className="p-5">
      <Image
        src="/profile-pic.png"
        width={120}
        height={120}
        className="rounded-full"
        alt="A picture of me"
      />
      <p className="font-bold text-3xl text-gray-100 tracking-wide ">
        Ali Mohseni
      </p>

      <p>📍 Stockholm, Sweden</p>
      <div className="flex flex-row">
        <a
          href="https://github.com/alimohseni99"
          className="inline-flex items-center justify-center rounded-md border px-2 py-1 transition duration-200  ml-2 space-x-2"
        >
          <IoDownloadOutline size={18} className="mb-1" />
          <span>RESUME</span>
        </a>
        <a
          href="https://github.com/alimohseni99"
          className="inline-flex items-center justify-center rounded-full ml-2 "
        >
          <BsGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/ali-mohseni-se/"
          className="inline-flex items-center justify-center rounded-full ml-2"
        >
          <BsLinkedin size={25} />
        </a>

        <a
          href="https://www.linkedin.com/in/ali-mohseni-se/"
          className="inline-flex items-center justify-center rounded-full ml-2"
        >
          <HiOutlineMail size={35} />
        </a>
      </div>
    </div>
  );
}
