import "./antifeedbackstyle.css"

function Antifeedback({a, e, s}) {
    const M = 70;
    const m = 30;
    if (a > M) {
        if (s > M) {
            if (e > M) {
                return (<div className="ga-gs-ge-d">

                        <div style={{
                            textAlign: "center",
                            fontSize: "x-large",
                            fontWeight: "bold",
                            color: "#f2d795",
                            paddingLeft: "8em",
                            paddingRight: "8em",
                            paddingTop: "8em",
                            textShadow: "1px 1px 2px #000"
                        }}>
                            Se siete arrivati qui, evidentemente siete stati più bravi persino di noi, dato che non
                            avevamo previsto esso fosse possibile.
                            Dystopia vi ha eletto cittadini onorari e ha intitolato l'ultimo parco urbano inaugurato in
                            vostro nome.
                        </div>
                    </div>
                )
            } else {
                if (e < m) {
                    return (
                        <div className="ga-gs-be-d">

                            <div style={{
                                textAlign: "center",
                                fontSize: "x-large",
                                fontWeight: "bold",
                                color: "#f2d795",
                                paddingLeft: "8em",
                                paddingRight: "8em",
                                paddingTop: "8em",
                                textShadow: "1px 1px 2px #000"
                            }}>
                                Verde come la speranza della popolazione e verde come la vegetazione di
                                Dystopia...Peccato che anche le casse cittadine siano al verde! La vostra strategia
                                sembrava buona eppure qualcosa è decisamente andato storto. Il denaro non è sempre
                                vostro nemico, pensare un po' di più agli investimenti finanziari
                                sicuramente garantirà che il benessere raggiunto non sia solo momentaneo...
                            </div>
                        </div>
                    )
                } else {
                    return (<div className="ga-gs-e-d">

                            <div style={{
                                textAlign: "center",
                                fontSize: "x-large",
                                fontWeight: "bold",
                                color: "#f2d795",
                                paddingLeft: "8em",
                                paddingRight: "8em",
                                paddingTop: "8em",
                                textShadow: "1px 1px 2px #000"
                            }}>
                                A Dystopia la vegetazione è tornata rigogliosa e ha riportato il sorriso sulle persone.
                                Le soluzioni adottate sembrano molto buone,
                                seppur rimanga l'incognita sul futuro delle finanze della città. La strada per la
                                perfezione è ancora lunga ma avete già mosso sicuramente
                                i primi passi.
                            </div>
                        </div>
                    )
                }
            }
        } else {
            if (s < m) {
                if (e > M) {
                    return (<div className="ga-bs-ge-d">

                            <div style={{
                                textAlign: "center",
                                fontSize: "x-large",
                                fontWeight: "bold",
                                color: "#f2d795",
                                paddingLeft: "8em",
                                paddingRight: "8em",
                                paddingTop: "8em",
                                textShadow: "1px 1px 2px #000"
                            }}>
                                Una città finalmente pulita e verde e un'economia in crescita...Sembra il paradiso,
                                eppure per gli abitanti di Dystopia la vita è sempre più
                                un'inferno. Se non si ascoltano i bisogni delle persone, c'è il rischio di ottenere
                                delle migliorie legate solo a degli ideali. Se riusciste a
                                sistemare il disagio sociale, Dystopia potrebbe sicuramente trasformarsi nel tanto
                                sognato paradiso.
                            </div>
                        </div>
                    )
                } else {
                    if (e < m) {
                        return (
                            <div className="ga-bs-be-d">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    color: "#f2d795",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    textShadow: "1px 1px 2px #000"
                                }}>
                                    Dystopia è diventata una bellissima riserva naturale. Peccato che un tempo fosse
                                    anche una città...Con il crollo in borsa e la popolazione lasciata allo sbaraglio
                                    è stata solo questione di tempo prima che Dystopia venisse del tutto abbandonata. Il
                                    benessere ambientale non deve per forza escludere il benessere dell'essere umano,
                                    provate a cercare un modo per conciliare entrambi...
                                </div>
                            </div>
                        )
                    } else {
                        return (<div className="ga-bs-e-d">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    color: "#f2d795",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    textShadow: "1px 1px 2px #000"
                                }}>
                                    A Dystopia per un passo in avanti compiuto c'è purtroppo anche un passo indietro.
                                    Sicuramente i vostri investimenti in campo ambientale hanno portato i loro frutti,
                                    putroppo però la popolazione è sempre più arrabbiata e infelice. Con tutte queste
                                    rivolte che stanno scoppiando presto anche l'economia potrebbe subire un tracollo.
                                    Provate ad ascoltare anche altre opinioni per sentire di cosa ha davvero bisogno la
                                    popolazione. Non è mai troppo tardi per imparare ad ascoltare.
                                </div>
                            </div>
                        )
                    }
                }
            } else {
                if (e > M) {
                    return (<div className="ga-s-ge-d">

                            <div style={{
                                textAlign: "center",
                                fontSize: "x-large",
                                fontWeight: "bold",
                                color: "#f2d795",
                                paddingLeft: "8em",
                                paddingRight: "8em",
                                paddingTop: "8em",
                                textShadow: "1px 1px 2px #000"
                            }}>
                                Finalmente a Dystopia l'aria è tornata pulita, inoltre l'economia non preoccupa più,
                                anzi. Purtroppo le gente ha ancora parechie preoccupazioni, forse
                                bisognerebbe investire di più in politiche sociali. Riuscirete a far tornare i sorrisi
                                sui volti dei dystopiani?
                            </div>
                        </div>
                    )
                } else {
                    if (e < m) {
                        return (<div className="ga-s-be-d">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    color: "#f2d795",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    textShadow: "1px 1px 2px #000"
                                }}>
                                    Grazie al vostro contributo la situazione ambientale di Dystopia è decisamente
                                    migliorata. Purtroppo la situazione economica non se la sta
                                    passando bene, evidentemente dovete ancora lavorare su questo aspetto...Forse avete
                                    l'impressione che il denaro sia per forza qualcosa di negativo...
                                    Tutto sommato la società di Dystopia non ha subito grossi mutamenti...per ora...
                                </div>
                            </div>
                        )
                    } else {
                        return (<div className="ga-s-e-d">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    color: "#f2d795",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    textShadow: "1px 1px 2px #000"
                                }}>
                                    La città di Dystopia finalmente sta tornando a respirare. Tuttavia non tutti i
                                    problemi sono stati risolti. Concentrandovi solo sull'ambiente avete
                                    trascurato gli altri aspetti. È giusto darsi delle priorità, ma è comunque
                                    necessario mantenere una visione ampia.
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
                    return (<div className="ba-gs-ge-d">

                            <div style={{
                                textAlign: "center",
                                fontSize: "x-large",
                                fontWeight: "bold",
                                color: "#f2d795",
                                paddingLeft: "8em",
                                paddingRight: "8em",
                                paddingTop: "8em",
                                textShadow: "1px 1px 2px #000"
                            }}>
                                Gli abitanti di Dystopia sembrano essere tornati felici, forse distratti dalla crescita
                                economica. Soprattutto perché vedendo quanto è danneggiato l'ambiente c'è davvero
                                poco da ridere...Se non si rimedia subito quando i cittadini si accorgeranno del
                                disastro climatico sarà troppo tardi.
                            </div>
                        </div>
                    )
                } else {
                    if (e < m) {
                        return (<div className="ba-gs-be-d">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    color: "#f2d795",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    textShadow: "1px 1px 2px #000"
                                }}>
                                    La popolazione di Dystopia è finalmente più serena, però concertarvi solo
                                    sull'aspetto sociale ha fatto deragliare l'economia e l'ambiente della città.
                                    Bisogna
                                    assolutamente aiutare l'ambiente e riprendere il controllo delle finanze il prima
                                    possibile, altrimenti la felicità dei cittadini sarà soltanto illusoria...
                                </div>
                            </div>
                        )
                    } else {
                        return (<div className="ba-gs-e-d">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    color: "#f2d795",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    textShadow: "1px 1px 2px #000"
                                }}>
                                    Se l'umore della popolazione di Dystopia sta guarendo, in compenso la salute
                                    ambientale è decisamente peggiorata. La crisi ambientale rischia inoltre
                                    di far crollare le finanze. Cambiare approccio potrebbe essere l'ultima speranza di
                                    Dystopia...
                                </div>
                            </div>
                        )
                    }
                }
            } else {
                if (s < m) {
                    if (e > M) {
                        return (<div className="ba-bs-ge-d">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    color: "#f2d795",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    textShadow: "1px 1px 2px #000"
                                }}>
                                    Probabilmente vi siete concentrati solo sul'aspetto economico senza tenere in conto
                                    della situazione di partenza di Dystopia. Il denaro infatti
                                    viene speso dai cittadini per acquistare maschere antigas e antidepressivi. Se non
                                    si rimedia subito al problema presto la città cadrà nel caos...
                                    Forse bisognerebbe ridistribuire le ricchezze per offrire un aiuto più concreto...
                                </div>
                            </div>
                        )
                    } else {
                        if (e < -4) {
                            return (<div className="ba-bs-be-d">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        color: "#f2d795",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        textShadow: "1px 1px 2px #000"
                                    }}>
                                        Dystopia è sprofondata nel baratro in cui nessuna città vorrebbe cadere. Nessuno
                                        è felice, nessuna pianta cresce e ogni investimento va in rosso...
                                        Attualmete avete decisamente fallito nel vostro obiettivo.
                                    </div>
                                </div>
                            )
                        } else {
                            return (<div className="ba-bs-e-d">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        color: "#f2d795",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        textShadow: "1px 1px 2px #000"
                                    }}>
                                        Dystpia ha le ore contate...Un tentativo fallito di migliorare l'economia ha
                                        definitivamente affossato le speranze di una città migliore.
                                        L'ambiente è distrutto e la popolazione più frustrata che mai. Un vostro cambio
                                        di approccio potrebbe rivelarsi decisivo per il futuro della città.
                                    </div>
                                </div>
                            )
                        }
                    }
                } else {
                    if (e > M) {
                        return (<div className="ba-s-ge-d">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    color: "#f2d795",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    textShadow: "1px 1px 2px #000"
                                }}>
                                    Sicuramente avere una buona situazione economica può aiutare gli abitanti di
                                    Dystopia, però se il prezzo da pagare è vedere la città
                                    ancora più inquinata evidentemente c'è qualcosa da correggere nella strategia.
                                    Chiedere consiglio sicuramente potrà aiutarvi ad avere
                                    un approccio migliore la prossima volta.
                                </div>
                            </div>
                        )
                    } else {
                        if (e < m) {
                            return (<div className="ba-s-be-d">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        color: "#f2d795",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        textShadow: "1px 1px 2px #000"
                                    }}>
                                        Come la già infelice società di Dystopia non sia crollata nel caos è un mistero.
                                        Soprattutto in seguito all'ultima crisi economica che ha prosciugato i fondi
                                        e con l'aria sempre più sporca e irrespirabile. Bisogna intervenire
                                        immediatamente e cambiare subito la rotta prima che per Dystopia sia troppo
                                        tardi.
                                    </div>
                                </div>
                            )
                        } else {
                            return (<div className="ba-s-e-d">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        color: "#f2d795",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        textShadow: "1px 1px 2px #000"
                                    }}>
                                        Oramai l'aria di Dystopia è talmente tanto inquinata da rappresentare un serio
                                        pericolo per la salute dei cittadini e per l'intero ecosistema circostante.
                                        Bisogna sempre ricordare che se la natura soffre, la popolazione sicuramente non
                                        potrà stare meglio...
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
                    return (<div className="a-gs-ge-d">

                            <div style={{
                                textAlign: "center",
                                fontSize: "x-large",
                                fontWeight: "bold",
                                color: "#f2d795",
                                paddingLeft: "8em",
                                paddingRight: "8em",
                                paddingTop: "8em",
                                textShadow: "1px 1px 2px #000"
                            }}>
                                Il migioramento della situazione economica è andato di pari passo col miglioramento
                                dell'umore cittadino, e questa è un'ottima cosa. Se solo anche
                                l'ambiente avesse potuto giovare di questi benefici, Dystopia avrebbe sicuramente visto
                                la luce in fondo al tunnel...Se lavoraste di più anche sull'aspetto
                                ecologico Dystopia potrebbe finalmente dire addio al suo periodo più buio...
                            </div>
                        </div>
                    )
                } else {
                    if (e < m) {
                        return (<div className="a-gs-be-d">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    color: "#f2d795",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    textShadow: "1px 1px 2px #000"
                                }}>
                                    Finalmente a Dystopia la gente sta tornando a sorridere. Stessa cosa non può essere
                                    assolutamente detta per le casse cittadine. Investimenti errati hanno
                                    portato a una brutta crisi economica, e l'ambiente putroppo non è ancora stato
                                    rinsavito...Un primo passo è stato fatto, ma la strada da percorrere
                                    è ancora lunga...
                                </div>
                            </div>
                        )
                    } else {
                        return (<div className="a-gs-e-d">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    color: "#f2d795",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    textShadow: "1px 1px 2px #000"
                                }}>
                                    L'umore generale della popolazione sta migliorando grazie al vostro intervento. I
                                    cittadini vi ringraziano, ma purtroppo c'è ancora da lavorare sull'ambiente
                                    e sulle finanze. Se non ci si occupa di questi aspetti l'umore non rimarrà sereno a
                                    lungo.
                                </div>
                            </div>
                        )
                    }
                }
            } else {
                if (s < m) {
                    if (e > M) {
                        return (<div className="a-bs-ge-d">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    color: "#f2d795",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    textShadow: "1px 1px 2px #000"
                                }}>
                                    I soldi non fanno la felicità, e purtroppo a Dystopia questo proverbio è diventato
                                    realtà. La quantità di denaro presente nelle casse della
                                    città è inversamente proporzionale ai sorrisi sui volti delle persone...Concentrarsi
                                    solo sull'aspetto economico senza pensare al benessere delle
                                    persone a lungo termine non è la strategia vincente. Perlomeno c'è ancora un po' di
                                    verde a rendere la città meno deprimente.
                                </div>
                            </div>
                        )
                    } else {
                        if (e < m) {
                            return (<div className="a-bs-be-d">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        color: "#f2d795",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        textShadow: "1px 1px 2px #000"
                                    }}>
                                        Con il crollo economico anche l'umore della popolazione è crollato a picco. Se
                                        perlomeno ci fosse stato qualche miglioramento sul fronte ambientale
                                        la popolazione non sarebbe così tanto arrabbiata. Se non si cambia strada il
                                        prima possibile, Dystopia potrebbe precipitare in un oscuro baratro...
                                    </div>
                                </div>
                            )
                        } else {
                            return (<div className="a-bs-e-d">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        color: "#f2d795",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        textShadow: "1px 1px 2px #000"
                                    }}>
                                        La mancanza di cambiamenti significativi in ambito economico e ambientale ha
                                        esasperato gli animi dei cittadini, che sono sempre più frustrati e depressi.
                                        Mostrare loro la volontà di ascoltarli potrebbe risollevare la
                                        situazione...magari hanno delle buone idee anche per migliorare l'ambiente e
                                        l'economia...
                                    </div>
                                </div>
                            )
                        }
                    }
                } else {
                    if (e > M) {
                        return (<div className="a-s-ge-d">

                                <div style={{
                                    textAlign: "center",
                                    fontSize: "x-large",
                                    fontWeight: "bold",
                                    color: "#f2d795",
                                    paddingLeft: "8em",
                                    paddingRight: "8em",
                                    paddingTop: "8em",
                                    textShadow: "1px 1px 2px #000"
                                }}>
                                    La vostra mente imprenditoriale vi ha guidato e ora le casseforti della città sono
                                    decisamente più piene. Ambiente e società, però, sono ancora in crisi.
                                    Una buona somma di denaro può essere un punto di partenza, ma ricordatevi che non è
                                    l'unica cosa che conta.
                                </div>
                            </div>
                        )
                    } else {
                        if (e < m) {
                            return (<div className="a-s-be-d">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        color: "#f2d795",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        textShadow: "1px 1px 2px #000"
                                    }}>
                                        Alla lunga lista di problemi che affliggono la città si è aggiunta una brutta
                                        crisi economica. A volte le scelte più caute non sono per forza le meno
                                        dispendiose...Se verranno fatti altri investimenti errati Dystopia si troverà
                                        davvero nei guai.
                                    </div>
                                </div>
                            )
                        } else {
                            return (<div className="a-s-e-d">

                                    <div style={{
                                        textAlign: "center",
                                        fontSize: "x-large",
                                        fontWeight: "bold",
                                        color: "#f2d795",
                                        paddingLeft: "8em",
                                        paddingRight: "8em",
                                        paddingTop: "8em",
                                        textShadow: "1px 1px 2px #000"
                                    }}>
                                        La situazione di Dystopia non è cambiata di molto...Avete intelligentemente
                                        cercato di tenere sotto controllo i vari
                                        aspetti della città ma le scelte che avete fatto sembrano non aver portato un
                                        vero miglioramento.
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

export default Antifeedback;