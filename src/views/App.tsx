import React from "react";
import { ParentComponent,ChildComponent } from "./useContext";

export default function App() {
  return (
    <>
      <h1>테스트 해보겠습니다.</h1>
      <ParentComponent />
      <ChildComponent/>
    </>
  );
}
