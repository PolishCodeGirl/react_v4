import React, { Component } from "react";
import pf from "petfinder-client";

import Pet from "./Pet";

// const petfinder = pf({
//   key: process.env.API_KEY,
//   secret: process.env.API_SECRET
// });

const petfinder = pf({
  key: "a3e3b37c113ea2379625de2d0c72de67",
  secret: "6ab4de9d8d2b3c6fab8d6f1fa7b91dab"
});

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(response => {
        let pets;
        // This is so nested because of petfinder API
        if (response.petfinder.pets && response.petfinder.pets.pet) {
          if (Array.isArray(response.petfinder.pets.pet)) {
            pets = response.petfinder.pets.pet;
          } else {
            pets = [response.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({ pets });
      });
  }
  render() {
    return (
      <div className="search">
        {this.state.pets.map(pet => {
          let breed;
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }

          return (
            <Pet
              key={pet.id}
              name={pet.name}
              animal={pet.animal}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Results
