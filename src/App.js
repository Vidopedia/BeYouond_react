import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Tasks from "./tasks";
import {useState} from "react";
import AntiTasks from "./antitasks";


function App() {

    const [uto, setUto] = useState(false);
    const [dist, setDist] = useState(false);
    /*Attenzione, quest'app è pensata per essere visualizzata in full-screen da un pc,
    altri utilizzi potrebbero causarne un malfunzionamento o una visione non corretta
    * Warning, this app has been made to be visualize on full-screen from a pc monitor,
    other uses can cause a uncorrect visualization or errors*/

    if (dist === false && uto === false) {
        return (
            <div className="capo">
                <div style={{
                    color: "#eeeeee",
                    backgroundColor: "#222222",
                    textAlign: "center",
                    paddingTop: "3px",
                    paddingBottom: "3px",
                    fontWeight: "900",
                    fontSize: "30px",
                    boxShadow: " 0 0 4px 4px #222222"
                }}>
                    Premete sul simbolo che avete ricevuto per iniziare
                </div>

                <div className="alfabox">
                    <div className="padding"/>
                    <div className="luul" onClick={() => setDist(true)}>

                    </div>
                    <div className="soos" onClick={() => setUto(true)}>

                    </div>
                    <div className="padding"/>
                </div>
            </div>
        )
    } else {
        if (dist === false && uto === true) {
            return (
                <div>
                    <DndProvider backend={HTML5Backend}>
                        <Tasks/>
                    </DndProvider>
                </div>
            );
        }
        if (uto === false && dist === true) {
            return (<div>
                <DndProvider backend={HTML5Backend}>
                    <AntiTasks/>
                </DndProvider>
            </div>)
        }
    }

}

export default App;
