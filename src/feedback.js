import "./stylebackground.css"
import "./feedbackstyle.css"

function Feedback({a, e, s}) {
    const M = 70;
    const m = 30;
    if (a > M) {
        if (s > M) {
            if (e > M) {
                return (<div className="ga-gs-ge-u">

                        <div style={{
                            textAlign: "center",
                            fontSize: "x-large",
                            fontWeight: "bold",
                            paddingLeft: "8em",
                            paddingRight: "8em",
                            paddingTop: "8em",
                            color: "#eee",
                            textShadow: "1px 1px 2px #111111"
                        }}>
                            Se avete raggiunto questo risultato evidentemente siete stati più bravi di noi, dato che non
                            avevamo previsto esso fosse possibile.
                            La città di Utopia vi ha dedicato una sequoia gigante in segno di enorme riconoscenza.
                        </div>
                    </div>
                )
            } else {
                if (e < m) {
                    return (
                        <div className="ga-gs-be-u">

                            <div style={{
                                textAlign: "center",
                                fontSize: "x-large",
                                fontWeight: "bold",
                                paddingLeft: "8em",
                                paddingRight: "8em",
                                paddingTop: "8em",
                                color: "#eee",
                                textShadow: "1px 1px 2px #111111"
                            }}>
                                Ambiente felice, società felice. Evidentemente ritenete importante il rapporto
                                simbiotico uomo-natura. Anche Utopia crede in questi valori
                                ed è felice di aver collaborato con voi. Peccato però per l'enorme crollo in
                                borsa...forse preferite quegli immaginari in cui l'uomo
                                torna alla sua dimensione primordiale...peccato che i cittadini di Utopia siano troppo
                                poveri per darvi ragione...
                            </div>
                        </div>
                    )
                } else {
                    return (<div className="ga-gs-e-u">

                            <div style={{
                                textAlign: "center",
                                fontSize: "x-large",
                                fontWeight: "bold",
                                paddingLeft: "8em",
                                paddingRight: "8em",
                                paddingTop: "8em",
                                color: "#eee",
                                textShadow: "1px 1px 2px #111111"
                            }}>
                                La simbiosi uomo natura è sempre una carta vincente, a Utopia lo sanno bene e sono
                                contetnti di avere avuto a che fare con qualcuno come voi.
                                E finché l'economia regge, va tutto bene...anche se considerato la situazione di
                                partenza non sappiamo ancora per quanto sarà così. Tuttavia
                                non abbattetevi, siete comunque sulla giusta strada!
                            </div>
                        </div>
                    )
                }
            }
        } else {
            if (s < m) {
                if (e > M) {
                    return (<div className="ga-bs-ge-u">

                            <div style={{
                                textAlign: "center",
                                fontSize: "x-large",
                                fontWeight: "bold",
                                paddingLeft: "8em",
                                paddingRight: "8em",
                                paddingTop: "8em",
                                color: "#eee",
                                textShadow: "1px 1px 2px #111111"
                            }}>
                                Chi lo dice che ambiente e denaro non possano collaborare? Ora che l'economia si è
                                rafforzata la ricerca per aiutare l'ambiente procede a gonfie vele.
                                Peccato che vi siate completamente dimenticati dell'aspetto sociale. A cosa servono
                                un'economia fiorente e una natura rigogliosa se gli abitanti di Utopia
                                non possono minimamente godersele? O forse la nostra visione è troppo utilitaristica?
                            </div>
                        </div>
                    )
                } else {
                    if (e < m) {
                        return (
                            <div className="ga-bs-be-u">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    color: "#eee",
                                    textShadow: "1px 1px 2px #111111"
                                }}>
                                    Spesso si ha l'impressione che l'uomo per l'ambiente sia un problema a prescindere.
                                    Probabilmente anche voi fate parte di questa scuola di pensiero.
                                    Utopia è una giungla verde ma sempre più spopolata e vecchia.
                                    D'altronde con un'economia distrutta e nessun investimento sociale, gli abitanti
                                    hanno iniziato ad andarsene,
                                    soprattutto i più giovani che non vedono alcuna prospettiva nel restare in città...
                                </div>
                            </div>
                        )
                    } else {
                        return (<div className="ga-bs-e-u">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    color: "#eee",
                                    textShadow: "1px 1px 2px #111111"
                                }}>
                                    Utopia è diventata una città estremamente ecosostenibile ma triste...fortunatamente
                                    gli abitanti non stanno morendo di fame
                                    e l'economia non ha ancora avuto il tanto temuto tracollo...
                                    Eppure molti Utopiani sentono un vuoto dentro, e stanno diventando sempre più
                                    pessimisti...
                                </div>
                            </div>
                        )
                    }
                }
            } else {
                if (e > M) {
                    return (<div className="ga-s-ge-u">

                            <div style={{
                                textAlign: "center",
                                fontSize: "x-large",
                                fontWeight: "bold",
                                paddingLeft: "8em",
                                paddingRight: "8em",
                                paddingTop: "8em",
                                color: "#eee",
                                textShadow: "1px 1px 2px #111111"
                            }}>
                                Gli abitanti di Utopia sembrano, almeno per il momento, abbastanza tranquilli,
                                soprattutto grazie alle migliorie apportate
                                in campo economico che hanno contribuito a rendere ancora più sostenibile la città.
                                Tuttavia temiamo che la popolazione non sarà in grado
                                di mantenere sul lungo termine questi risultati...
                            </div>
                        </div>
                    )
                } else {
                    if (e < m) {
                        return (<div className="ga-s-be-u">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    color: "#eee",
                                    textShadow: "1px 1px 2px #111111"
                                }}>
                                    La situazione ambientale di Utopia andava già bene, eppure voi siete riusciti a fare
                                    il miracolo, complimenti!
                                    Purtroppo però avete decisamente affossato la già fragile economia, e se è vero che
                                    la popolazione se la cava,
                                    con un'economia così fragile non sappiamo quantò resisterà...forse avete una visione
                                    troppo negativa del denaro...
                                </div>
                            </div>
                        )
                    } else {
                        return (<div className="ga-s-e-u">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    color: "#eee",
                                    textShadow: "1px 1px 2px #111111"
                                }}>
                                    Gli abitanti di Utopia speravano di vedere migliorare l'economia, però così non è
                                    stato...quantomeno non è nemmeno peggiorata.
                                    In compenso possono godersi lo status di "Città verde dell'anno"...Riusciranno a
                                    mantenere queste eccellenti politiche ambientali
                                    o prima o poi i fondi e l'entusiasmo inizieranno a scarseggiare?
                                </div>
                            </div>
                        )
                    }
                }
            }
        }

    } else {
        if (a < m) {
            if (s > M) {
                if (e > M) {
                    return (<div className="ba-gs-ge-u">

                            <div style={{
                                textAlign: "center",
                                fontSize: "x-large",
                                fontWeight: "bold",
                                paddingLeft: "8em",
                                paddingRight: "8em",
                                paddingTop: "8em",
                                color: "#eee",
                                textShadow: "1px 1px 2px #111111"
                            }}>
                                L'uomo è il padrone del mondo per voi. D'altronde economia felice, società
                                felice...Peccato che la situazione ambientale sia decisamente peggiorata...
                                Forse è vero che l'unica cosa che sappiamo fare è inquinare, oppure esite effettivmente
                                un'alternativa?
                            </div>
                        </div>
                    )
                } else {
                    if (e < m) {
                        return (<div className="ba-gs-be-u">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    color: "#eee",
                                    textShadow: "1px 1px 2px #111111"
                                }}>
                                    Come facciano gli abitanti di Utopia ad essere felici è un mistero...Senza un
                                    centesimo in banca e con decisamente troppi
                                    passi indietro nell'ambito ambientale, forse i cittadini sono troppo viziati da
                                    welfare sociali per rendersi conto di stare su una nave che affonda.
                                    Puntare solo sulla felicità delle persone senza prendere in considerazione le altre
                                    conseguenze spesso si rileva una mossa errata...
                                </div>
                            </div>
                        )
                    } else {
                        return (<div className="ba-gs-e-u">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    color: "#eee",
                                    textShadow: "1px 1px 2px #111111"
                                }}>
                                    Gli abitanti di Utopia hanno sempre avuto speranza nel futuro...anche se è evidente
                                    che sta volta stiano sognando un po'troppo.
                                    Se è vero che l'economia sta reggendo, stessa cosa non si può dire per l'ambiente,
                                    che invece sembra essere tornato
                                    ai problemi di un tempo...Davvero un peccato!
                                </div>
                            </div>
                        )
                    }
                }
            } else {
                if (s < m) {
                    if (e > M) {
                        return (<div className="ba-bs-ge-u">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    color: "#eee",
                                    textShadow: "1px 1px 2px #111111"
                                }}>
                                    Spiacenti, ma gli abitanti di Utopia non venerano il denaro come divinità personale.
                                    Riconosciamo il miglioramento
                                    che avete apportato all'economia...ma a che prezzo.
                                    La gente è infelice, la natura è danneggiata...forse avete una visione
                                    eccessivamente capitalista...
                                </div>
                            </div>
                        )
                    } else {
                        if (e < -4) {
                            return (<div className="ba-bs-be-u">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        color: "#eee",
                                        textShadow: "1px 1px 2px #111111"
                                    }}>
                                        Di Utopia oramai è rimasto solo il nome...Come voi abbiate fatto a fallire così
                                        miseramente nel vostro obiettivo è un mistero.
                                        Per gli abitanti di Utopia siete l'Apocalisse, perché li avete gettati in un
                                        baratro di oscurità dal quale difficilmente ne usciranno fuori...
                                    </div>
                                </div>
                            )
                        } else {
                            return (<div className="ba-bs-e-u">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        color: "#eee",
                                        textShadow: "1px 1px 2px #111111"
                                    }}>
                                        La città di Utopia è a un passo dal tracollo. Tra crisi ambientale e sociale,
                                        l'unica cosa che sembra reggere al momento è l'economia...
                                        la prossima volta cercate di investire i fondi che avete in qualcosa di più
                                        costruttivo...
                                    </div>
                                </div>
                            )
                        }
                    }
                } else {
                    if (e > M) {
                        return (<div className="ba-s-ge-u">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    color: "#eee",
                                    textShadow: "1px 1px 2px #111111"
                                }}>
                                    Partiamo con la buona notizia: ora finalmente l'economia di Utopia è tornata alla
                                    prosperità e la popolazione tutto sommato se la cava...
                                    Peccato per il danno ambientale causato! Come mai avete completamente trascurato
                                    questo aspetto?
                                </div>
                            </div>
                        )
                    } else {
                        if (e < m) {
                            return (<div className="ba-s-be-u">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        color: "#eee",
                                        textShadow: "1px 1px 2px #111111"
                                    }}>
                                        Per quanto tempo la società di Utopia resterà stabile ora che l'economia è stata
                                        distrutta e la situaione ambientale peggiorata?
                                        Dovreste decisamente rivedere la vostra visione a lungo termine...
                                    </div>
                                </div>
                            )
                        } else {
                            return (<div className="ba-s-e-u">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        color: "#eee",
                                        textShadow: "1px 1px 2px #111111"
                                    }}>
                                        Vi è stato chiesto di migliorare Utopia, non di renderla una copia esatta della
                                        Terra! Fortunatamente la società regge e l'economia non ha ancora subito il
                                        tanto temuto tracollo, quindi il vostro lavoro non è tutto da buttare. Però
                                        rovinare il punto forte di Utopia,
                                        ovvero la sua forte politica ambientale, ci sembra davvero di cattivo gusto...
                                    </div>
                                </div>
                            )
                        }
                    }
                }
            }
        } else {
            if (s > M) {
                if (e > M) {
                    return (<div className="a-gs-ge-u">

                            <div style={{
                                textAlign: "center",
                                fontSize: "x-large",
                                fontWeight: "bold",
                                paddingLeft: "8em",
                                paddingRight: "8em",
                                paddingTop: "8em",
                                color: "#eee",
                                textShadow: "1px 1px 2px #111111"
                            }}>
                                Nessuno è perfetto, nemmeno le vostre scelte. Che però ci vanno molto vicino...La
                                situazione ambientale non è cambiata di molto, anche se c'è da dire che
                                comunque non è messa affato male. Tuttavia le migliorie che avete apportato in ambito
                                sociale ed economico a
                                Utopia verranno ricordate a lungo...Sembrate sulla strada giusta...anche se dovreste
                                rivedere le vostre politiche ambientali...
                            </div>
                        </div>
                    )
                } else {
                    if (e < m) {
                        return (<div className="a-gs-be-u">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    color: "#eee",
                                    textShadow: "1px 1px 2px #111111"
                                }}>
                                    Di per sé le vostre scelte non sono sbagliate. Comunque la società è stata
                                    migliorata e l'ambiente se la cava.
                                    Però sembra che voi non abbiate analizzato bene il problema di Utopia, soprattutto
                                    in ambito economico...
                                </div>
                            </div>
                        )
                    } else {
                        return (<div className="a-gs-e-u">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    color: "#eee",
                                    textShadow: "1px 1px 2px #111111"
                                }}>
                                    Se l'entusiasmo del popolo è alto, il resto può migliorare di conseguenza? Da quel
                                    che ci risulta per voi è così,
                                    visto che la vostra attenzione si è focalizzata soprattutto sul benessere degli
                                    abitanti di Utopia. Se solo anche l'economia e
                                    l'ambiente avessero avuto le stesse attenzioni chissà quanto migliore sarebbe la
                                    città...
                                </div>
                            </div>
                        )
                    }
                }
            } else {
                if (s < m) {
                    if (e > M) {
                        return (<div className="a-bs-ge-u">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    color: "#eee",
                                    textShadow: "1px 1px 2px #111111"
                                }}>
                                    Riconosciamo che voi abbiate compreso il problema economico di Utopia e l'abbiate
                                    saputo affrontare egregiamente...
                                    Peccato che trascurare completamente il benessere delle perone non sia una visione
                                    proprio umana...Forse dovreste imparare ad
                                    ascoltare di più le opinioni altrui...
                                </div>
                            </div>
                        )
                    } else {
                        if (e < m) {
                            return (<div className="a-bs-be-u">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        color: "#eee",
                                        textShadow: "1px 1px 2px #111111"
                                    }}>
                                        Utopia sta tragicamente tramontando verso un oscuro destino.
                                        Riteniamo che voi dobbiate mettere seriamente in discussione le vostre
                                        strategie, anche perché comunque in ambito ambientale non siete andati male.
                                        Però sul resto sarebbe buona cosa cambiare approccio...
                                    </div>
                                </div>
                            )
                        } else {
                            return (<div className="a-bs-e-u">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        color: "#eee",
                                        textShadow: "1px 1px 2px #111111"
                                    }}>
                                        Gli abitanti di Utopia si sentono decisamente troppo trascurati e stanno
                                        iniziando a insorgere con delle rivolte.
                                        Ambiente ed economia non hanno subito mutamenti significativi, tuttavia ora che
                                        la società è nel caos è solo questione di tempo prima che anche
                                        qualcos'altro vada storto...Provate a essere un po' più empatici con i bisogni
                                        della popolazione la prossima volta.
                                    </div>
                                </div>
                            )
                        }
                    }
                } else {
                    if (e > M) {
                        return (<div className="a-s-ge-u">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    color: "#eee",
                                    textShadow: "1px 1px 2px #111111"
                                }}>
                                    Il problema principale di Utopia, quell'economia tanto fragile che destava
                                    preoccupazioni, fortunatamente si è risolto, e gli abitanti sono rassenerati.
                                    Osservare anche gli altri aspetti non sarebbe stato male, anzi, tuttavia siete
                                    partiti col piede giusto, ora tocca a voi proseguire.
                                </div>
                            </div>
                        )
                    } else {
                        if (e < m) {
                            return (<div className="a-s-be-u">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        color: "#eee",
                                        textShadow: "1px 1px 2px #111111"
                                    }}>
                                        Probabilmente non avete analizzato molto bene la situazione di Utopia, dato che
                                        ora l'economia è messa ancor peggio di prima.
                                        Almeno il resto non ha grossi problemi,
                                        ma ricordate che, come in un cesto di frutta basta una mela marcia per rovinare
                                        tutto il raccolto,
                                        anche in una città basta un solo grosso problema per portare danni maggiori a
                                        lungo termine.
                                    </div>
                                </div>
                            )
                        } else {
                            return (<div className="a-s-e-u">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        color: "#eee",
                                        textShadow: "1px 1px 2px #111111"
                                    }}>
                                        Nella vita a volte bisogna rischiare. Le vostre decisioni sono state talmente
                                        tanto caute che a Utopia non si sono
                                        minimamente accorti che sia cambiato qualcosa...
                                        Provate a vedere meglio come mettere in gioco le carte che avete a disposizione.
                                    </div>
                                </div>
                            )
                        }
                    }
                }
            }
        }
    }

}

export default Feedback;