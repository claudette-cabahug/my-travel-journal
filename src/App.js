import './App.css';
import Header from './components/Header';
import Card from './components/Card'
import data from "./data"

function App() {

  const travelElements = data.map(element => {
    return <Card 
    image={element.imageUrl}
    location={element.location}
    mapUrl={element.googleMapsUrl}
    start={element.startDate}
    end={element.endDate}
    title={element.title}
    blurb={element.description}
    />
  })

  return (
    <div className="App">
      <Header />
      {travelElements}
    </div>
  );
}

export default App;
