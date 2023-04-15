import { Component } from "react";

export default class LineNumbers extends Component {
    render() {
      var lines = [];
      for(var i = 1; i < 30; i++) {
        lines.push(<div>{i}</div>);
      }
        return (
            <aside className="pt-80 flex flex-col text-white items-center sticky h-100 w-24 p-4 space-y-2">
              {lines}
            </aside>
        )
    }
}
