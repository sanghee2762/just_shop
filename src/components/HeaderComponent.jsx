import React from 'react';

function HeaderComponent (props){
  const {homePath,logoTitle,imgSrc,imgAlt,subMenu1,subMenu2,subMenu3,subMenu4} = props;   

  // **상태관리 React.useState() -> 함수형 컴포넌트에 유명 (핵심)
  // addClass실제사용 (true/false)가지고있음  setAddClass 상태변수를 바꿔주는 변수
  // 메인메뉴부터 서브메뉴까지 관리하겠다~
  const[addClass, setAddClass] = React.useState({
    addClass1: false,
    addClass2: false,
    addClass3: false,
    addClass4: false
  });

  // **addClass 상태관리 객체의 속성을 비구조화
  const { addClass1,addClass2,addClass3,addClass4 } = addClass;


  const onMouseEnter1= ()=>{

    setAddClass({
      addClass1: true,
      addClass2: false,
      addClass3: false,
      addClass4: false
    })

  }
  const onMouseEnter2= ()=>{
    setAddClass({
      addClass1: false,
      addClass2: true,
      addClass3: false,
      addClass4: false
    })
  }
  const onMouseEnter3= ()=>{
    setAddClass({
      addClass1: false,
      addClass2: false,
      addClass3: true,
      addClass4: false
    })
  }
  const onMouseEnter4= ()=>{
    setAddClass({
      addClass1: false,
      addClass2: false,
      addClass3: false,
      addClass4: true
    })

  }

 // nav 를떠나면 이벤트
  const onMouseLeaveAddCalss = ()=>{
    setAddClass({
      addClass1: false,
      addClass2: false,
      addClass3: false,
      addClass4: false
    })
  }

  return (
    <header id="header">
        <div className="left">
          {/* <h1><a href={props.homePath} title={props.logoTitle}><img src={props.imgSrc} alt={props.imgAlt} /></a></h1> */}
          <h1><a href={homePath} title={logoTitle}><img src={imgSrc} alt={imgAlt} /></a></h1>
        </div>
        <div className="right">
        <nav id="nav" onMouseLeave={onMouseLeaveAddCalss}>
          <ul>
            <li> {/* find 자식요소 검색 */}
            {/* 메뉴1 */}
              <a   
              onMouseEnter ={onMouseEnter1} //이벤트
              // className={addClass1 ? 'main-btn on' : 'main-btn'} //메인버튼에 내려줌
              className={`main-btn  ${addClass1 && 'on'}`} //메인버튼에 내려줌
              href="!#" 
              title="탑"
              >탑</a>

              {/* <div className= {addClass1=== true? 'sub sub1 on' : 'sub sub1'}> */}
              <div className= {`sub sub1 ${addClass1 && 'on'}`}>
                <ul> {/* JAX 중괄호 안에 자바스크립트 코딩을 한다 */}
                  {  //중괄호 필수
                    subMenu1.map((item,idx)=>{  
                    return( //리턴으로 무조건 시작
                      <li key = {idx}><a href="!#" title={item}>{item}</a></li>
                    )
                    })
                  }
                </ul>
              </div>
            </li>
            <li>
              {/* 메뉴2 */}
              <a     
              onMouseEnter ={onMouseEnter2}            
              href="!#" 
                // className={addClass2 === true? 'main-btn on' : 'main-btn'}
              className={`main-btn ${addClass2 && 'on'}`}
              title="아우터"
              >아우터</a>
            {/* <div className= {addClass2=== true? 'sub sub2 on' : 'sub sub2'}> */}
            <div className= {`sub sub2 ${addClass2 && 'on'}`}>
                <ul>
                  {
                    subMenu2.map((item,idx)=>{
                      return(
                        <li key={idx}><a href="!#" title={item}>{item}</a></li>
                      )
                    })
                  }

                </ul>
              </div>              
            </li>
            <li>
              {/* 메뉴3 */}
              <a 
              onMouseEnter ={onMouseEnter3} 
              //  className={addClass3 === true? 'main-btn on' : 'main-btn'}
              className={`main-btn ${addClass3 && 'on'}`}
              href="!#" 
            
              title="팬츠"
              >팬츠</a>

              {/* <div className= {addClass3=== true? 'sub sub3 on' : 'sub sub3'}> */}
              <div className= {`sub sub3 ${addClass3 && 'on'}`}>
                <ul>
                  {
                    subMenu3.map((item,idx)=>{
                      return(
                        <li key={idx}><a href="!#" title={item}>{item}</a></li>
                      )
                    })
                  }
                </ul>
              </div>                
            </li>
            <li>
              {/* 메뉴4 */}
              <a 
              onMouseEnter ={onMouseEnter4} 
              //  className={addClass4 === true? 'main-btn on' : 'main-btn'}
              className={`main-btn ${addClass4 && 'on'}`}
              href="!#" 
              title="악세서리"
              >악세서리</a>
              {/* <div className= {addClass4=== true? 'sub sub4 on' : 'sub sub4'}> */}
              <div className= {`sub sub4 ${addClass4 && 'on'}`}>
                <ul>
                  {   
                    subMenu4.map((item,idx)=>{
                      return(
                        <li key={idx}><a href="!#" title={item}>{item}</a></li>
                      )
                    })
                  }

                </ul>
              </div>  
            </li>
          </ul>
        </nav>
        </div>
    </header>
  );
};

    // 헤더컴포넌트안에서 사용하는 모든 변수 (위에 헤더컴포넌트 밑에 만들어준다. 함수가먼저 만들어진후 가능)
    // 기본(Default) 프롭스 설정 
    // 객체  
    // 문자열로 등록
    HeaderComponent.defaultProps = {
      logoTitle:'JUST쇼핑몰', 
      homePath:'./index.html', 
      imgSrc:'./images/logo.png',
      imgAlt:'Logo Image',
      subMenu1:['블라우스','티','셔츠','니트'],
      subMenu2:['자켓','코트','가디건','머플러'],
      subMenu3:['청바지','짧은바지','긴바지','레깅스'],
      subMenu4:['귀고리','목걸이','반지','팔찌']

      // subMenu1:[    항복이 두개 이상일떄 쓰면 편리함
      //   {menu: '블라우스'}, 
      //   {menu: '티'}, 
      //   {menu: '셔츠'}, 
      //   {menu: '니트'}
      // ],
      // subMenu:[
      //   { subMenu1:['블라우스','티','셔츠','니트']},
      //   { subMenu2:['자켓','코트','가디건','머플러']},
      //   { subMenu3:['청바지','짧은바지','긴바지','레깅스']},
      //   { subMenu4:['귀고리','목걸이','반지','팔찌']}
      // ]
 
      }

export default HeaderComponent;