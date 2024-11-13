import { Header } from "@/header/header";
import { Socials } from "@/socials/socials";

export default function Home() {
  return (
    <>
      <div className="hidden lg:flex flex-col xl:flex-row">
        <div className="xl:fixed xl:w-2/5 h-screen p-8 xl:p-12 xl:pl-[10%] flex flex-col justify-between min-w-[300px] max-w-[800px]">
          <div>
            <Header />
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
}
