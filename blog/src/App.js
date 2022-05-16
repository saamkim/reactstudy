import './App.css';
import { useState } from 'react';

function Modal() {
  return (
    <div id="card">
      <p style={{ fontWeight: "bolder" }}>모달 우동맛집</p>
      <span>2월 17일 발행</span>
    </div>
  );
};

let i = 1;
let titles = ['파이썬 독학', '자바 스터디', '가나', '다라', '다14라', '마바사아'];
console.log(titles);
function ascending(a, b) {
  return (a < b) ? -1 : (a === b) > 0;
};
titles.sort(ascending);
console.log(titles);

function App() {
  const [toggle, setToggle] = useState(true);
  function clickedToggle() {
    setToggle(toggle => !toggle);
  };

  const [title, setTitle] = useState(titles[0]);
  function editTitle() {
    setTitle(titles[i % titles.length]);
    i++;
  };

  return (
    <div className='container'>
      <div className='header'>ReactBlog</div>
      <div id="card">
        <p style={{ fontWeight: "bolder" }}>{toggle ? '남자' : '여자'}코트 추천</p>
        <span>2월 17일 발행</span>
        <br />
        <button onClick={clickedToggle}>클릭</button>
      </div>
      <div id="card">
        <p style={{ fontWeight: "bolder" }}>강남 우동맛집</p>
        <span>2월 17일 발행</span>
      </div>
      <div id="card">
        <p style={{ fontWeight: "bolder" }}>{title}</p>
        <span>2월 17일 발행</span>
        <br />
        <button onClick={editTitle}>Edit</button>
      </div>
      <Modal />
    </div>
  );
}

export default App;
