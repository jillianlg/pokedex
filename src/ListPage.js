
import React from 'react'
import './App.css';
import PokeList from './PokeList.js';
import pokemonData from './Data.js';
import Dropdown from './Dropdown.js';
import SearchBar from './Search.js';

// 0) move DropDown into ListPage.js (aka original App.js)
// 1) move filter state to ListPage.js (aka original App.js)
// 2) give DropDown the debit card to change ListPage.js (aka original App.js) state
// 3) give WolfList the filter (since it's the component that needs it)

// ListPage.js (aka original App.js) is a container component. it manages state and passes it to children.

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