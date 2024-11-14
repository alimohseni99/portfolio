import { AboutMe } from "@/about-me/about-me";
import { Header } from "@/header/header";
import Skills from "@/skils/skills";
import { Socials } from "@/socials/socials";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#111111] text-white">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <main className="p-6 max-w-screen-sm mx-auto">
            <div className="mb-6">
              <Header />
              <div className="mt-6">
                <Socials />
              </div>
            </div>
            <AboutMe />
            <Skills />
          </main>
        </div>

        {/* Desktop Layout */}
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
              <Skills />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
