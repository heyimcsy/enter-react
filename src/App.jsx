import React from 'react'
import Child from './components/Child'
import Son from './components/Son'

function Mother() {
  const name = 'yoonJin'
  return <Son motherName={name} />
}
function App() {
  // <---- 자바스크립트 영역 ---->
  const num = 19
  return (
    /* <---- HTML/JSX 영역  ---->*/
    <div
      style={{
        height: '100vh',
        display: ' flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* 이곳에 퀴즈를 위한 html 코드를 작성해 주세요 */}
      <h2>이것은 내 만든 App컴포넌트입니다</h2>
      <p>{num > 10 ? num + '은 10보다 크다' : num + '은 10보다 작다'}</p>
      <button
        onClick={() => {
          alert(num > 10 ? num + '은 10보다 크다' : num + '은 10보다 작다')
        }}
      >
        ???나는 무엇일까요???
      </button>
      <Child />
      <Mother />
    </div>
  )
}

export default App
