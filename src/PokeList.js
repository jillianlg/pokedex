import React from 'react'
import PokeItem from './PokeItem.js';
import './PokeList.css';

export default class PokeList extends React.Component {
    render() {

        return (
            <div >
            {
                    this.props.pokemonProp.length === 0
                    ? <iframe
                        src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" 
                        title={Math.random()} 
                        width="480" 
                        height="480" 
                        frameBorder="0" 
                        className="giphy-embed" 
                        allowFullScreen/>

                :    <div className="poke-cards">
                        {
                        this.props.pokemonProp.filter((item) => {
                            if (!this.props.abilityProp) return true;
                            if (item.ability_1 === this.props.abilityProp) return true;
                            return false;
                        })

                        .filter((item) => {
                            if (!this.props.hiddenProp) return true;
                            if (item.ability_hidden === this.props.hiddenProp) return true;
                            return false;
                        })

                        .filter((item) => {
                            if (!this.props.submitProp) return true;
                            if (item.pokemon === this.props.submitProp) return true;
                            return false;
                        })

                        .filter((item) => {
                            if (!this.props.changeProp) return true;
                            if (item.pokemon === this.props.changeProp) return true;
                            return false;
                        })

                        .map(pokemon => {
                        return <PokeItem 
                        name={pokemon.pokemon} 
                        url={pokemon.url_image} 
                        ability={pokemon.ability_1} 
                        hidden={pokemon.ability_hidden} 
                        shape={pokemon.shape}/>
                        })
                    }
                    </div>
            }
                </div>
        
        )
    }
}

