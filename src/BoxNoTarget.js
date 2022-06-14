import {useDrop} from "react-dnd";
import {ItemTypes} from "./items";
import {useContext} from "react";
import {CardNoContext} from "./tasks";


const BoxNoTarget = props => {

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
                backgroundColor: "rgba(204,204,204,0.7)",
                borderRadius: "5px",
                boxShadow: "0 3px 3px 3px rgba(204,204,204,0.7)"
            } :
            {
                height: "45em",
                width: "30em",
                backgroundColor: "rgba(245,245,245,0.7)",
                borderRadius: "5px",
                boxShadow: "0 3px 3px 3px rgba(245,245,245,0.7)"
            }}>
            <h2 style={{textAlign: "center", paddingTop: "3px"}}>Inserire qui le idee da scartare</h2>
            {props.children}
        </div>
    )
}
export default BoxNoTarget;