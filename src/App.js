
import React from 'react'
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokemonData from './Data.js';
import Dropdown from './Dropdown.js';

export default class App extends React.Component {
  state = {
      ability: '',
      hidden: '',
  }
  
  handleChangeAbility = (e) => {
      this.setState({
        ability: e.target.value,
      })
  }

  handleChangeHidden = (e) => {
    this.setState({
      hidden: e.target.value,
    })
}

  render() {
    return (
      <div>
        <Header />
        <Dropdown 
        handleChangeAbility={this.handleChangeAbility}
        handleChangeHidden={this.handleChangeHidden} />
        <PokeList 
        pokemonProp={pokemonData} 
        abilityProp={this.state.ability}
        hiddenProp={this.state.hidden}/>
      </div>
    )
  }
}