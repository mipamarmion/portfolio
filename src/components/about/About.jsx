import { Component } from "react";
import Base from "../Base";
import CodeBlock from "../CodeBlock";
import Title from "../Title";
import home from "../../images/projects.png";
import astromike from "../../images/astromike.png";
import NavBar from "../NavBar";

export default class About extends Component {
    render() {
        return (
            <Base>
                <NavBar />
                <CodeBlock />
                <img src={home} className="absolute h-72 w-72"></img>
                <Title name="about">
                  <img src={astromike} className="absolute top-72 h-72 w-72"></img>
                  <aside style={{width: "68rem"}} className="pt-80 pl-80 text-white items-center absolute h-screen w-96 p-4 space-y-4 font-mono">
                    <div className="text-white bg-black h-auto">
                      My name is Michael Marmion. I am a Computer Science Undergraduate studying at Illinois State University. <br></br><br></br> On June 10th, 2023, I will be starting a full time role as a Software Engineer at State Farm. I have been working since May of 2017 as an intern at State Farm and have built up my reputation there. I currently am being managed by the ServiceNow Operations Workforce where I am training to obtain a System Administrator certification. <br></br><br></br>In my free time I enjoy playing guitar, hanging out with my friends, and travelling.
                      <br></br><br></br>
                      <a className="text-blue-400">Email:&nbsp;</a><a href="mailto::mipamarmion@gmail.com">mipamarmion@gmail.com</a>
                      <br></br><br></br>
                      <a className="text-blue-300">Phone:&nbsp;</a>(618)954-8648
                      <br></br><br></br>
                      <a className="text-blue-300">LinkedIn:&nbsp;</a><a className="underline" href="https://www.linkedin.com/in/michael-p-marmion">https://www.linkedin.com/in/michael-p-marmion</a>
                    </div>
                  </aside>
                </Title>
                
            </Base>
        )
    }
}
