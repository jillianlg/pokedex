
import React from 'react'
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokemonData from './Data.js';
import Dropdown from './Dropdown.js';
import SearchBar from './Search.js';

export default class App extends React.Component {
  state = {
      ability: '',
      hidden: '',
      submit: '',
      change: '',
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
handleSubmit = (e) => {
  e.preventDefault()  
  this.setState({
      submit: this.state.change,
    })
}

handleChange = (e) => {
    e.preventDefault()  
    this.setState({
      change: e.target.value,
    })
}

  render() {
    return (
      <div>
        <Header />
        <Dropdown 
        handleChangeAbility={this.handleChangeAbility}
        handleChangeHidden={this.handleChangeHidden} />
        <SearchBar 
        handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <PokeList 
        pokemonProp={pokemonData} 
        abilityProp={this.state.ability}
        hiddenProp={this.state.hidden}
        submitProp={this.state.submit} />
      </div>
    )
  }
}