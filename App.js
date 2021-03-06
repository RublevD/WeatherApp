import React from 'react';
import './App.css';

const PLACES = [
  { name: "Palo Alto", zip: "94303"},
  { name: "San Jose", zip: "94088"},
  { name: "Santa Cruz", zip: "95062"},
  { name: "Honolulu", zip: "96803"}
];

class WeatherDisplay extends React.Component {
  constructor() {
      super();
      this.state = {
        weatherData: null
      };
  }

  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" + 
    zip +
    "&appid=1ce8ad64298823fad398d6e779e270c0&units=imperial";
    fetch(URL).then(res => res.json()).then (json => {
      this.setState({weatherData: json});
    });
  }
  render() {
    const weather = weatherData.weather;
    if (!weatherData) return <div>Loading</div>;
    const iconUrl = "https://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <h1>Посмотрим на погоду for в городе {this.props.zip}</h1>
    );
    }
}

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render () {
    const activePlace = this.state.activePlace;
   return (
    <div className="App">
      {PLACES.map((place, index) => (
        <button
        key = {index}
        onClick = {() => {
         this.setState({ activePlace: index});
        }}
      >
        {place.name}
      </button>
    ))}
     <WeatherDisplay 
      key = {activePlace}
      zip = {PLACES[activePlace].zip}
      />
    </div>
  );
 }
}

export default App;
