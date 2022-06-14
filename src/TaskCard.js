import "./stylebackground.css"
import {useDrag} from "react-dnd";
import {ItemTypes} from "./items";

const TaskCard = props => {

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
        /*<Box /ref={drag} my='4' p={3} bg='gray.500'
             opacity={isDragging?'0.5':'1'} boxShadow='5em' w='100%' rounded='md' color='white'>
            <Flex justify='space-between' my='2'>
                <Text>{props.text}</Text>
            </Flex>
        </Box>*/
        <div ref={drag} className={isDragging ? 'moving' : 'stopping'}>{props.text}</div>
    )
}
export default TaskCard;