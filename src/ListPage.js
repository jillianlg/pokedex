
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
      pokeData: [],
      pageNumber: 1,
      count: '',
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

    handleIncrement = async () => {
      await this.setState({ 
          pageNumber: this.state.pageNumber + 1, 
      })

      await this.searchPoke();
  }

  handleDecrement = async () => {
      await this.setState({ 
          pageNumber: this.state.pageNumber - 1, 
      })

      await this.searchPoke();
  }

  searchPoke = async () => {
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&perPage=20`)
    
      this.setState({ pokeData: response.body.results, 
      loading: false, count: response.body.count
    })


  }

  searchAbility = async () => {
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.ability}&perPage=20`)
    
      this.setState({ ability: response.body.results, pokeData: response.body.results })
  }

  searchHidden = async () => {
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.hidden}&perPage=20`)
    
      this.setState({ hidden: response.body.results, pokeData: response.body.results })
  }


  render() {
    
    return (
      <div className="user-input">
        <Dropdown 
        onChangeAbility={this.onChangeAbility}
        onChangeHidden={this.onChangeHidden} />
        <SearchBar 
        onButtonClick={this.onButtonClick} onTextChange={this.onTextChange} />
      <div className="paging-style">
              Page {this.state.pageNumber} out of {Math.ceil(this.state.count / 20)}
          </div>
          <div>
              {this.state.count} total pokemon in query 
          </div>
          {
            <button 
              disabled={this.state.pageNumber === 1} 
              onClick={this.handleDecrement}>
              Prev
          </button>
          }
          {
          <button 
              onClick={this.handleIncrement} 
              disabled={this.state.pageNumber === Math.ceil(this.state.count / 20)}>
              Next
          </button>
          }
        <PokeList 
        pokemonProp={this.state.pokeData} 
        abilityProp={this.state.ability}
        hiddenProp={this.state.hidden}
        submitProp={this.state.submit} />
      </div>
    )
  }
}
