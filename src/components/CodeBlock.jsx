import { Component } from "react";

export default class Intro extends Component {
    constructor(props){
        super(props);
        this.state = {
            code: "0",
        }

        this.getCode = this.getCode.bind(this);
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                code: this.getCode()
            })
        }, 5);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getCode() {
        let code = this.state.code;
        

        if(code.length > 2100) {
            code = code.slice(0, - Math.floor(Math.random() * 150));
        } else {
            let index = Math.floor(Math.random() * code.length);
            let replacement = code.charAt(index) === "1" ? "0" : "1";

            code = code.substring(0, index) + replacement + code.substring(index + replacement.length);

            code += Math.floor(Math.random() * 2);
        }

        return code;
    }

    render() {
        return (
            <div className="flex gap-10 justify-end text-green-700 absolute right-16 top-48 w-screen">
                <div style={{width: "38rem"}} className="font-mono break-all">{this.state.code}</div>
            </div>
        )
    }
}
