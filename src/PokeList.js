import React from 'react'
import PokeItem from './PokeItem.js';
import './PokeList.css';
import { Link } from 'react-router-dom';

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

                        .map((pokemon, i) => {
                        return (
                        <Link to= {`/pokeData/${pokemon._id}`}>
                        <PokeItem 
                        key = {i}
                        name={pokemon.pokemon}
                        url={pokemon.url_image} 
                        ability={pokemon.ability_1} 
                        hidden={pokemon.ability_hidden} 
                        shape={pokemon.shape}
                        egg={pokemon.egg_group_1}
                        attack={pokemon.attack}
                        defense={pokemon.defense}/>
                        </Link>)
                        })
                    }
                    </div>
                    
            }
                </div>
        
        )
    }
}

