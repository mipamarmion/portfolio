import { Component } from "react";

export default class Base extends Component {
    render() {
        return (
            <div className="flex flex-row w-screen min-h-screen font-semibold bg-black">
                {this.props.children}
            </div>
        )
    }
}