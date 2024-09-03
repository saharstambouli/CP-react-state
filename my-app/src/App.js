import React, { Component } from 'react';
import PersonProfile from './PersonProfile';
import './App.css';
import Counter from './Counter'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Leonardo DiCaprio",
        bio: "Leonardo DiCaprio, Actor: Inception. Few actors in the world have had a career quite as diverse as Leonardo DiCaprio's. DiCaprio has gone from relatively humble beginnings, as a supporting cast member of the sitcom Growing Pains (1985) and low budget horror movies, such as Critters 3 (1991), to a major teenage heartthrob in the 1990s, as the hunky lead actor in movies such as Romeo + Juliet (1996) and Titanic (1997)",
        imgSrc: "https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg",
        profession: "Actor",
      },
      shows: false,
    };
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <PersonProfile person={person} />
            <Counter /> 
          </div>
        )}
         
      </div>
    );
  }
}

export default App;
