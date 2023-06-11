import React from "react";
import State from "./UseState";
import Modal from "./UseStateModal";
import { ParentComponent, ChildComponent } from "./useContext";
import Effect from "./useEffect";
import LifeCycleClass from "./lifeCycleClass";
import LifeCycleFunction from "./lifeCycleFunction";

export default function App() {
  return (
    <>
      <h1>리액트의 훅스를 알아보겠습니다</h1>
      <State></State>
      <Modal></Modal>
      <Effect />
      <ParentComponent />
      <ChildComponent />
      <LifeCycleClass />
      <LifeCycleFunction />
    </>
  );
}
