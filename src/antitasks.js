import "./stylebackground.css"
import {useState} from "react";
import AntiTaskCard from "./AntiTaskCard";
import AntiBoxTargetNeutral from "./AntiBoxTargetNeutral";
import AntiBoxNoTarget from "./AntiBoxNoTarget";
import AntiBoxTarget from "./AntiBoxTarget";
import {CardContext, CardNoContext, CardUnContext} from "./tasks";
import AmbientPercentage from "./AmbientPercentage";
import Antifeedback from "./antifeedback";

const AntiTasks = () => {

    const [taskList, setTaskList] = useState([
        {
            id: 1,
            text: "Introdurre pagamento biglietto mezzi pubblici",
            status: "neutral",
            taskAmbient: 0,
            taskSociety: -4,
            taskEconomy: 5
        },
        {
            id: 2,
            text: "Acquistare nuovi mezzi pubblici",
            status: "neutral",
            taskAmbient: 1,
            taskSociety: 4,
            taskEconomy: -5,
        },
        {id: 3, text: "Incentivi psicologici", status: "neutral", taskAmbient: 0, taskSociety: 5, taskEconomy: -3},
        {
            id: 4,
            text: "Reintrodurre la possibilità di usare l'auto",
            status: "neutral",
            taskAmbient: -4,
            taskSociety: 4,
            taskEconomy: 0
        },
        {id: 5, text: "Riabilitare parcheggi", status: "neutral", taskAmbient: -4, taskSociety: 2, taskEconomy: -1},
        {
            id: 6,
            text: "Aumentare i controlli della polizia per prevenire le violenze",
            status: "neutral",
            taskAmbient: 1,
            taskSociety: 1,
            taskEconomy: -1
        },
        {
            id: 7,
            text: "Riconvertire i parcheggi abbandonati per costruire parchi",
            status: "neutral",
            taskAmbient: 5,
            taskSociety: 3,
            taskEconomy: -2
        },
        {
            id: 8,
            text: "Smaltire le auto abbandonate e recuperare i materiali",
            status: "neutral",
            taskAmbient: 5,
            taskSociety: 4,
            taskEconomy: -2
        },
        {
            id: 9,
            text: "Dare incentivi alle fabbriche che rimborsano la terapia psicologica",
            status: "neutral",
            taskAmbient: 0,
            taskSociety: 4,
            taskEconomy: -3
        },
        {
            id: 10,
            text: "Trasferire parte della popolazione su una stazione spaziale",
            status: "neutral",
            taskAmbient: 3,
            taskSociety: 2,
            taskEconomy: -5
        },
        {
            id: 11,
            text: "Creare dei metaversi (mondi virtuali) dove la gente possa svagarsi",
            status: "neutral",
            taskAmbient: -1,
            taskSociety: 4,
            taskEconomy: -4
        },
        {
            id: 12,
            text: "Usare IA (intelligenza artificiale) per tenere compagnia alle persone",
            status: "neutral",
            taskAmbient: -1,
            taskSociety: 1,
            taskEconomy: -3
        },
        {
            id: 13,
            text: "Sostituire i robot agli umani nelle mansioni più semplici",
            status: "neutral",
            taskAmbient: 0,
            taskSociety: -5,
            taskEconomy: 1
        },
        {
            id: 14,
            text: "Insegnare a tutta la popolazione delle competenze base di programmazione",
            status: "neutral",
            taskAmbient: 0,
            taskSociety: 4,
            taskEconomy: -4
        },
        {
            id: 15,
            text: "Creare centri di co-working e scambio culturale",
            status: "neutral",
            taskAmbient: 0,
            taskSociety: 5,
            taskEconomy: -4
        },
        {
            id: 16,
            text: "Incentivare lo smart working per ridurre gli spostamenti",
            status: "neutral",
            taskAmbient: 2,
            taskSociety: -3,
            taskEconomy: 1
        },
        {
            id: 17,
            text: "Convertire aree dismesse in orti urbani",
            status: "neutral",
            taskAmbient: 3,
            taskSociety: 3,
            taskEconomy: -3
        },
        {
            id: 18,
            text: "Investire risorse nella ricerca spaziale",
            status: "neutral",
            taskAmbient: 2,
            taskSociety: 3,
            taskEconomy: -5
        },
        {
            id: 19,
            text: "Adoperare robot per i lavori più pericolosi",
            status: "neutral",
            taskAmbient: -1,
            taskSociety: 2,
            taskEconomy: -3
        },
        {
            id: 20,
            text: "Usare dispositivi di realtà virtuale per far sembrare le case più belle",
            status: "neutral",
            taskAmbient: -2,
            taskSociety: 2,
            taskEconomy: 0
        },
        {
            id: 21,
            text: "Far utilizzare il riscaldamento esclusivamente agli ospedali, asili e RSA",
            status: "neutral",
            taskAmbient: 5,
            taskSociety: -4,
            taskEconomy: 2
        },
        {
            id: 22,
            text: "Creare una rete di piste ciclabili",
            status: "neutral",
            taskAmbient: 3,
            taskSociety: 3,
            taskEconomy: -4
        },
        {
            id: 23,
            text: "Ampliare la rete di linee metropolitane",
            status: "neutral",
            taskAmbient: 3,
            taskSociety: 4,
            taskEconomy: -5
        },
    ])

    const [limit, setLimit] = useState(0)
    const [helpme, setHelpme] = useState(false)
    const [finish, setFinish] = useState(false)
    const [point, setPoint] = useState(false)
    const [descrizione, setDescrizione] = useState("")
    const [winner, setWinner] = useState(false)

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
                                            <div className="antiAlfa">
                                                <div style={{
                                                    backgroundColor: "#bf6211",
                                                    paddingLeft: '5px',
                                                    paddingBottom: '3px',
                                                    boxShadow: " 0 0 4px 4px #bf6211",
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
                                                            backgroundColor: "#f2b705",
                                                            borderRadius: "5px",
                                                            textShadow: "1px 1px 2px #333333"
                                                        }} onClick={() => setHelpme(true)}>cliccate qui
                                                        </button>
                                                        &nbsp;
                                                        <button style={{
                                                            fontWeight: "900",
                                                            fontSize: "18px",
                                                            cursor: "pointer",
                                                            backgroundColor: "#f2b705",
                                                            borderRadius: "5px",
                                                            textShadow: "1px 1px 2px #333333"
                                                        }} onClick={() => {
                                                            setFinish(true);
                                                            setLimit(limit + 1)
                                                        }}>Abbiamo finito!
                                                        </button>
                                                    </div>

                                                </div>

                                                <div className="antiBigbox">
                                                    <div className="Littlebox">
                                                        <div className="antifullapproved">
                                                            <h2 style={{
                                                                textAlign: "center",
                                                                paddingTop: "3px",
                                                                textShadow: "1px 1px 2px #111111"
                                                            }}>Limite numero idee approvate raggiunto</h2>
                                                            {taskList.filter((task, i) => task.status === "goodIdea").map((task, i) =>
                                                                (
                                                                    <AntiTaskCard key={task.id.toString()} id={task.id}
                                                                                  text={task.text}/>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="Littlebox">
                                                        <AntiBoxTargetNeutral>
                                                            {
                                                                taskList.filter((task, i) => task.status === "neutral").map((task, i) =>
                                                                    (
                                                                        <AntiTaskCard key={task.id.toString()}
                                                                                      id={task.id} text={task.text}/>
                                                                    )
                                                                )
                                                            }
                                                            <div onClick={() => setPoint(true)}
                                                                 className="antistopping">...
                                                            </div>
                                                        </AntiBoxTargetNeutral>

                                                    </div>
                                                    <div className="Littlebox">
                                                        <div className="antifulldenyed">
                                                            <h2 style={{
                                                                textAlign: "center",
                                                                paddingTop: "3px",
                                                                textShadow: "1px 1px 2px #111111"
                                                            }}>Limite numero idee scartate raggiunto</h2>
                                                            {taskList.filter((task, i) => task.status === "badIdea").map((task, i) =>
                                                                (
                                                                    <AntiTaskCard key={task.id.toString()} id={task.id}
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
                                            <div className="antiAlfa">
                                                <div style={{
                                                    backgroundColor: "#bf6211",
                                                    paddingLeft: '5px',
                                                    paddingBottom: '3px',
                                                    boxShadow: " 0 0 4px 4px #bf6211",
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
                                                            backgroundColor: "#f2b705",
                                                            borderRadius: "5px",
                                                            textShadow: "1px 1px 2px #333333"
                                                        }} onClick={() => setHelpme(true)}>cliccate qui
                                                        </button>
                                                    </div>

                                                </div>
                                                <div className="antiBigbox">
                                                    <div className="Littlebox">
                                                        <div className="antifullapproved">
                                                            <h2 style={{
                                                                textAlign: "center",
                                                                paddingTop: "3px",
                                                                textShadow: "1px 1px 2px #111111"
                                                            }}>Limite numero idee approvate raggiunto</h2>
                                                            {taskList.filter((task, i) => task.status === "goodIdea").map((task, i) =>
                                                                (
                                                                    <AntiTaskCard key={task.id.toString()} id={task.id}
                                                                                  text={task.text}/>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="Littlebox">
                                                        <AntiBoxTargetNeutral>
                                                            {
                                                                taskList.filter((task, i) => task.status === "neutral").map((task, i) =>
                                                                    (
                                                                        <AntiTaskCard key={task.id.toString()}
                                                                                      id={task.id} text={task.text}/>
                                                                    )
                                                                )
                                                            }
                                                            <div onClick={() => setPoint(true)}
                                                                 className="antistopping">...
                                                            </div>
                                                        </AntiBoxTargetNeutral>
                                                    </div>
                                                    <div className="Littlebox">
                                                        <AntiBoxNoTarget>
                                                            {taskList.filter((task, i) => task.status === "badIdea").map((task, i) =>
                                                                (
                                                                    <AntiTaskCard key={task.id.toString()} id={task.id}
                                                                                  text={task.text}/>
                                                                )
                                                            )}
                                                        </AntiBoxNoTarget>
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
                                            <div className="antiAlfa">
                                                <div style={{
                                                    backgroundColor: "#bf6211",
                                                    paddingLeft: '5px',
                                                    paddingBottom: '3px',
                                                    boxShadow: " 0 0 4px 4px #bf6211",
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
                                                            backgroundColor: "#f2b705",
                                                            borderRadius: "5px",
                                                            textShadow: "1px 1px 2px #333333"
                                                        }} onClick={() => setHelpme(true)}>cliccate qui
                                                        </button>
                                                    </div>

                                                </div>
                                                <div className="antiBigbox">
                                                    <div className="Littlebox">
                                                        <AntiBoxTarget>
                                                            {taskList.filter((task, i) => task.status === "goodIdea").map((task, i) =>
                                                                (
                                                                    <AntiTaskCard key={task.id.toString()} id={task.id}
                                                                                  text={task.text}/>
                                                                )
                                                            )}
                                                        </AntiBoxTarget>
                                                    </div>
                                                    <div className="Littlebox">
                                                        <AntiBoxTargetNeutral>
                                                            {
                                                                taskList.filter((task, i) => task.status === "neutral").map((task, i) =>
                                                                    (
                                                                        <AntiTaskCard key={task.id.toString()}
                                                                                      id={task.id} text={task.text}/>
                                                                    )
                                                                )
                                                            }
                                                            <div onClick={() => setPoint(true)}
                                                                 className="antistopping">...
                                                            </div>
                                                        </AntiBoxTargetNeutral>
                                                    </div>
                                                    <div className="Littlebox">

                                                        <div className="antifulldenyed">
                                                            <h2 style={{
                                                                textAlign: "center",
                                                                paddingTop: "3px",
                                                                textShadow: "1px 1px 2px #111111"
                                                            }}>Limite numero idee scartate raggiunto</h2>
                                                            {taskList.filter((task, i) => task.status === "badIdea").map((task, i) =>
                                                                (
                                                                    <AntiTaskCard key={task.id.toString()} id={task.id}
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
                                            <div className="antiAlfa">
                                                <div style={{
                                                    backgroundColor: "#bf6211",
                                                    paddingLeft: '5px',
                                                    paddingBottom: '3px',
                                                    boxShadow: " 0 0 4px 4px #bf6211",
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
                                                            backgroundColor: "#f2b705",
                                                            borderRadius: "5px",
                                                            textShadow: "1px 1px 2px #333333"
                                                        }} onClick={() => setHelpme(true)}>cliccate qui
                                                        </button>
                                                    </div>

                                                </div>
                                                <div className="antiBigbox">
                                                    <div className="Littlebox">
                                                        <AntiBoxTarget>
                                                            {taskList.filter((task, i) => (task.status === "goodIdea")).map((task, i) =>
                                                                (
                                                                    <AntiTaskCard key={task.id.toString()} id={task.id}
                                                                                  text={task.text}/>
                                                                )
                                                            )}
                                                        </AntiBoxTarget>
                                                    </div>
                                                    <div className="Littlebox">
                                                        <AntiBoxTargetNeutral>
                                                            {
                                                                taskList.filter((task, i) => (task.status === "neutral")).map((task, i) =>
                                                                    (
                                                                        <AntiTaskCard key={task.id.toString()}
                                                                                      id={task.id} text={task.text}/>
                                                                    )
                                                                )
                                                            }
                                                            <div onClick={() => setPoint(true)}
                                                                 className="antistopping">...
                                                            </div>
                                                        </AntiBoxTargetNeutral>
                                                    </div>
                                                    <div className="Littlebox">
                                                        <AntiBoxNoTarget>
                                                            {taskList.filter((task, i) => (task.status === "badIdea")).map((task, i) =>
                                                                (
                                                                    <AntiTaskCard key={task.id.toString()} id={task.id}
                                                                                  text={task.text}/>
                                                                )
                                                            )}
                                                        </AntiBoxNoTarget>
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
                    return (<div className="MonitorDystopia">
                        <div style={{
                            backgroundColor: "#bf6211",
                            paddingLeft: '5px',
                            paddingBottom: '3px',
                            boxShadow: " 0 0 4px 4px #bf6211",
                            paddingTop: "3px"
                        }}>
                            <div style={{textAlign: "center", fontWeight: "900", fontSize: "25px"}}>Vi serve una mano?
                            </div>
                            <div style={{textAlign: "center", fontWeight: "900", fontSize: "20px"}}>
                                Avete trovato la risposta che cercavate?
                                &nbsp;
                                <button style={{
                                    fontWeight: "900",
                                    fontSize: "18px",
                                    cursor: "pointer",
                                    backgroundColor: "#f2b705",
                                    borderRadius: "5px",
                                    textShadow: "1px 1px 2px #333333"
                                }} onClick={() => setHelpme(false)}>Torna al lavoro
                                </button>
                            </div>

                        </div>
                        <div style={{
                            textAlign: "center",
                            color: "#f2d795",
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
                        <div style={{backgroundColor: "#0d0d0d", height: "100vh", textShadow: "1px 1px 2px #333333"}}>
                            <div style={{
                                backgroundColor: "#bf6211",
                                paddingLeft: '5px',
                                paddingBottom: '3px',
                                boxShadow: " 0 0 4px 4px #bf6211",
                                paddingTop: "3px"
                            }}>
                                <div style={{textAlign: "center", fontWeight: "900", fontSize: "25px"}}>Ecco il vostro
                                    risultato!
                                </div>
                                <div style={{textAlign: "center", fontWeight: "900", fontSize: "20px"}}>
                                    Non siete soddisfatti? Se c'è ancora tempo a disposizione, potete sempre
                                    &nbsp;
                                    <button style={{
                                        fontWeight: "900",
                                        fontSize: "18px",
                                        cursor: "pointer",
                                        backgroundColor: "#f2b705",
                                        borderRadius: "5px",
                                        textShadow: "1px 1px 2px #333333"
                                    }} onClick={() => setFinish(false)}>riprovare cliccando qui
                                    </button>
                                </div>

                            </div>
                            <Antifeedback
                                a={50 + 2 * (Number(taskList.filter(i => i.status === "goodIdea").reduce((a, b) => Number(a) + Number(b.taskAmbient), 0)) -
                                    Number(taskList.filter(i => i.status === "badIdea").reduce((a, b) => Number(a) + Number(b.taskAmbient), 0)))}
                                e={50 + 2 * (Number(taskList.filter(i => i.status === "goodIdea").reduce((a, b) => Number(a) + Number(b.taskEconomy), 0)) -
                                    Number(taskList.filter(i => i.status === "badIdea").reduce((a, b) => Number(a) + Number(b.taskEconomy), 0)))}
                                s={50 + 2 * (Number(taskList.filter(i => i.status === "goodIdea").reduce((a, b) => Number(a) + Number(b.taskSociety), 0)) -
                                    Number(taskList.filter(i => i.status === "badIdea").reduce((a, b) => Number(a) + Number(b.taskSociety), 0)))}/>

                        </div>)
                } else {
                    return (
                        <div style={{backgroundColor: "#0d0d0d", height: "100vh", textShadow: "1px 1px 2px #333333"}}>
                            <div style={{
                                backgroundColor: "#bf6211",
                                paddingLeft: '5px',
                                paddingBottom: '3px',
                                boxShadow: " 0 0 4px 4px #bf6211",
                                paddingTop: "3px"
                            }}>
                                <div style={{textAlign: "center", fontWeight: "900", fontSize: "25px"}}>Ecco il vostro
                                    risultato!
                                </div>
                                <div style={{textAlign: "center", fontWeight: "900", fontSize: "20px"}}>
                                    Avete esaurito i tentativi a vostra disposizione.
                                </div>
                            </div>
                            <Antifeedback
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
            return (<div className="AntiWinner">
                <div style={{
                    backgroundColor: "#bf6211",
                    paddingLeft: '5px',
                    paddingBottom: '3px',
                    boxShadow: " 0 0 4px 4px #bf6211",
                    paddingTop: "3px"
                }}>
                    <div style={{textAlign: "center", fontWeight: "900", fontSize: "25px"}}>
                        Complimenti! Avete sbloccato una sezione segreta!
                    </div>
                    <div style={{textAlign: "center", fontWeight: "900", fontSize: "20px"}}>
                        Inserite nella casella di testo una soluzione ai problemi di Dystopia inventata da voi.
                    </div>

                </div>
                <div><textarea className="Text" placeholder={"La vostra idea..."} value={descrizione}
                               onChange={e => setDescrizione(e.target.value)}/></div>
                <div className="flexy">
                    <div onClick={() => setPoint(false)}
                         style={{
                             textAlign: "center",
                             fontWeight: "900",
                             fontSize: "18px",
                             cursor: "pointer",
                             backgroundColor: "#f2b705",
                             borderRadius: "5px",
                             flexGrow: "1",
                             marginLeft: "20em",
                             marginRight: "10em",
                             textShadow: "1px 1px 2px #333333"
                         }}>
                        Annulla
                    </div>
                    <div style={{
                        textAlign: "center",
                        fontWeight: "900",
                        fontSize: "18px",
                        cursor: "pointer",
                        backgroundColor: "#f2b705",
                        borderRadius: "5px",
                        flexGrow: "1",
                        marginLeft: "10em",
                        marginRight: "20em",
                        textShadow: "1px 1px 2px #333333"
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
        return (<div className="AntiWinner">
            <div style={{
                backgroundColor: "#bf6211",
                paddingLeft: '5px',
                paddingBottom: '3px',
                boxShadow: " 0 0 4px 4px #bf6211",
                paddingTop: "3px"
            }}>
                <div style={{textAlign: "center", fontWeight: "900", fontSize: "25px",}}>
                    Congratulazioni!
                </div>
                <div style={{textAlign: "center", fontWeight: "900", fontSize: "20px"}}>
                    Siete ufficialmente diventati dei cittadini onorari di Dystopia.
                </div>
            </div>
            <h1 style={{
                textAlign: "center",
                color: "#f2d795",
                paddingLeft: "8em",
                paddingRight: "8em",
                paddingTop: "2em"
            }}>
                La vostra creatività non è da sottovalutare.
                Per risolvere i problemi di Dystopia ci voleva ingegno e voi ne avete messo in campo parecchio.
                Affidarvi al vostro pensiero laterale è stata la mossa vincente. Ben fatto!
            </h1>
        </div>)
    }


};
export default AntiTasks;