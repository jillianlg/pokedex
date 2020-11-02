
import React from 'react'
import './App.css';
import request from 'superagent';
import PokeItem from './PokeItem';

export default class App extends React.Component {
    state = {
        filter: '',
        ability: '',
        hidden: '',
        submit: '',
        change: '',
        pokeData: {},
        loading: true,
    }

    componentDidMount = async () => {
        this.setState({ loading: true })

        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params.pokeName}`)

        this.setState({ pokeData: response.body })

        this.setState({ loading: false })

    }

    render() {
        return (
            <div className="detail-card"> {
                this.state.loading
                    ?
                    <iframe
                        src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW"
                        title={Math.random()}
                        width="480"
                        height="480"
                        frameBorder="0"
                        className="giphy-embed"
                        allowFullScreen />
                    : 
                    <div>
                        {/* <Dropdown
                            onChangeAbility={this.onChangeAbility}
                            onChangeHidden={this.onChangeHidden} />
                        <SearchBar
                            onButtonClick={this.onButtonClick} onTextChange={this.onTextChange} /> */}
                        <PokeItem
                            name={this.state.pokeData.pokemone} 
                            url={this.state.pokeData.url_image} 
                            ability={this.state.pokeData.ability_1} 
                            hidden={this.state.pokeData.ability_hidden} 
                            shape={this.state.pokeData.shape}/>
                        </div>
                
            }
            </div>
        )
    }
}