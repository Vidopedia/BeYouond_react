import {useDrop} from "react-dnd";
import {ItemTypes} from "./items";
import {useContext} from "react";
import {CardContext} from "./tasks";


const BoxTarget = props => {

    const {markAsDone} = useContext(CardContext);

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.CARD,
        hover: (item, monitor) => markAsDone(item.id),

        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),

    });
    return (

        <div ref={drop} style={isOver ? {
                height: "45em",
                width: "30em",
                backgroundColor: "rgba(204,204,204,0.7)",
                marginBottom: "10px",
                borderRadius: "5px",
                boxShadow: "0 3px 3px 3px rgba(204,204,204,0.7)"
            } :
            {
                height: "45em",
                width: "30em",
                backgroundColor: "rgba(245,245,245,0.7)",
                marginBottom: "10px",
                borderRadius: "5px",
                boxShadow: "0 3px 3px 3px rgba(245,245,245,0.7)"
            }}>
            <h2 style={{textAlign: "center", paddingTop: "3px"}}>Inserire qui idee da approvare</h2>
            {props.children}
        </div>
    )
}
export default BoxTarget;