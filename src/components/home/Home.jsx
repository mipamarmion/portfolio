import { Component } from "react";
import home from "../../images/home.png";
import Base from "../Base";
import NavBar from "../NavBar";
import CodeBlock from "../CodeBlock";
import Title from "../Title";
import Content from "./Content";

export default class Home extends Component {
    render() {
        return (
            <Base>
                <NavBar />
                <CodeBlock />
                <img src={home} className="absolute h-72 w-72"></img>
                <Title name="home">
                    <Content />
                </Title>
            </Base>
        )
    }
}
