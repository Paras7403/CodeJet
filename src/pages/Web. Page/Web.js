
// import Editors from '../../components/web/WebEditors'
// import { useContext } from 'react';
// import { Context } from "../../context/Provider";
// import Result from '../../components/web/Result';

// function Web() {

//   const {html, setHtml, css, setCss, js, setJs} = useContext(Context);

//   return (
//     <div className="Web">
//       <div className="top-pane">
//         <Editors language={'html'} lang={'< HTML />'} code={html} onchange={setHtml}  defaultCode="<!DOCTYPE html>/>
//         <Editors language={'css'} lang={'* { CSS }'} code={css} onchange={setCss} defaultCode="/* Your default CSS code for Web Development */" />
//         <Editors language={'javascript'} lang={'Js { }'} code={js} onchange={setJs} defaultCode="// Your default JavaScript code for Web Development"/>
//       </div>
//       <div className="bottom-pane">
//         <Result />
//       </div>
//     </div>
//   );
// }

// export default Web;
import Editors from '../../components/web/WebEditors'
import { useContext } from 'react';
import { Context } from "../../context/Provider";
import Result from '../../components/web/Result';

function Web() {

  const {html, setHtml, css, setCss, js, setJs} = useContext(Context);
  const defaultHtmlCode = `
<div class="container">
  <h1 class="title" id="welcomeTitle">Welcome to <span class="code-jet">CodeJet</span></h1>
  <p class="description">Your gateway to coding adventures</p>
</div>
  `;

  const defaultCssCode = `
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: #fff;
  }
  
  .container {
    text-align: center;
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    animation: fadeIn 1s ease-out;
  }
  
  .title {
    color: #4CAF50;
    margin-bottom: 10px;
    opacity: 1;
  }
  
  .code-jet {
    color: #3498db;
  }
  
  .description {
    color: #bbb;
    font-size: 1.2rem;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 5s steps(30) infinite; /* Increased duration to 5 seconds */
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  
  `;

  const defaultJsCode = `
  document.addEventListener('DOMContentLoaded', function () {
    const titleElement = document.getElementById('welcomeTitle');
    const descriptionElement = document.querySelector('.description');
  
    // Add bounce animation to the title
    titleElement.style.animation = 'bounce 2s infinite';
  
    // Add typing animation to the description
    descriptionElement.style.animation = 'typing 3s steps(30) infinite';
  });
  `;
  return (
    <div className="Web">
      <div className="top-pane">
        <Editors language={'html'} lang={'< HTML />'} code={html} onchange={setHtml}  defaultCode={defaultHtmlCode} />
        <Editors language={'css'} lang={'* { CSS }'} code={css} onchange={setCss} defaultCode={defaultCssCode} />
        <Editors language={'javascript'} lang={'Js { }'} code={js} onchange={setJs} defaultCode={defaultJsCode}/>
      </div>
      <div className="bottom-pane">
        <Result />
      </div>
    </div>
  );
}

export default Web;