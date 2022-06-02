import React from "react"
import pin_icon from "../images/pin_icon.png"

export default function Card(props) {

  return (
    <div className="card--container">
      <img src={props.image} alt="card image" className="card--image" />
      <div>
        <section className="card--section-location">
          <img src={pin_icon} className="card--icon-pin"/>
          <h5 className="card--location">{props.location}</h5>
          <a href={props.mapUrl} className="card--location-link">View on Google Maps</a>
        </section>
        <h1 className="card--title">{props.title}</h1>
        <h5 className="card--period">{props.start} - {props.end}</h5>
        <p className="card--description">{props.blurb}</p>
      </div>
    </div>
  )
}