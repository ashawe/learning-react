import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ],
    }

    removeCharacter = (index) => {
        const { characters } = this.state
        
        // You must use this.setState() to modify an array. Simply applying a new value to this.state.property will not work.
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    // A class component must include render(), and the return can only return one parent element.
    render() {
        const { characters } = this.state
        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

export default App