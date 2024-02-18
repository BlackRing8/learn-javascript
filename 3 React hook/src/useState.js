import React, { useState } from "react";

const UseState = () => {
  //useState disini merupakan nilai awalan dari sebuah variable itu
  // count = variabel yang berisi nilai usestate atau nilai sementara sekarang
  // setCount nilai lanjutan
  const [count, setCount] = useState(0);

  //kita bisa membuat beberapa hook dalam sebuah function
  const [theme, setTheme] = useState("blue");

  //disini kita coba membuat fungsi pengurangan
  //dimana dalam fungsi nilai pada count akan kita kurang satu, dan hasilnya akan kita taruh pada variabel setCount
  function penguranganCount() {
    setCount(count - 1);
    setTheme("red");
  }

  //membuat fugsi penambahan

  function penambahanCount() {
    setCount(count + 1);
    setTheme("green");
  }

  return (
    <>
      <button onClick={penguranganCount}>-</button>
      {/* Jika kita menaruh variable dan melihat hasilnya maka akan muncul nilai dari yang sudah kita declare pad use state */}
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={penambahanCount}>+</button>
    </>
  );
};

export default UseState;
