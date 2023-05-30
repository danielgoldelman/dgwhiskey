interface TypeInterface {
  type: string;
  typeDescription: string;
}

export default function TypeMain({ type, typeDescription }: TypeInterface) {
  return (
    <div>
      <div className="grid grid-cols-11 py-8 sm:py-14">
        <div className="col-span-9 col-start-2 border border-white bg-black py-5 px-5 sm:px-10">
          <div className="text-4xl sm:text-6xl lg:text-8xl pb-5 sm:pb-10 text-center">
            {type}
          </div>
          <div className="text-base sm:text-lg md:text-2xl 2xl:text-3xl pb-4 sm:text-justify">
            {typeDescription}
          </div>
        </div>
      </div>
      {/* div is here to ensure that the content has space below. */}
      <div />
    </div>
  );
}
