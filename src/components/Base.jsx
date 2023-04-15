import { Component } from "react";
import Footer from "./Footer";

export default class Base extends Component {
    render() {
        return (
            <div className="flex flex-row w-screen min-h-screen relative font-semibold bg-black">
                {this.props.children}
                <Footer />
            </div>
        )
    }
}