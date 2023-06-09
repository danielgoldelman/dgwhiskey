import ImageNext from "next/image";
import { useEffect } from "react";

export default function AboutContent() {
  /* The `useEffect` hook is being used to preload an image file (`portrait.jpg`) before it is
  displayed on the page. The function inside `useEffect` creates an `image` variable and defines a
  `preloadSvg` function that fetches the image file, creates a blob URL for it, and sets the `src`
  attribute of the `image` variable to the URL. The `useEffect` hook is called with an empty
  dependency array, which means it will only run once when the component mounts. The `return`
  statement inside `useEffect` defines a cleanup function that revokes the blob URL created for the
  image, which helps to free up memory. */
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
                src="/images/portrait.jpg"
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
            src="/svgs/linkedin.svg"
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
            src="/svgs/MiniMe.svg"
            alt="personal website button"
            width={35}
            height={80}
            className="cursor-pointer ml-4 mr-2"
            onClick={() =>
              window.open("https://www.danielgoldelman.dev/", "_blank")
            }
          />
          <ImageNext
            src="/svgs/github-mark-white.svg"
            alt="github logo"
            width={80}
            height={20}
            className="cursor-pointer p-3"
            onClick={() =>
              window.open("https://github.com/danielgoldelman", "_blank")
            }
          />
        </div>
      </div>
      <div className="pt-8"></div>
    </div>
  );
}
