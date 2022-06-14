import "./stylebackground.css"
import {createContext, useState} from "react";
import TaskCard from "./TaskCard";
import BoxTarget from "./BoxTarget";
import BoxTargetNeutral from "./BoxTargetNeutral";
import BoxNoTarget from "./BoxNoTarget";
import AmbientPercentage from "./AmbientPercentage";
import Feedback from "./feedback";


export const CardContext = createContext({
    markAsDone: null
})
export const CardUnContext = createContext({
    markAsUnDone: null
})
export const CardNoContext = createContext({
    markAsNoDone: null
})


const Tasks = () => {

    const [taskList, setTaskList] = useState([
        {
            id: 1,
            text: "Acquistare energia da altre città",
            status: "neutral",
            taskAmbient: -1,
            taskSociety: 2,
            taskEconomy: -4
        },
        {
            id: 2,
            text: "Ampliare la rete piste ciclabili",
            status: "neutral",
            taskAmbient: 2,
            taskSociety: 4,
            taskEconomy: -3
        },
        {
            id: 3,
            text: "Introdurre un bonus per l'acquisto bici",
            status: "neutral",
            taskAmbient: 0,
            taskSociety: 1,
            taskEconomy: -3
        },
        {
            id: 4,
            text: "Reintrodurre i mezzi pubblici a benzina",
            status: "neutral",
            taskAmbient: -5,
            taskSociety: -2,
            taskEconomy: 1
        },
        {
            id: 5,
            text: "Cannoni per allontanare le nuvole",
            status: "neutral",
            taskAmbient: -4,
            taskSociety: -1,
            taskEconomy: -4
        },
        {
            id: 6,
            text: "Imporre un razionamento dell'energia elettrica",
            status: "neutral",
            taskAmbient: 0,
            taskSociety: -4,
            taskEconomy: 2
        },
        {
            id: 7,
            text: "Costruire centrali eoliche (necessaria deforestazione)",
            status: "neutral",
            taskAmbient: 0,
            taskSociety: 1,
            taskEconomy: -3
        },
        {
            id: 8,
            text: "Consultare dei climatologi e ambientalisti",
            status: "neutral",
            taskAmbient: 0,
            taskSociety: 1,
            taskEconomy: -1
        },
        {id: 9, text: "Aumentare le tasse", status: "neutral", taskAmbient: 0, taskSociety: -2, taskEconomy: 5},
        {
            id: 10,
            text: "Riconvertire parte dell'industria all'ibrido",
            status: "neutral",
            taskAmbient: -1,
            taskSociety: 2,
            taskEconomy: 4
        },
        {
            id: 11,
            text: "Studiare approfonditamente le anomalie atmosferiche",
            status: "neutral",
            taskAmbient: 0,
            taskSociety: 3,
            taskEconomy: -3
        },
        {
            id: 12,
            text: "Utilizzare le bici come alimentatori per produrre energia elettrica",
            status: "neutral",
            taskAmbient: 2,
            taskSociety: 1,
            taskEconomy: -1
        },
        {
            id: 13,
            text: "Creare un mondo virtuale bellissimo per far divertire la gente",
            status: "neutral",
            taskAmbient: -3,
            taskSociety: 4,
            taskEconomy: -3
        },
        {
            id: 14,
            text: "Costruire una centrale nucleare dove lavorano solo robot",
            status: "neutral",
            taskAmbient: 3,
            taskSociety: -1,
            taskEconomy: -2
        },
        {
            id: 15,
            text: "Usare droni per le consegne a domicilio",
            status: "neutral",
            taskAmbient: 0,
            taskSociety: -1,
            taskEconomy: 2
        },
        {
            id: 16,
            text: "Investire nella ricerca in campo agricolo",
            status: "neutral",
            taskAmbient: 4,
            taskSociety: 1,
            taskEconomy: -4
        },
        {
            id: 17,
            text: "Mandare gli studenti con voti bassi a lavorare nei campi agricoli",
            status: "neutral",
            taskAmbient: -1,
            taskSociety: -2,
            taskEconomy: 3
        },
        {
            id: 18,
            text: "Costruire nuovi impianti fotovoltaici (necessaria deforestazione)",
            status: "neutral",
            taskAmbient: -4,
            taskSociety: 3,
            taskEconomy: -2
        },
        {
            id: 19,
            text: "Investire nella ricerca universitaria per lo smaltimento batterie",
            status: "neutral",
            taskAmbient: 2,
            taskSociety: 3,
            taskEconomy: -5
        },
        {
            id: 20,
            text: "Incentivare l'acquisto di visori notturni per risparmiare nell'illuminazione",
            status: "neutral",
            taskAmbient: -1,
            taskSociety: -2,
            taskEconomy: 3
        },
        {
            id: 21,
            text: "Usare delle IA (intelligenze artificiali) per gestire le finanze cittadine",
            status: "neutral",
            taskAmbient: -2,
            taskSociety: 3,
            taskEconomy: 1
        },
        {
            id: 22,
            text: "Ridurre le dimensioni delle case per risparmiare energia e creare più aree verdi",
            status: "neutral",
            taskAmbient: 4,
            taskSociety: -4,
            taskEconomy: -1
        },
        {
            id: 23,
            text: "Introdurre nelle scuole dei corsi per lo studio delle fonti energetiche",
            status: "neutral",
            taskAmbient: 3,
            taskSociety: 2,
            taskEconomy: -3
        },
    ])

    const markAsDone = id => {
        const task = taskList.filter((task, i) => task.id == id);
        task[0].status = "goodIdea";
        setTaskList(taskList.filter((task, i) => task.id != id).concat(task[0]));
    };
    const markAsUnDone = id => {
        const task = taskList.filter((task, i) => task.id == id);
        task[0].status = "neutral";
        setTaskList(taskList.filter((task, i) => task.id != id).concat(task[0]));
    };
    const markAsNoDone = id => {
        const task = taskList.filter((task, i) => task.id == id);
        task[0].status = "badIdea";
        setTaskList(taskList.filter((task, i) => task.id != id).concat(task[0]));
    };
    const [limit, setLimit] = useState(0)
    const [helpme, setHelpme] = useState(false)
    const [finish, setFinish] = useState(false)
    const [point, setPoint] = useState(false)
    const [descrizione, setDescrizione] = useState("")
    const [winner, setWinner] = useState(false)
    if (winner === false) {
        if (point === false) {
            if (finish === false) {
                if (helpme === false) {
                    if (taskList.filter(t => t.status === "goodIdea").length > 3) {
                        if (taskList.filter(t => t.status === "badIdea").length > 3) {
                            return (

                                <CardContext.Provider value={{markAsDone}}>
                                    <CardUnContext.Provider value={{markAsUnDone}}>
                                        <CardNoContext.Provider value={{markAsNoDone}}>
                                            <div className="Alfa">
                                                <div style={{
                                                    backgroundColor: "#025e73",
                                                    paddingLeft: '5px',
                                                    color: "#ddd",
                                                    paddingBottom: '3px',
                                                    boxShadow: " 0 0 4px 4px #025e73",
                                                    paddingTop: "3px"
                                                }}>
                                                    <div style={{
                                                        textAlign: "center",
                                                        fontWeight: "900",
                                                        fontSize: "25px"
                                                    }}>Scegliete quattro idee da approvare e quattro idee da scartare
                                                        per migliorare il futuro.
                                                    </div>
                                                    <div style={{
                                                        textAlign: "center",
                                                        fontWeight: "900",
                                                        fontSize: "20px"
                                                    }}>
                                                        Avete ancora <span>{3 - limit}</span> tentativi possibili. Se
                                                        avete difficoltà
                                                        &nbsp;
                                                        <button style={{
                                                            fontWeight: "900",
                                                            fontSize: "18px",
                                                            cursor: "pointer",
                                                            backgroundColor: "#049dbf",
                                                            borderRadius: "5px",
                                                            color: "#eee",
                                                            textShadow: "1px 1px 2px #111111"
                                                        }} onClick={() => setHelpme(true)}>cliccate qui
                                                        </button>
                                                        &nbsp;
                                                        <button style={{
                                                            fontWeight: "900",
                                                            fontSize: "18px",
                                                            cursor: "pointer",
                                                            backgroundColor: "#049dbf",
                                                            borderRadius: "5px",
                                                            color: "#eee",
                                                            textShadow: "1px 1px 2px #111111"
                                                        }} onClick={() => {
                                                            setFinish(true);
                                                            setLimit(limit + 1)
                                                        }}>Abbiamo finito!
                                                        </button>
                                                    </div>

                                                </div>

                                                <div className="Bigbox">
                                                    <div className="Littlebox">
                                                        <div className="fullapproved">
                                                            <h2 style={{textAlign: "center", paddingTop: "3px"}}>Limite
                                                                numero idee approvate raggiunto</h2>
                                                            {taskList.filter((task, i) => task.status === "goodIdea").map((task, i) =>
                                                                (
                                                                    <TaskCard key={task.id.toString()} id={task.id}
                                                                              text={task.text}/>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="Littlebox">
                                                        <BoxTargetNeutral>
                                                            {
                                                                taskList.filter((task, i) => task.status === "neutral").map((task, i) =>
                                                                    (
                                                                        <TaskCard key={task.id.toString()} id={task.id}
                                                                                  text={task.text}/>
                                                                    )
                                                                )
                                                            }
                                                            <div onClick={() => setPoint(true)}
                                                                 className="stopping">...
                                                            </div>
                                                        </BoxTargetNeutral>

                                                    </div>
                                                    <div className="Littlebox">
                                                        <div className="fulldenyed">
                                                            <h2 style={{textAlign: "center", paddingTop: "3px"}}>Limite
                                                                numero idee scartate raggiunto</h2>
                                                            {taskList.filter((task, i) => task.status === "badIdea").map((task, i) =>
                                                                (
                                                                    <TaskCard key={task.id.toString()} id={task.id}
                                                                              text={task.text}/>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </CardNoContext.Provider>
                                    </CardUnContext.Provider>
                                </CardContext.Provider>
                            )
                        } else {
                            return (

                                <CardContext.Provider value={{markAsDone}}>
                                    <CardUnContext.Provider value={{markAsUnDone}}>
                                        <CardNoContext.Provider value={{markAsNoDone}}>
                                            <div className="Alfa">
                                                <div style={{
                                                    backgroundColor: "#025e73",
                                                    paddingLeft: '5px',
                                                    color: "#ddd",
                                                    paddingBottom: '3px',
                                                    boxShadow: " 0 0 4px 4px #025e73",
                                                    paddingTop: "3px"
                                                }}>
                                                    <div style={{
                                                        textAlign: "center",
                                                        fontWeight: "900",
                                                        fontSize: "25px"
                                                    }}>Scegliete quattro idee da approvare e quattro idee da scartare
                                                        per migliorare il futuro.
                                                    </div>
                                                    <div style={{
                                                        textAlign: "center",
                                                        fontWeight: "900",
                                                        fontSize: "20px"
                                                    }}>
                                                        Avete ancora <span>{3 - limit}</span> tentativi possibili. Se
                                                        avete difficoltà
                                                        &nbsp;
                                                        <button style={{
                                                            fontWeight: "900",
                                                            fontSize: "18px",
                                                            cursor: "pointer",
                                                            backgroundColor: "#049dbf",
                                                            borderRadius: "5px",
                                                            color: "#eee",
                                                            textShadow: "1px 1px 2px #111111"
                                                        }} onClick={() => setHelpme(true)}>cliccate qui
                                                        </button>
                                                    </div>

                                                </div>
                                                <div className="Bigbox">
                                                    <div className="Littlebox">
                                                        <div className="fullapproved">
                                                            <h2 style={{textAlign: "center", paddingTop: "3px"}}>Limite
                                                                numero idee approvate raggiunto</h2>
                                                            {taskList.filter((task, i) => task.status === "goodIdea").map((task, i) =>
                                                                (
                                                                    <TaskCard key={task.id.toString()} id={task.id}
                                                                              text={task.text}/>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="Littlebox">
                                                        <BoxTargetNeutral>
                                                            {
                                                                taskList.filter((task, i) => task.status === "neutral").map((task, i) =>
                                                                    (
                                                                        <TaskCard key={task.id.toString()} id={task.id}
                                                                                  text={task.text}/>
                                                                    )
                                                                )
                                                            }
                                                            <div onClick={() => setPoint(true)}
                                                                 className="stopping">...
                                                            </div>
                                                        </BoxTargetNeutral>
                                                    </div>
                                                    <div className="Littlebox">
                                                        <BoxNoTarget>
                                                            {taskList.filter((task, i) => task.status === "badIdea").map((task, i) =>
                                                                (
                                                                    <TaskCard key={task.id.toString()} id={task.id}
                                                                              text={task.text}/>
                                                                )
                                                            )}
                                                        </BoxNoTarget>
                                                    </div>

                                                </div>
                                            </div>

                                        </CardNoContext.Provider>
                                    </CardUnContext.Provider>
                                </CardContext.Provider>
                            )
                        }
                    } else {
                        if (taskList.filter(t => t.status === "badIdea").length > 3) {
                            return (

                                <CardContext.Provider value={{markAsDone}}>
                                    <CardUnContext.Provider value={{markAsUnDone}}>
                                        <CardNoContext.Provider value={{markAsNoDone}}>
                                            <div className="Alfa">
                                                <div style={{
                                                    backgroundColor: "#025e73",
                                                    paddingLeft: '5px',
                                                    color: "#ddd",
                                                    paddingBottom: '3px',
                                                    boxShadow: " 0 0 4px 4px #025e73",
                                                    paddingTop: "3px"
                                                }}>
                                                    <div style={{
                                                        textAlign: "center",
                                                        fontWeight: "900",
                                                        fontSize: "25px"
                                                    }}>Scegliete quattro idee da approvare e quattro idee da scartare
                                                        per migliorare il futuro.
                                                    </div>
                                                    <div style={{
                                                        textAlign: "center",
                                                        fontWeight: "900",
                                                        fontSize: "20px"
                                                    }}>
                                                        Avete ancora <span>{3 - limit}</span> tentativi possibili. Se
                                                        avete difficoltà
                                                        &nbsp;
                                                        <button style={{
                                                            fontWeight: "900",
                                                            fontSize: "18px",
                                                            cursor: "pointer",
                                                            backgroundColor: "#049dbf",
                                                            borderRadius: "5px",
                                                            color: "#eee",
                                                            textShadow: "1px 1px 2px #111111"
                                                        }} onClick={() => setHelpme(true)}>cliccate qui
                                                        </button>
                                                    </div>

                                                </div>
                                                <div className="Bigbox">
                                                    <div className="Littlebox">
                                                        <BoxTarget>
                                                            {taskList.filter((task, i) => task.status === "goodIdea").map((task, i) =>
                                                                (
                                                                    <TaskCard key={task.id.toString()} id={task.id}
                                                                              text={task.text}/>
                                                                )
                                                            )}
                                                        </BoxTarget>
                                                    </div>
                                                    <div className="Littlebox">
                                                        <BoxTargetNeutral>
                                                            {
                                                                taskList.filter((task, i) => task.status === "neutral").map((task, i) =>
                                                                    (
                                                                        <TaskCard key={task.id.toString()} id={task.id}
                                                                                  text={task.text}/>
                                                                    )
                                                                )
                                                            }
                                                            <div onClick={() => setPoint(true)}
                                                                 className="stopping">...
                                                            </div>
                                                        </BoxTargetNeutral>
                                                    </div>
                                                    <div className="Littlebox">

                                                        <div className="fulldenyed">
                                                            <h2 style={{textAlign: "center", paddingTop: "3px"}}>Limite
                                                                numero idee scartate raggiunto</h2>
                                                            {taskList.filter((task, i) => task.status === "badIdea").map((task, i) =>
                                                                (
                                                                    <TaskCard key={task.id.toString()} id={task.id}
                                                                              text={task.text}/>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </CardNoContext.Provider>
                                    </CardUnContext.Provider>
                                </CardContext.Provider>
                            )
                        } else {
                            return (

                                <CardContext.Provider value={{markAsDone}}>
                                    <CardUnContext.Provider value={{markAsUnDone}}>
                                        <CardNoContext.Provider value={{markAsNoDone}}>
                                            <div className="Alfa">
                                                <div style={{
                                                    backgroundColor: "#025e73",
                                                    paddingLeft: '5px',
                                                    color: "#ddd",
                                                    paddingBottom: '3px',
                                                    boxShadow: " 0 0 4px 4px #025e73",
                                                    paddingTop: "3px"
                                                }}>
                                                    <div style={{
                                                        textAlign: "center",
                                                        fontWeight: "900",
                                                        fontSize: "25px"
                                                    }}>Scegliete quattro idee da approvare e quattro idee da scartare
                                                        per migliorare il futuro.
                                                    </div>
                                                    <div style={{
                                                        textAlign: "center",
                                                        fontWeight: "900",
                                                        fontSize: "20px"
                                                    }}>
                                                        Avete ancora <span>{3 - limit}</span> tentativi possibili. Se
                                                        avete difficoltà
                                                        &nbsp;
                                                        <button style={{
                                                            fontWeight: "900",
                                                            fontSize: "18px",
                                                            cursor: "pointer",
                                                            backgroundColor: "#049dbf",
                                                            borderRadius: "5px",
                                                            color: "#eee",
                                                            textShadow: "1px 1px 2px #111111"
                                                        }} onClick={() => setHelpme(true)}>cliccate qui
                                                        </button>
                                                    </div>

                                                </div>
                                                <div className="Bigbox">
                                                    <div className="Littlebox">
                                                        <BoxTarget>
                                                            {taskList.filter((task, i) => (task.status === "goodIdea")).map((task, i) =>
                                                                (
                                                                    <TaskCard key={task.id.toString()} id={task.id}
                                                                              text={task.text}/>
                                                                )
                                                            )}
                                                        </BoxTarget>
                                                    </div>
                                                    <div className="Littlebox">

                                                        <BoxTargetNeutral>

                                                            {
                                                                taskList.filter((task, i) => (task.status === "neutral")).map((task, i) =>
                                                                    (
                                                                        <TaskCard key={task.id.toString()} id={task.id}
                                                                                  text={task.text}/>
                                                                    )
                                                                )
                                                            }
                                                            <div onClick={() => setPoint(true)}
                                                                 className="stopping">...
                                                            </div>

                                                        </BoxTargetNeutral>


                                                    </div>
                                                    <div className="Littlebox">
                                                        <BoxNoTarget>
                                                            {taskList.filter((task, i) => (task.status === "badIdea")).map((task, i) =>
                                                                (
                                                                    <TaskCard key={task.id.toString()} id={task.id}
                                                                              text={task.text}/>
                                                                )
                                                            )}
                                                        </BoxNoTarget>
                                                    </div>

                                                </div>
                                            </div>

                                        </CardNoContext.Provider>
                                    </CardUnContext.Provider>
                                </CardContext.Provider>
                            )
                        }
                    }
                } else {
                    return (<div className="MonitorUtopia">
                        <div style={{
                            backgroundColor: "#025e73",
                            paddingLeft: '5px',
                            paddingBottom: '3px',
                            boxShadow: " 0 0 4px 4px #025e73",
                            paddingTop: "3px"
                        }}>
                            <div style={{textAlign: "center", fontWeight: "900", fontSize: "25px", color: "#ddd"}}>Vi
                                serve una mano?
                            </div>
                            <div style={{textAlign: "center", fontWeight: "900", fontSize: "20px", color: "#ddd"}}>
                                Avete trovato la risposta che cercavate?
                                &nbsp;
                                <button style={{
                                    fontWeight: "900",
                                    fontSize: "18px",
                                    cursor: "pointer",
                                    backgroundColor: "#049dbf",
                                    borderRadius: "5px",
                                    color: "#eee",
                                    textShadow: "1px 1px 2px #111111"
                                }} onClick={() => setHelpme(false)}>Torna al lavoro
                                </button>
                            </div>

                        </div>
                        <div style={{
                            textAlign: "center",
                            color: "#ddd",
                            paddingTop: "10em",
                            fontSize: "30px",
                            fontWeight: "1000",
                            textShadow: '5px 5px 10px #000000'
                        }}>
                            Nell'altro schermo potrebbero esserci dei consigli utili!
                        </div>

                    </div>)
                }
            } else {
                if (limit < 3) {
                    return (
                        <div style={{backgroundColor: "#bfbfbf", height: "100vh", textShadow: "1px 1px 2px #000000"}}>
                            <div style={{
                                backgroundColor: "#025e73",
                                paddingLeft: '5px',
                                paddingBottom: '3px',
                                boxShadow: " 0 0 4px 4px #025e73",
                                paddingTop: "3px"
                            }}>
                                <div style={{
                                    textAlign: "center",
                                    fontWeight: "900",
                                    fontSize: "25px",
                                    color: "#ddd"
                                }}>Ecco il vostro risultato!
                                </div>
                                <div style={{textAlign: "center", fontWeight: "900", fontSize: "20px", color: "#ddd"}}>
                                    Non siete soddisfatti? Se c'è ancora tempo a disposizione, potete sempre
                                    &nbsp;
                                    <button style={{
                                        fontWeight: "900",
                                        fontSize: "18px",
                                        cursor: "pointer",
                                        backgroundColor: "#049dbf",
                                        borderRadius: "5px",
                                        color: "#eee",
                                        textShadow: "1px 1px 2px #111111"
                                    }} onClick={() => setFinish(false)}>riprovare cliccando qui
                                    </button>
                                </div>

                            </div>
                            <Feedback
                                a={50 + 2 * (Number(taskList.filter(i => i.status === "goodIdea").reduce((a, b) => Number(a) + Number(b.taskAmbient), 0)) -
                                    Number(taskList.filter(i => i.status === "badIdea").reduce((a, b) => Number(a) + Number(b.taskAmbient), 0)))}
                                e={50 + 2 * (Number(taskList.filter(i => i.status === "goodIdea").reduce((a, b) => Number(a) + Number(b.taskEconomy), 0)) -
                                    Number(taskList.filter(i => i.status === "badIdea").reduce((a, b) => Number(a) + Number(b.taskEconomy), 0)))}
                                s={50 + 2 * (Number(taskList.filter(i => i.status === "goodIdea").reduce((a, b) => Number(a) + Number(b.taskSociety), 0)) -
                                    Number(taskList.filter(i => i.status === "badIdea").reduce((a, b) => Number(a) + Number(b.taskSociety), 0)))}/>

                        </div>)
                } else {
                    return (
                        <div style={{backgroundColor: "#bfbfbf", height: "100vh", textShadow: "1px 1px 2px #0000000"}}>
                            <div style={{
                                backgroundColor: "#025e73",
                                paddingLeft: '5px',
                                paddingBottom: '3px',
                                boxShadow: " 0 0 4px 4px #025e73",
                                paddingTop: "3px"
                            }}>
                                <div style={{
                                    textAlign: "center",
                                    fontWeight: "900",
                                    fontSize: "25px",
                                    color: "#ddd"
                                }}>Ecco il vostro risultato!
                                </div>
                                <div style={{textAlign: "center", fontWeight: "900", fontSize: "20px", color: "#ddd"}}>
                                    Avete esaurito i tentativi a vostra disposizione.
                                </div>

                            </div>
                            <Feedback
                                a={50 + 2 * (Number(taskList.filter(i => i.status === "goodIdea").reduce((a, b) => Number(a) + Number(b.taskAmbient), 0)) -
                                    Number(taskList.filter(i => i.status === "badIdea").reduce((a, b) => Number(a) + Number(b.taskAmbient), 0)))}
                                e={50 + 2 * (Number(taskList.filter(i => i.status === "goodIdea").reduce((a, b) => Number(a) + Number(b.taskEconomy), 0)) -
                                    Number(taskList.filter(i => i.status === "badIdea").reduce((a, b) => Number(a) + Number(b.taskEconomy), 0)))}
                                s={50 + 2 * (Number(taskList.filter(i => i.status === "goodIdea").reduce((a, b) => Number(a) + Number(b.taskSociety), 0)) -
                                    Number(taskList.filter(i => i.status === "badIdea").reduce((a, b) => Number(a) + Number(b.taskSociety), 0)))}/>

                        </div>)
                }
            }
        } else {
            return (<div className="Winner">
                <div style={{
                    backgroundColor: "#025e73",
                    paddingLeft: '5px',
                    paddingBottom: '3px',
                    boxShadow: " 0 0 4px 4px #025e73",
                    paddingTop: "3px"
                }}>
                    <div style={{textAlign: "center", fontWeight: "900", fontSize: "25px", color: "#ddd"}}>
                        Complimenti! Avete sbloccato una sezione segreta!
                    </div>
                    <div style={{textAlign: "center", fontWeight: "900", fontSize: "20px", color: "#ddd"}}>
                        Inseriste nella casella di testo una soluzione ai problemi di Utopia inventata da voi.
                    </div>

                </div>
                <div style={{}}><textarea className="Text" placeholder={"La vostra idea..."} value={descrizione}
                                          onChange={e => setDescrizione(e.target.value)}/></div>
                <div className="flexy">
                    <div onClick={() => setPoint(false)}
                         style={{
                             textAlign: "center",
                             fontWeight: "900",
                             fontSize: "18px",
                             cursor: "pointer",
                             backgroundColor: "#049dbf",
                             borderRadius: "5px",
                             color: "#eee",
                             flexGrow: "1",
                             marginLeft: "20em",
                             marginRight: "10em",
                             textShadow: "1px 1px 2px #000000"
                         }}>
                        Annulla
                    </div>

                    <div style={{
                        textAlign: "center",
                        fontWeight: "900",
                        fontSize: "18px",
                        cursor: "pointer",
                        backgroundColor: "#049dbf",
                        borderRadius: "5px",
                        color: "#eee",
                        flexGrow: "1",
                        marginLeft: "10em",
                        marginRight: "20em",
                        textShadow: "1px 1px 2px #000000"
                    }}
                         onClick={() => {
                             if (descrizione !== "") {
                                 setWinner(true)
                             } else {
                                 alert("Inserite un testo prima di inviare")
                             }
                         }}>
                        Abbiamo finito
                    </div>
                </div>
            </div>)


        }
    } else {
        return (<div className="Winner">
            <div style={{
                backgroundColor: "#025e73",
                paddingLeft: '5px',
                paddingBottom: '3px',
                boxShadow: " 0 0 4px 4px #025e73",
                paddingTop: "3px"
            }}>
                <div style={{textAlign: "center", fontWeight: "900", fontSize: "25px", color: "#ddd"}}>
                    Congratulazioni!
                </div>
                <div style={{textAlign: "center", fontWeight: "900", fontSize: "20px", color: "#ddd"}}>
                    Siete ufficialmente diventati dei cittadini onorari di Utopia.
                </div>
            </div>
            <h1 style={{textAlign: "center", paddingLeft: "8em", paddingRight: "8em", paddingTop: "2em"}}>
                La vostra creatività non è da sottovalutare.
                Per risolvere i problemi di Utopia ci voleva ingegno e voi ne avete messo in campo parecchio.
                Affidarvi al vostro pensiero laterale è stata la mossa vincente. Ben fatto!
            </h1>
        </div>)
    }


};
export default Tasks;