import React from 'react';

function Section2Component({notice,gallery, modalOpen}){

    // 공지사항,갤러리 상태관리
    const [show, setShow]= React.useState(false);

    const onClickNoticeBbtnEvnt =(e)=>{ 
      e.preventDefault();
      setShow(false); //안보인다.
    }
    const onClickGalleryBbtnEvnt =(e)=>{
      e.preventDefault();
      setShow(true)  //보인다
    }

      //공지사항 클릭 이벤트 => 모달 띄우기 
      // const onClickModal=(e,z)=>{
      //   e.preventDefault();
      //   //최상위 위치의 모달 열기 함수 실행
      //   if(z!==0) return
      //   modalOpen();
      // }
      const onClickModal=(e)=>{
        e.preventDefault();
        //최상위 위치의 모달 열기 함수 실행
        modalOpen();
      }

  return (
    <section id="section2">
        <div className="left">
          <button onClick={onClickNoticeBbtnEvnt} className={`notice-btn ${show && 'on'}`}>공지사항</button>
          <button onClick={onClickGalleryBbtnEvnt} className={`gallery-btn ${show && 'on'}`}>갤러리</button>
          <div className={`notice-box ${show && 'on'}`}>
            <div className="gap">
                <ul>
                    {
                      notice.map((item,idx)=>{
                        return(
                         // <li key ={idx}><a href="!#" onClick={(e)=>onClickModal(e,idx)} className={idx === 0 ? 'modal-btn' : ''}>{item.공지글}</a><span>{item.날짜}</span></li>

                          idx === 0 ?
                          <li key ={idx}><a href="!#" onClick={onClickModal} className='modal-btn'>{item.공지글}</a><span>{item.날짜}</span></li>
                          :
                          <li key ={idx}><a href="!#" >{item.공지글}</a><span>{item.날짜}</span></li>

                        )
                      })
                    }
                      {/* className={idx === 0  && 'modal-btn'} */}


                  {/* <li><a href="!#" className="modal-btn">{item}</a><span>{item}</span></li>
                  <li><a href="!#">S/S 시즌 신규 의류 신상품 안내</a><span>2020.11.12</span></li>
                  <li><a href="!#">반품/환불 규정에 대해 알려드립니다</a><span>2020.11.07</span></li>
                  <li><a href="!#">3월 재입고 품목을 알려드립니다</a><span>2020.10.28</span></li> */}
                </ul>
            </div>
          </div>
          <div className= {`gallery-box ${show && 'on'}`}>
            <div className="gap">
              <ul>
                  {
                    gallery.map((item,idx)=>{
                      return(
                        <li key ={idx}>
                          <div className="col-gap"><a href="!#" title={item.제목}><img src={item.이미지소스} alt=""/></a></div>
                        </li>
                      )
                    })
                  }

                {/* <li>
                  <div className="col-gap"><a href="!#" title="img1"><img src="./images/icon1.jpg" alt=""/></a></div>
                </li>

                <li>
                  <div className="col-gap"><a href="!#" title="img2"><img src="./images/icon2.jpg" alt=""/></a></div>
                </li>

                <li>
                  <div className="col-gap"><a href="!#" title="img3"><img src="./images/icon3.jpg" alt=""/></a></div>
                </li> */}

              </ul>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="title"><h2 style={{color:'rgb(95,0,128)',fontSize:'16px'}}>BANNER LINK</h2></div>
          <div className="img-box">
            <a href="!#" title="banner"><img src="./images/banner.jpg" alt=""/></a>
          </div>
        </div>
        <div className="right">
          <div className="title"><h2 style={{color:'rgb(95,0,128)',fontSize:'16px', fontWeidth:'500'}}>DIRECT LINK</h2></div>
          <div className="img-box">
            <a href="!#" title="direct"><img src="./images/direct.jpg" alt=""/></a>
          </div>
        </div>  
    </section>
  );
};

    // 기본 프롭스만들기  (프롭스는 여기 내용이 바뀌면 다 바껴서 나온다)
    Section2Component.defaultProps= {
      notice : [
        {공지글:"신규회원 대상 할인 이벤트 안내", 날짜:"2020.11.23"},
        {공지글:"S/S 시즌 신규 의류 신상품 안내", 날짜:"2020.11.12"},
        {공지글:"반품/환불 규정에 대해 알려드립니다", 날짜:"2020.11.07"},
        {공지글:"3월 재입고 품목을 알려드립니다", 날짜:"2020.10.28"}
      ],
      gallery :[
        {제목:"img1",이미지소스:"./images/icon1.jpg" },
        {제목:"img2",이미지소스:"./images/icon2.jpg" },
        {제목:"img3",이미지소스:"./images/icon3.jpg" }
      ]
    }
export default Section2Component;