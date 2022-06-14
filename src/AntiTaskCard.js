import "./stylebackground.css"
import {useDrag} from "react-dnd";
import {ItemTypes} from "./items";

const AntiTaskCard = props => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.CARD,
        item: {

            id: props.id,
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        }),
    }))


    return (

        <div ref={drag} className={isDragging ? 'antimoving' : 'antistopping'}>{props.text}</div>
    )
}
export default AntiTaskCard;