import './App.css';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);

  let titleArray = ['카타파하/', '파이썬 독학/', '자바 스터디/', '가나/', '다라/'];
  const [title, setTitle] = useState(titleArray);
  // console.log(title);
  title.sort((a, b) => {
    return (a < b) ? -1 : (a > b) > 0;
  });
  // if (a < b) {
  //   return -1;
  // } else if (a > b) {
  //   return 1;
  // } else {
  //   return 0;
  // }
  // console.log(title);

  const [showModal, setShowModal] = useState(true);

  return (
    <div className='container'>
      <div className='header'>ReactBlog</div>
      <div id="card">
        <p style={{ fontWeight: "bolder" }}>{toggle ? '남자' : '여자'}코트 추천</p>
        <span>2월 17일 발행</span>
        <br />
        <button onClick={() => (setToggle(toggle => !toggle))}>클릭</button>
      </div>
      <div id="card">
        <p style={{ fontWeight: "bolder" }}>강남 우동맛집</p>
        <span>2월 17일 발행</span>
      </div>
      <div id="card">
        <p style={{ fontWeight: "bolder" }}>{title}</p>
        <span>2월 17일 발행</span>
        <br />
        <button onClick={() => {
          let copy = [...title];
          copy[0] = '==/';
          setTitle(copy)
        }}>Edit</button>
      </div>
      <div>
        {showModal ? <Modal title={title} /> : null}
        <button onClick={() => { setShowModal(false) }}>Hide</button>
      </div>
      <div id="card">
        {
          title.map((a, i) => (
            <div>{title[i]}</div>
          ))
        }
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div id="card">
      <p style={{ fontWeight: "bolder", fontSize: "30px" }}>
        {props.title[4]}
      </p>
      <p>모달 테스트</p>
    </div>
  );
};

export default App;
