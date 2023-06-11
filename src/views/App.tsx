import React from "react";
import State from "./UseState";
import Modal from "./UseStateModal";
import { ParentComponent,ChildComponent } from "./useContext";

export default function App() {
  return (
    <>
      <h1>리액트의 훅스를 알아보겠습니다</h1>
      <State></State>
      <Modal></Modal>
      <ParentComponent />
      <ChildComponent/>
    </>
  );
}
