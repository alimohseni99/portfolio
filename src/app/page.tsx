import { AboutMe } from "@/about-me/about-me";
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
        <div className="xl:ml-[40%] w-full xl:w-3/5 min-h-screen min-w-[500px] max-w-[1200px] mx-auto">
          <main className="p-8 xl:p-12 xl:pr-[10%]">
            <AboutMe />
          </main>
        </div>
      </div>
    </>
  );
}
