import React from "react"
import location from './location.png'


export default function Card (props){
    return(
        <>
            <div className="card">
                <img src={props.item.imageUrl} alt="location image" className="card--image"/>
                <div>
                    <img src={location} className="card--icon"/>
                    <span>{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} className="card--link"> View on Google Maps</a>
                    <h1>{props.item.title}</h1>
                    <span> {props.item.startDate} - {props.item.endDate}</span>
                    <p className="card--description">{props.item.description}</p>
                </div>

            </div>
            <hr/>
        </>
    )
}