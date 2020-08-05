import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters: [],
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

    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    // A class component must include render(), and the return can only return one parent element.
    render() {
        const { characters } = this.state
        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App