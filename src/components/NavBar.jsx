import { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <div className="flex gap-10 justify-end text-green-500 absolute right-16 top-10 h-24 w-screen">
                <div className="font-mono text-3xl underline mr-8">C:\&gt;</div>
                <Link to="/home">
                    <div className="font-mono text-3xl">/home/</div>
                </Link>
                <Link to="/projects">
                    <div className="font-mono text-3xl">/projects/</div>
                </Link>
                <Link to="/about">
                    <div className="font-mono text-3xl">/about/</div>
                </Link>
            </div>
        )
    }
}
