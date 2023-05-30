import { Linger, Look, ReviewedDrink, Taste } from "@/components/interfaces";
import { useEffect } from "react";

interface SingleDrinkPage {
  singleDrink: ReviewedDrink;
  overview: string;
  look: Look;
  taste: Taste;
  linger: Linger;
}

export default function DrinkMain({
  singleDrink,
  overview,
  look,
  taste,
  linger,
}: SingleDrinkPage) {
  
  /* This `useEffect` hook is preloading an image file for a specific drink using its name. It fetches
  the image file using the `fetch` API and creates a blob URL for the image using
  `URL.createObjectURL`. It then creates a new `Image` object and sets its `src` property to the
  blob URL. Finally, it returns a cleanup function that revokes the blob URL using
  `URL.revokeObjectURL` to free up memory. The empty dependency array `[]` ensures that this effect
  only runs once when the component mounts. */
  useEffect(() => {
    let image: HTMLImageElement;

    /**
     * This function preloads an image file for a specific drink using its name.
     */
    const preloadSvg = async () => {
      try {
        const response = await fetch(
          "../../public/images/whiskeys/" +
            singleDrink.name.toLocaleLowerCase().replaceAll(" ", "") +
            ".jpg"
        );
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
  });

  return (
    <div>
      <div className="grid grid-cols-11 py-8 sm:py-14">
        <div className="col-span-9 col-start-2 border border-white bg-black py-5 px-5 sm:px-10">
          <div className="text-4xl sm:text-6xl lg:text-8xl pb-5 sm:pb-10 text-center">
            {singleDrink.name}
          </div>
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 place-items-center">
            <div className="col-span-1 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
              <div className="inline-flex gap-3 pb-4 sm:pb-6 md:pb-8 lg:pb-14 xl:pb-16 2xl:pb-20">
                <div className="underline lg:decoration-2 underline-offset-2 lg:underline-offset-4 xl:pr-2">
                  Distillery:
                </div>
                <div className="">{singleDrink.maker}</div>
              </div>
              <br />
              <div className="inline-flex gap-3 pb-4 sm:pb-6 md:pb-8 lg:pb-14 xl:pb-16 2xl:pb-20">
                <div className="underline lg:decoration-2 underline-offset-2 lg:underline-offset-4 xl:pr-2">
                  Owned By:
                </div>
                <div className="">{singleDrink.ownedBy}</div>
              </div>
              <br />
              <div className="inline-flex gap-3 pb-4 sm:pb-6 md:pb-8 lg:pb-14 xl:pb-16 2xl:pb-20">
                <div className="underline lg:decoration-2 underline-offset-2 lg:underline-offset-4 xl:pr-2">
                  Type:
                </div>
                <div className="">{singleDrink.type}</div>
              </div>
              <br />
              <div className="flex">
                <div className="inline-flex gap-3 pb-6 sm:pb-0">
                  <div className="underline lg:decoration-2 underline-offset-2 lg:underline-offset-4 xl:pr-2">
                    ABV:
                  </div>
                  <div className="">{singleDrink.abv.toString() + "%"}</div>
                </div>
                <div className="inline-flex gap-3 pl-5">
                  <div className="underline lg:decoration-2 underline-offset-2 lg:underline-offset-4 xl:pr-2">
                    Price:
                  </div>
                  <div className="">{"$" + singleDrink.price.toString()}</div>
                </div>
              </div>
            </div>
            <img
              src={
                "images/whiskeys/" +
                singleDrink.name.toLocaleLowerCase().replaceAll(" ", "") +
                ".jpg"
              }
              alt="Photo of whiskey"
              className="object-fill place-self-center w-full"
            />
          </div>
          <div className="py-4 lg:py-4 xl:py-6"></div>
          <div className="text-base sm:text-lg md:text-2xl 2xl:text-3xl pb-4 sm:text-justify">
            {overview}
          </div>
        </div>
      </div>
      {/* div is here to ensure that the content has space below. */}
      <div />
    </div>
  );
}
