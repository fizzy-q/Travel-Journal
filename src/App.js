import React from "react"
import Card from "./card"
import data from "./data"
import NavBar from "./navbar"
import "./index.css"


export default function App (){
    console.log(data)
    const dataItems = data.map((item)=>{
        return <Card
            key={item.title}
            item={item}
        />
        }
    )
    return(
        <div>
            <NavBar/>
            <section className="cards-list">
            {/* <img src={icon} width={30} className="navbar" />
            <h1 className="navbar"> &nbsp; my travel journal</h1> */}
                {dataItems}
            </section>

        </div>
    )
}