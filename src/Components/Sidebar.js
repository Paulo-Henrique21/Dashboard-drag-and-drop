import React from 'react'
import ApexCard from '../Cards/ApexCard'

import BarCard from '../Cards/BarCard'
import LineCard from '../Cards/LineCard'
import PieCard from '../Cards/PieCard'
//import CandleTest from '../Charts/Apex'


const Sidebar=(props)=>{
    const list=[
        {name:"Line",id:1},
        {name:"Bar",id:2},
        {name:"Pie",id:3},
        {name:"Apex",id:4}
    ]
    return(
    <div style={{backgroundColor:"#EBEBEB",width:300,display:"flex",flexDirection:"column",alignItems:"center"}}>
        <br></br>
        <h3 style={{color:"black",margin:10}}>Widgets</h3>
        {list.map((ele,index)=>{
            if(ele.name==="Line"){
                return(<LineCard key={index} name={ele.name} _id={ele.id}></LineCard>)
            }
            if(ele.name==="Bar"){
                return(<BarCard key={index} name={ele.name} _id={ele.id}></BarCard>)
            }
            if(ele.name==="Pie"){
                return(<PieCard key={index} name={ele.name} _id={ele.id}></PieCard>)
            }
            if(ele.name==="Apex"){
                return(<ApexCard key={index} name={ele.name} _id={ele.id}></ApexCard>)
            }
           
        })}

    </div>)
}

export default Sidebar