import { create } from "domain";
import React, { useContext, createContext } from "react";

// Context 객체를 생성.
const MyContext = createContext("제가 만든 Context 객체입니다.");

// 부모 컴포넌트
export function ParentComponent() {
  const sharedState = "현재 공유된 상태임.";

  return (
    // Context.Provider를 사용하여 상태 제공
    <MyContext.Provider value={sharedState}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

// 자식 컴포넌트
export function ChildComponent() {
  // useContext를 사용하여 상태를 사용
  const sharedState = useContext(MyContext);

  return <div>{sharedState}</div>;
}
