import {useDrop} from "react-dnd";
import {ItemTypes} from "./items";
import {useContext} from "react";
import {CardUnContext} from "./tasks";
import withScrolling from "react-dnd-scrolling";

const ScrollingComponent = withScrolling("div");
const BoxTargetNeutral = props => {

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
            <h2 style={{textAlign: "center", paddingTop: "3px"}}>Trascina le idee</h2>
            <ScrollingComponent style={{overflow: "auto", height: "40em"}}>
                {props.children}
            </ScrollingComponent>
        </div>


    )
}
export default BoxTargetNeutral;