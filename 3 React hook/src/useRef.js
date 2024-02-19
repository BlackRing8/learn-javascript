import React from "react";
import { useState, useRef, useEffect } from "react";

// Pada dasarnya use ref digunakan untuk mencegah useState merender ulang secara terus menerus
// di dalam komponen

const UseRef = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>
        My name is {name} and it used to be {prevName.current}{" "}
      </div>
    </>
  );
};

export default UseRef;
