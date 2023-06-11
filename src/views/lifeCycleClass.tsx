import React, { Component } from "react";

class ClasslifeCycle extends Component {
  constructor(props: any) {
    super(props);
    console.log("lifeCycle 컴포넌트가 생성됨");
  }

  componentDidMount(): void {
    console.log("lifeCycle 컴포넌트가 마운트 되었음");
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("lifeCycle 컴포넌트가 업데이트 되었음");
  }

  componentWillUnmount(): void {
    console.log("lifeCycle 컴포넌트가 언마운트 되었음");
  }

  render(): React.ReactNode {
    console.log("lifeCycle 컴포넌트가 렌더링 되었음.");
    return (
      <>
        <h1>클래스 컴포넌트의 생명주기</h1>
        <h2>
          개발자 도구를 확인하면 생명주기가 업데이트된 것을 확인할 수 있다.
        </h2>
      </>
    );
  }
}

export default ClasslifeCycle;
