import ImageNext from "next/image";
import { useEffect } from "react";

export default function AboutContent() {
  useEffect(() => {
    let image: HTMLImageElement;

    const preloadSvg = async () => {
      try {
        const response = await fetch("../../public/static/portrait.jpg");
        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          image = new Image();
          image.src = url;
        }
      } catch (error) {
        console.error("Failed to preload SVG:", error);
      }
    };

    preloadSvg();

    return () => {
      if (image) {
        URL.revokeObjectURL(image.src);
      }
    };
  }, []);

  return (
    <div className="w-5/6 sm:w-3/4 py-8">
      <div className="pt-5"></div>
      <div className="border border-white bg-black py-5 px-5 sm:px-10 pb-10">
        <div className="text-4xl sm:text-6xl lg:text-8xl pb-5 sm:pb-10 text-center">
          About
        </div>
        <div className="text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl pb-10">
          <div className="2xl:grid 2xl:grid-cols-2 2xl:place-items-center">
            <div className="w-3/5 mx-auto sm:w-1/2 sm:float-right sm:ml-5 mb-5 max-w-[460px] 2xl:order-2 2xl:w-full 2xl:float-none">
              <img
                src="/static/portrait.jpg"
                alt="Photo of the creator"
                className="mx-auto"
              />
            </div>
            <div>
              <p>
                Hello! My name is Daniel Goldelman, and I am a Masters student
                studying Computer Science at Wesleyan University.
              </p>
              <br />
              <p>
                I have been an avid whiskey enthusiast for a few years, and am
                finally ready to share my (kinda) educated takes on the whiskeys
                I am exploring as I go. Please do not take anything here too
                seriously, since I&apos;m not either. This website is and always
                will be a work in progress, and is a small token of my
                appreciation for whiskey&apos;s long history, the many
                distilleries around the globe that make this glorious necter,
                and the many friends and family I have been honored to share a
                drink with.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <ImageNext
            src="/static/linkedin.svg"
            alt="linkedin button"
            width={80}
            height={80}
            className="cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/daniel-goldelman/",
                "_blank"
              )
            }
          />
          <ImageNext
            src="/static/MiniMe.svg"
            alt="personal website button"
            width={35}
            height={80}
            className="mx-4 cursor-pointer"
            onClick={() =>
              window.open("https://www.danielgoldelman.dev/", "_blank")
            }
          />
        </div>
      </div>
      <div className="pt-8"></div>
    </div>
  );
}
