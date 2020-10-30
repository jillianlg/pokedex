
import React from 'react'
import './Dropdown.css';

export default class Dropdown extends React.Component {
    render() {
        return (
            <div className="drop-down">
                <select onChange={this.props.onChangeAbility}>
                    <option value="">Abilities</option>
                    <option value="overgrow">Overgrow</option>
                    <option value="blaze">Blaze</option>
                    <option value="torrent">Torrent</option>
                    <option value="shield-dust">Shield Dust</option>
                    <option value="shed-skin">Shed Skin</option>
                    <option value="swarm">Swarm</option>
                    <option value="keen-eye">Keen Eye</option>
                </select>
                <select onChange={this.props.onChangeHidden}>
                    <option value="">Hidden Abilities</option>
                    <option value="chlorophyll">Chlorophyll</option>
                    <option value="solar-power">Solar Power</option>
                    <option value="rain-dish">Rain Dish</option>
                    <option value="run-away">Run Away</option>
                    <option value="NA">None</option>
                    <option value="sniper">Sniper</option>
                    <option value="big-pecks">Big Pecks</option>
                </select>
            </div>
        )
    }
}