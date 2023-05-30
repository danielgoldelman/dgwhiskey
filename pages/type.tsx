import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Header from "@/components/shared/head";
import Navbar from "@/components/shared/navbar";
import TypeMain from "@/components/type/typeContent";
import { types } from "@/components/statics";

export default function DrinkPage() {
  const [type, setType] = useState<string>("");
  const [typeDescription, setTypeDescription] = useState<string>("");

  /**
   * This function sets the type information and description based on the input type string.
   * @param {string} type - The type parameter is a string that represents the type of whiskey. It is
   * used to determine which type description to set.
   */
  function setTypeInfo(type: string) {
    setType(type);
    switch (type) {
      case types.bourbon.str: {
        setTypeDescription(types.bourbon.description);
        break;
      }
      case types.rye.str: {
        setTypeDescription(types.rye.description);
        break;
      }
      case types.tennessee.str: {
        setTypeDescription(types.tennessee.description);
        break;
      }
      case types.singleMalt.str: {
        setTypeDescription(types.singleMalt.description);
        break;
      }
      case types.singlePot.str: {
        setTypeDescription(types.singlePot.description);
        break;
      }
      case types.blended.str: {
        setTypeDescription(types.blended.description);
        break;
      }
      default: {
        // something is wrong
        break;
      }
    }
  }

  const reqTypeNull = useSearchParams().get("type");

  useEffect(() => {
    reqTypeNull ? setTypeInfo(reqTypeNull) : setTypeInfo("");
  }, [reqTypeNull]);

  return (
    <>
      <Header />
      <div className="text-white flex flex-col h-screen">
        <Navbar />
        <main className="h-full bg-gradient-to-b from-black to-orange-400 bg-auto justify-center flex overflow-y-auto relative">
          {type && typeDescription ? (
            <TypeMain type={type} typeDescription={typeDescription} />
          ) : (
            <></>
          )}
        </main>
      </div>
    </>
  );
}
