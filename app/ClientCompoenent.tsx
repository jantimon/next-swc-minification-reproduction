"use client";
import { useState } from "react";
import { ContextDemo } from "./ContextExample";

export const ClientCompoenent = () => {
  const [count, setCount] = useState(0);

  return (
    <>

      <ContextDemo.Provider>
        <input />
      </ContextDemo.Provider>

      <button
        onClick={() => {
          console.log("click");
          setCount(count + 1);
        }}
      >
        +1 (rerender)
      </button>
    </>
  );
};