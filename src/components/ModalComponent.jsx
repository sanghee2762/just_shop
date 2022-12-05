import React from 'react';

function ModalComponent ({modalClose}){
  const onClickModalClose=(e)=>{
    e.preventDefault();
    modalClose();
  }
  return (
    <div id="modal">
        <div class="modal-wrap">
          <div class="modal-container">
            <div class="title">
              <h2>신규회원 대상 이벤트 안내</h2>
            </div>
            <div class="content">
              <ol>
                <li>
                    즐거운 쇼핑 환경을 위해 항상 노력하는 JUST 쇼핑몰입니다.
                </li>
                <li>
                    고객님들께 한 단계 더 나아가 보답하는 ON쇼핑몰이 되고자신규회원 대상 10% 할인 이벤트를 실시하고 있습니다.
                </li>
                <li>
                    웹과 모바일에서 모두 이용 가능하며, 수준 높은 서비스를 위해 앞으로도 꾸준히 노력할 것을 약속드립니다.              
                    <br/>
                    <br/>
                    <img src="./images/icon1.jpg" alt=""/>
                </li>
              </ol>
            </div>
            <div class="button-box">
              <button onClick={onClickModalClose} class="modal-close">닫기</button>
            </div>      
          </div>      
        </div>
    </div>
  );
};

export default ModalComponent;