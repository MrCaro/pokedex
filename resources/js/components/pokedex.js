import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PokemonList from '../../json/pokemons-list.json';
import PokeballsImage from '../../../public/images/pokeballs-bg-image.png';

export default class Pokedex extends Component {
    state = {
        filter: "",
        data: PokemonList
    };

    handleChange = event => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const { filter, data } = this.state;
        const placeHolder = 'Search in Pokedex';
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = data.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(lowercasedFilter)
            );
        });

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div  className="col-md-12 justify-content-center searchBarPokedex pokemon-list-container">
                        <i className="fas fa-search"></i>
                        <input className="input-searchBar" value={filter} onChange={this.handleChange} placeholder={placeHolder}/>
                    </div>
                    <div className="pokeballs-image col-md-12 justify-content-center text-center">
                        <img src={PokeballsImage} alt="pokeballs"/>
                    </div>
                    <div className="col-md-12 pokemon-list-margin">
                        {filteredData.map(item => (
                            <div key={item.pokemon_name} className="col-md-3 col-sm-6 col-6 justify-content-center pokemon-list-container">
                                <div>
                                    <img src={item.pokemon_image} alt="pokemon-image"/> <br/>
                                    <strong className="pokemon-names impact-font-family">{item.pokemon_name}</strong>  <br/>
                                    <span className={item.pokemon_type}>{item.pokemon_type}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('pokedex-json')) {
    ReactDOM.render(<Pokedex />, document.getElementById('pokedex-json'));
}