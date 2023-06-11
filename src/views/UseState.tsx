import React, { useState } from "react";

export default function state() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="useState">
        <h2>리액트의 useState를 사용했습니다.</h2>
        <p>Count : {count}</p>
        <button onClick={() => setCount(count + 1)}> 증가시키기 </button>
        <button onClick={() => setCount(count - 1)}> 감소시키기 </button>
      </div>
    </>
  );
}
