import React,{Component} from 'react';
import axios from 'axios'
/*
     실행 순서
     ==========
       index.js => webpack => entry : index.js  , output: bundle.js
       ReactDOM.render(<App />,document.getElementById('root'))
                       ========
                       App 호출
                          <App name="홍길동" age=30/>
                       1) constructor(props) => 속성값 전송 =>DEFAULT
                              props={name:'홍길동',age:30}
                              => 필요한 상태: state선언,이벤트 등록
                       2) render() : 브라우저에 출력할 HTML을 작성하는 부분
                          => 화면 UI
                             <div>
                               <h1>Hello</h1>
                             </div>
                             ==> React.createElement("div",null,
                                    React.createElement(h1,null,"Hello"))
                       3) render에서 작성한 XML=>HTML를 변환해서
                          index.html => 전송
                          => <div id="root">
                                <div>
                                 <h1>Hello</h1>
                                </div>
                             </div>
                        4) 사용자로 전송
          2) JSX
             1. HTML태그만 사용이 가능 (소문자)
             2. 클래스 대문자
             3. 속성 => "값"
             4. 계층 구조를 만든다 (최상위 태그)
             5. 변수값을 출력 {변수명}
             6. 클래스 호출 => <클래스명 >
             7. 외부 스타일 적용 => className ,id
             8. 인라인 스타일 => {{속성명:값,}}
                ============
                  -를 사용하지 않는다
                  margin-top  => marginTop
                  background-image => backgroundImage
          3) 컴포넌트 제작 형식
             1. class Hello extends Component : 클래스기반
             2. function Hello()
             3. const Hello=function()
             4. const Hello=()=>{}
             ==> 호출 => <Hello>
 */
class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            music:[],
            ss:''
        }
    }

}
class MusicTable extends Component{

}
class MusicRow extends Component{

}
class SearchBar extends Component{

}

export default App;
