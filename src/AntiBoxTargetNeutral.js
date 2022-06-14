import {useDrop} from "react-dnd";
import {ItemTypes} from "./items";
import {useContext} from "react";
import {CardUnContext} from "./tasks";
import withScrolling from "react-dnd-scrolling";

const ScrollingComponent = withScrolling("div");


const AntiBoxTargetNeutral = props => {

    const {markAsUnDone} = useContext(CardUnContext);

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.CARD,
        hover: (item, monitor) => markAsUnDone(item.id),

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
            } :
            {
                height: "45em",
                width: "30em",
                backgroundColor: "rgba(13,13,13,0.7)",
                borderRadius: "5px",
                color: "#f2d795",
                boxShadow: "0 3px 3px 3px rgba(0,13,13,0.7)"
            }}>
            <h2 style={{textAlign: "center", paddingTop: "3px", textShadow: "1px 1px 2px #111111"}}>Trascina le
                idee</h2>
            <ScrollingComponent style={{overflow: "auto", height: "40em"}}>
                {props.children}
            </ScrollingComponent>
        </div>
    )
}
export default AntiBoxTargetNeutral;