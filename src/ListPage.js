
import React from 'react'
import './App.css';
import PokeList from './PokeList.js';
// import Dropdown from './Dropdown.js';
import SearchBar from './Search.js';
import request from 'superagent';

// 0) move DropDown into ListPage.js (aka original App.js)
// 1) move filter state to ListPage.js (aka original App.js)
// 2) give DropDown the debit card to change ListPage.js (aka original App.js) state
// 3) give WolfList the filter (since it's the component that needs it)

// ListPage.js (aka original App.js) is a container component. it manages state and passes it to children.

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
      this.setState({ pokemon: e.target.value })}

  onChangeAbility = (e) => {
      this.setState({ ability: e.target.value })}

  onChangeHidden = (e) => {
    this.setState({ hidden: e.target.value })}

  searchPoke = async () => {
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.filter}`)
    
      this.setState({ pokeData: response.body.results })
  }





  render() {
    return (
      <div>
        {/* <Dropdown 
        onChangeAbility={this.onChangeAbility}
        onChangeHidden={this.onChangeHidden} /> */}
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