
import React from 'react'
import './App.css';
import PokeList from './PokeList.js';
import Dropdown from './Dropdown.js';
import SearchBar from './Search.js';
import request from 'superagent';

export default class App extends React.Component {
    state = {
        filter: '',
        ability: '',
        hidden: '',
        submit: '',
        change: '',
        pokeData: []
    }

    componentDidMount = async () => {
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params.pokeName}`)

        this.setState({ pokeData: response.body.results })
    }



    render() {
        console.log(this.state.ability);
        return (
            <div className="fetch">
                this.props.pokemonData.length === 0
                ? <iframe
                    src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" 
                    title={Math.random()} 
                    width="480" 
                    height="480" 
                    frameBorder="0" 
                    className="giphy-embed" 
                    allowFullScreen/>
                :  <h1>{this.props.match.params.pokeName}POKEMON!</h1>
                <Dropdown
                    onChangeAbility={this.onChangeAbility}
                    onChangeHidden={this.onChangeHidden} />
                <SearchBar
                    onButtonClick={this.onButtonClick} onTextChange={this.onTextChange} />
                <PokeList
                    pokemonProp={this.state.pokeData}
                    abilityProp={this.state.ability}
                    hiddenProp={this.state.hidden}
                    submitProp={this.state.submit} />
            </div>
        )
    }
}