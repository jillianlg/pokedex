import React, { Component } from 'react'
import request from 'superagent'

export default class FetchPage extends Component {
    state = {
        quotes: []
    }


    componentDidMount = async () => {
        const response = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
        
        this.setState({ quotes: response.body.results })
    }
    
    render() {
        return (
            <div className="fetch-page">
                {JSON.stringify(this.state.quotes)}
            </div>
        )
    }
}

