import React from 'react';
import './PokeItem.css';

// this is the template: below is all the elements you want to render on the page.
// this.props.WHATEVER is booger that you will use in PokeList. from PokeList you refer to WHATEVER={individualWhatever.dataWhatever}. 

export default class PokeItem extends React.Component {
    render() {
        return (
            <div className="poke-card">
                <h3 className="name">{this.props.name}</h3>
                <img className="picture" src={this.props.url} alt={this.props.name} ></img>
                <p className="ability">Ability: {this.props.ability}</p>
                <p className="hidden-ability">Hidden Ability: {this.props.hidden}</p>
                <p className="shape">Shape: {this.props.shape}</p>
                <p className="egg">Egg: {this.props.egg}</p>
                <p className="attack">Attack: {this.props.attack}</p>
                <p className="defense">Defense: {this.props.defense}</p>
            </div>
        )
    }
}
