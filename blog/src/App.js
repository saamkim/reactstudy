import './App.css';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };


  return (
    <div className='container'>
      <div className='header'>ReactBlog</div>
      <div id="card">
        <p style={{ fontWeight: "bolder" }}>{!toggle ? '남자' : '여자'}코트 추천</p>
        <span>2월 17일 발행</span>
      </div>
      <div id="card">
        <p style={{ fontWeight: "bolder" }}>강남 우동맛집</p>
        <span>2월 17일 발행</span>
      </div>
      <div id="card">
        <p style={{ fontWeight: "bolder" }}>파이썬 독학</p>
        <span>2월 17일 발행</span>
      </div>
      <button onClick={clickedToggle} toggle={toggle}>클릭</button>
    </div>
  );
}

export default App;
