import { Component } from "react";
import Base from "../Base";
import CodeBlock from "../CodeBlock";
import Title from "../Title";
import home from "../../images/projects.png";
import NavBar from "../NavBar";

export default class About extends Component {
    render() {
        return (
            <Base>
                <NavBar />
                <CodeBlock />
                <img src={home} className="absolute h-72 w-72"></img>
                <Title name="about">
                    
                </Title>
            </Base>
        )
    }
}
