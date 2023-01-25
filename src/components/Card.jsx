import React from "react"
import pin_icon from "../images/pin_icon.png"

export default function Card({travelElements}) {

  const elements = travelElements
  
  return (
    <>
      {elements.map(element => {
        return (
          <div className="card--container">
            <img src={element.imageUrl} alt="place travelled" className="card--image" />
            <div>
              <section className="card--section-location">
                <img src={pin_icon} className="card--icon-pin"/>
                <h5 className="card--location">{element.location}</h5>
                <a href={element.googleMapsUrl}>
                  <span className="card--location-link">
                  View on Google Maps
                  </span>
                </a>
              </section>
              <h1 className="card--title">{element.title}</h1>
              <h5 className="card--period">{element.startDate} - {element.endDate}</h5>
              <p className="card--description">{element.description}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}