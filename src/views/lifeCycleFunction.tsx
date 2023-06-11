import React, { useEffect } from 'react';

export default function FunctionLifeCycle() {
  useEffect(() => {
    console.log('마운트됨');

    return () => {
      console.log('언마운트됨');
    };
  }, []);

  useEffect(() => {
    console.log('업데이트됨');
  });

  console.log('렌더링됨');

  return (
    <>
      <h1>함수 컴포넌트의 생명주기</h1>
      <h2>
        개발자 도구를 확인하면 함수 컴포넌트의 생명주기가 업데이트된 것을 확인할 수 있다.
      </h2>
    </>
  );;
}