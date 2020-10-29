import React, { Component } from 'react'
import request from 'superagent'

export default class FetchPage extends Component {
    componentDidMount = async () => {
        const response = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
        console.log(response.body.results);
    }
    
    render() {
        return (
            <div className="fetch-page">
                I am the fetch page
            </div>
        )
    }
}
