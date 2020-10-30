import React from 'react'

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.props.onButtonClick}>
                    <input type="text" onChange={this.props.onTextChange} />
                    <button>Search by Name</button>
                </form>
            </div>
        )
    }
}