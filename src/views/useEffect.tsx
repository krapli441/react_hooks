import React, { useEffect, useState } from "react";

export default function effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("컴포넌트 마운트됨");

    return () => {
      console.log("컴포넌트 언마운트되거나 count가 변경됨.");
    };
  }, [count]);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>증가시키기</button>
    </div>
  );
}
