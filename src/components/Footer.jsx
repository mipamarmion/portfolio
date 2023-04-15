import { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <div className="flex m-2 bg-black gap-10 justify-end text-green-500 absolute right-16 bottom-0 h-24 w-screen">
                Copyright &#169;2023 Michael Marmion
            </div>
        )
    }
}
