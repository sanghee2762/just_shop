import React from 'react';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';
import ModalComponent from './ModalComponent';

function WrapComponent(){

  //모달 상태관리
  const [show, setShow] = React.useState(false); //기본펄스 안보이게

  // 모달 부모 컴포넌트에서 
  // 상태변경 함수를 만든다, 
  // 그리고 자식 컴포넌트에게 프롭스로 함수를 내려주고
  // 자식 컴포넌트에서  버튼 클릭 이벤트로 상태변경 함수를 실행한다, 그러면 변경

  //모달열기 함수
  const modalOpen=()=>{
    setShow(true);
  }

  //모달 닫기 함수
  const modalClose=()=>{
    setShow(false);
  }
  return (
    <div id='wrap'>
      <HeaderComponent/>
      <MainComponent modalOpen={modalOpen}/> 
      <FooterComponent/>
      {
        show && <ModalComponent modalClose={modalClose}/>
      }
    </div>
  );
};

export default WrapComponent;