import React from "react";
import female from "./img/female.jpg"
import github from "./img/github.png"
import linkedin from "./img/linkedin.png"
import twitter from "./img/twitter.png"
import "./home.css";
const Home = () => {
  document.title = "Home"

  return (
    <div className="wrapper">
      <article className="article">
        <div className="main">
          <div className="details">
            <pre className="intro">Hello my name is </pre>
            <h1 className="name">Vaishnavi Paliya</h1>
            <h1 className="discription">
              i'm FrontEnd Developer i build fully functional FrontEnd Sites with React JS / Redux .
            </h1>
            <div className="para">
              <p className="verce">
               i'll suggest you to have a look at my Projects in "Projects" section.
              </p>
            </div>
            <div className="socials">
              <hr />
             <div>
             <a href="https://github.com/vaishnavipaliya11"><img className="social-icon" src={github}/></a>
             <a href="https://www.linkedin.com/in/vaishnavi-paliya-b7767620a/"><img className="social-icon" src={linkedin}/></a>
             <a href="https://twitter.com/PaliyaVaishnavi"><img className="social-icon" src={twitter}/></a>
             </div>
              <hr />
            </div>
          </div>
          <div className="avatar-container animate__animated animate__pulse animate__infinite">
            <img className="avatar" src={female} />
          </div>  
        </div>
      </article>
      
    </div>
  );
};

export { Home };
