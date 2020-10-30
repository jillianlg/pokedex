
import React from 'react'
import './App.css';
import PokeList from './PokeList.js';
import Dropdown from './Dropdown.js';
import SearchBar from './Search.js';
import request from 'superagent';

export default class App extends React.Component {
  state = {
      filter:'',
      ability: '',
      hidden: '',
      submit: '',
      change: '',
      pokeData: []
  }

  componentDidMount = async () => {
      await this.searchPoke();
  }

  onButtonClick = async (e) => {
    e.preventDefault();
    await this.searchPoke();
  }

  onTextChange = (e) => {
      this.setState({ filter: e.target.value })}

  onChangeAbility = (e) => {
      this.setState({ ability: e.target.value })}

  onChangeHidden = (e) => {
    this.setState({ hidden: e.target.value })}

  searchPoke = async () => {
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&perPage=1000`)
    
      this.setState({ pokeData: response.body.results })
  }

  searchAbility = async () => {
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.ability}&perPage=1000`)
    
      this.setState({ ability: response.body.results, pokeData: response.body.results })
  }

  searchHidden = async () => {
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.hidden}&perPage=1000`)
    
      this.setState({ hidden: response.body.results, pokeData: response.body.results })
  }


  render() {
    
    return (
      <div>
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