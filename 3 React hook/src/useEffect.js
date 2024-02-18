import React from "react";
import { useState, useEffect } from "react";

//pada dasarnya usuEffect adalah sebuah function yang akan selalu di render setiap sebuah page dirender.

const UseEffect = () => {
  //useState
  const [kalimat, setKalimat] = useState("yg bener aje");

  function rubahKalimatt() {
    setKalimat("rugi dong");
  }

  function rubahKalimat2() {
    setKalimat("yg bener aje");
  }
  //

  // render useEffect yg seperti ini hanya akan mengeksekusi console log di render awal.
  useEffect(() => {
    console.log("render");
  }, []);

  //tapi console log ini akan selalu di eksekusi
  console.log("coba");

  return (
    <>
      <button onClick={rubahKalimatt}>-</button>
      {/* Jika kita menaruh variable dan melihat hasilnya maka akan muncul nilai dari yang sudah kita declare pad use state */}
      <span>{kalimat}</span>
      <button onClick={rubahKalimat2}>+</button>
    </>
  );
};

export default UseEffect;
