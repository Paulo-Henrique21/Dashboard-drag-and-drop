import React from 'react'
import { useDrag } from 'react-dnd';
import {ItemTypes} from '../Components/ItemTypes'
import Bar from '../Images/Candlestick.png'
const ApexCard=(props)=>{
    const [{ isDragging }, drag] = useDrag({
		item: {
			type: ItemTypes.CARD,
            id: props._id,
            name:props.name
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	});
    return(
        <div  style={{color:"white",margin:10}}>
        <img ref={drag} width={230} height={180} src={Bar}></img>
    </div>
    )
}

export default ApexCard