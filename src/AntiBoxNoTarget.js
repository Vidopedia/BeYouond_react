import {useDrop} from "react-dnd";
import {ItemTypes} from "./items";
import {useContext} from "react";
import {CardNoContext} from "./tasks";


const AntiBoxNoTarget = props => {

    const {markAsNoDone} = useContext(CardNoContext);


    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.CARD,
        hover: (item, monitor) => markAsNoDone(item.id),

        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),

    });
    return (

        <div ref={drop} style={isOver ? {
                height: "45em",
                width: "30em",
                backgroundColor: "rgba(0,0,0,0.7)",
                borderRadius: "5px",
                color: "#f2d795",
                boxShadow: "0 3px 3px 3px rgba(0,0,0,0.7)"
            }
            : {
                height: "45em",
                width: "30em",
                backgroundColor: "rgba(13,13,13,0.7)",
                borderRadius: "5px",
                color: "#f2d795",
                boxShadow: "0 3px 3px 3px rgba(13,13,13,0.7)"
            }}>
            <h2 style={{textAlign: "center", paddingTop: "3px", textShadow: "1px 1px 2px #111111"}}>Inserire qui le idee
                da scartare</h2>
            {props.children}
        </div>
    )
}
export default AntiBoxNoTarget;