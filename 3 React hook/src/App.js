import React, { useState } from "react";
import UseEffect from "./useEffect";
import UseState from "./useState";

// informasi sedikit react Hook hanya bisa dipanggil didalam react fungsi component

function App() {
  return (
    <>
      <h1>Belajar react hook</h1>
      <h5>1. Ini untuk useState</h5>
      <UseState />
      <h5>2. ini untuk useEffect</h5>
      <UseEffect />
    </>
  );
}

export default App;
