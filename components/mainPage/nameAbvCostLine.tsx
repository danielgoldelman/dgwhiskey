import { FC } from "react";

/**
 * NameAbvCostLine: Component for top of the list of drinks explaining the three columns
 * @returns tsx component
 */
const NameAbvCostLine: FC = () => {
  return (
    <div className="flex rounded-2xl text-m sm:text-xl md:text-2xl xl:text-3xl bg-[#0d1117] p-3" key={"top"}>
      <div className="w-4/6 pl-5" key={"topName"}>
        Name
      </div>
      <div className="w-1/6 text-center" key={"topAbv"}>
        ABV
      </div>
      <div className="w-1/6 text-center" key={"topPrice"}>
        Cost
      </div>
    </div>
  );
};

export default NameAbvCostLine