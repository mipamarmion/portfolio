import { Component } from "react";
import Base from "../Base";
import CodeBlock from "../CodeBlock";
import Title from "../Title";
import home from "../../images/about.png";
import NavBar from "../NavBar";
import ProjectBlock from "../projects/ProjectBlock";

export default class Projects extends Component {
    render() {
        return (
            <Base>
                <NavBar />
                <CodeBlock />
                <img src={home} className="absolute h-72 w-72"></img>
                <Title name="projects">
                    <ProjectBlock />
                </Title>
            </Base>
        )
    }
}
