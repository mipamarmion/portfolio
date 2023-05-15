import { Component } from "react";
import plasma from "../../images/plasma.png"
import retro from "../../images/retro.png"

export default class ProjectBlock extends Component {
    render() {
        return (
          <aside style={{width: "68rem"}} className="pt-80 text-white items-center sticky h-screen w-96 p-4 space-y-4 font-mono">
              <div style={{width: "58rem"}} className="border-4 place-content-center grid grid-cols-3 border-green-800 rounded-sm">
                  <div className="flex"><img class="m-10 w-46 h-36" src={plasma}></img></div>
                  <div className="flex p-10 text-xl place-self-center">Reselling Dashboard</div>
                  <div className="flex p-10 text-m">A Dashboard and Tool for viewing analytics of items sold on Ebay, Shopify, and Amazon.</div>
                  <div><a href="https://github.com/mipamarmion/bozo-scanner-client">Github Repo.</a></div>
              </div>
              <div style={{width: "58rem"}} className="border-4 place-content-center grid grid-cols-3 border-green-800 rounded-sm">
                  <div className="flex"><img class="m-10 w-46 h-36" src={retro}></img></div>
                  <div className="flex p-10 text-xl place-self-center">Open AI Retro Competition</div>
                  <div className="flex p-10 text-m">A simple artificial inteligence that is able to work its way through Sonic the Hedgehog NES original levels.</div>
                  <div><a href="https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/retro-contest/gotta_learn_fast_report.pdf">Program Information</a></div>
              </div>
          </aside>
        )
    }
}
