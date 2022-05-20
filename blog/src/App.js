import './App.css';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);

  let titleArray = ['카타파하/', '파이썬 독학/', '자바 스터디/', '가나/', '다라/'];
  const [title, setTitle] = useState(titleArray);
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

  const [showModal, setShowModal] = useState(true);

  const [input, setInput] = useState('');
  const [showPost, setPost] = useState(false);
  const titleName = input;

  return (
    <div className='container'>
      <div className='header'>ReactBlog</div>
      <div id="card">
        <p style={{ fontWeight: "bolder" }}>{toggle ? '남자' : '여자'}코트 추천</p>
        <span>2월 17일 발행</span>
        <br />
        <button onClick={() => { setToggle(toggle => !toggle) }}>ToggleTitle1</button>
        <button id="delete_button">삭제</button>
      </div>
      <div id="card">
        <p style={{ fontWeight: "bolder" }}>강남 우동맛집</p>
        <span>2월 17일 발행</span>
        <button id="delete_button">삭제</button>
      </div>
      <div id="card">
        <p style={{ fontWeight: "bolder" }}>{title}</p>
        <span>2월 17일 발행</span>
        <br />
        <button onClick={() => {
          let copy = [...title];
          copy[2] = '==/';
          setTitle(copy);
        }}>EditArray[2]</button>
        <button id="delete_button">삭제</button>
      </div>
      <div>
        {showModal ? <Modal title={title} setToggle={setToggle} /> : null}
        <button onClick={() => { setShowModal(false) }}>HideModal</button>
      </div>
      <div id="card">
        <p style={{ fontWeight: "bolder" }}>MapTest</p>
        {
          title.map((a, i) => (
            <div>{title[i]}</div>
          ))
        }
      </div>
      {showPost ?
        <div id="card">
          <p style={{ fontWeight: "bolder" }}>{titleName}</p>
          <span>2월 17일 발행</span>
        </div>
        : null}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <input onChange={(e) => { setInput(e.target.value) }} placeholder={'제목...'} />
      <button onClick={() => { setPost(true) }}>+</button>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

function Modal(props) {
  return (
    <div id="card">
      <p style={{ fontWeight: "bolder", fontSize: "30px" }}>
        {props.title[2]}
      </p>
      <p>모달 테스트</p>
      <button onClick={() => { props.setToggle(toggle => !toggle) }}>ToggleTitle1</button>
    </div>
  );
};

export default App;