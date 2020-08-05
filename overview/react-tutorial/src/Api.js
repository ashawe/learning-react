import React, { Component } from 'react'

class App extends Component {
    state = {
        data: [],
    }

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url =
            'https://en.wikipedia.org/w/api.php?action=opensearch&search=corona&format=json&origin=*'

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    data: result,
                })
            })
    }

    render() {
        const { data } = this.state

        const result = data.map((entry, index) => {
            if (Array.isArray(entry) && index !== 2) {
                const test = entry.map((row, index) => {
                    if(row === "")
                        return ""
                    return <li key={index}>{row}</li>
                })
                return <li key={index}><ul>{test}</ul></li>
            }
            if( index === 2 )
                return ""
            else {
                return <li key={index}>{entry}</li>
            }
        })

        return <ul>{result}</ul>
    }
}

export default App