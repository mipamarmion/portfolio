import { Component } from "react";

export default class Title extends Component {    constructor(props){
    super(props);
        this.state = {
            blink: "",
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                blink: this.state.blink === "_" ? "" : "_",
            })
        }, 900)
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    render() {
        return (
            <div>
                <h1 className="text-green-300 text-4xl ml-72 dragRegion">
                  web:\\ <a className="text-red-700">{this.props.name}</a>{this.state.blink}
                </h1>
                {this.props.children}
            </div>
        )
    }
}
