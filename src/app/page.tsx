import { AboutMe, Experience, Header, Skills, Socials } from "@/components";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#111111] text-white">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <main className="p-6 max-w-screen-sm mx-auto">
            <div className="mb-6 animate-fadeIn delay-200">
              <Header />
              <div className="mt-6 animate-fadeIn delay-400">
                <Socials />
              </div>
            </div>
            <div className="animate-slideIn delay-600">
              <AboutMe />
            </div>
            <div className="animate-slideIn delay-800">
              <Skills />
            </div>
            <div className="mt-6 animate-fadeIn delay-800">
              <Experience />
            </div>
          </main>
        </div>

        {/* Desktop Layout */}
        <div className="flex flex-col lg:flex-row ">
          {/* Left Section */}
          <div className="lg:fixed lg:w-2/5 w-full h-auto lg:h-screen p-8 lg:p-12 lg:pl-[10%] flex flex-col justify-between">
            <div>
              <div className="animate-fadeIn delay-200">
                <Header />
              </div>
              <div className="mt-6 animate-fadeIn delay-400">
                <Socials />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="w-full lg:w-3/5 min-h-screen p-8 lg:p-12 lg:pr-[10%]"
            style={{
              marginLeft: "40%", // make sure that nothing disappears from screen
              maxWidth: "1200px",
              minWidth: "300px",
            }}
          >
            <main>
              <div className="animate-slideIn delay-600">
                <AboutMe />
              </div>
              <div className="animate-slideIn delay-800">
                <Skills />
              </div>
              <div className="mt-6 animate-fadeIn delay-800">
                <Experience />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
