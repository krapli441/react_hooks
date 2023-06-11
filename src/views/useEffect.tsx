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
      <p>
        위 버튼을 누를 때마다 개발자 도구에서 useEffect가 작동하는 것을 확인할
        수 있습니다.
      </p>
    </div>
  );
}
