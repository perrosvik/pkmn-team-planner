import React, { Component } from "react";
import Select from "react-select";
import "../index.scss";

class CardDisplayPKMN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      //isLoaded: false,
      pkmnData: null,
      pkmnNames: this.props.pkmnList,
      selectedOption: null
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    const url =
      "https://pokeapi.co/api/v2/pokemon/" + selectedOption.value + "/";

    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            pkmnData: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  render() {
    const {error, pkmnNames, pkmnData, selectedOption } = this.state;
    return (
      <div className="card">
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={pkmnNames}
        />
        <p>{error ? error : ''}</p>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <figure className="image is-128x128">
                <img
                  className="is-rounded"
                  src={pkmnData ? pkmnData.sprites.front_default : 'https://bulma.io/images/placeholders/128x128.png'}
                  alt="Placeholder "
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4" style={{ textTransform: "capitalize" }}>
                {pkmnData ? pkmnData.name : "Pokemon"}
              </p>
              <ul style={{ textTransform: "capitalize" }}>
                {pkmnData
                  ? pkmnData.types.map(type => (
                      <li key={type.slot}>{type.type.name}</li>
                    ))
                  : ''}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CardDisplayPKMN;
