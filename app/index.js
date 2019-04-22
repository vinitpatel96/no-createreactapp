var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css')

//components:
//State
// lifecycles events / methods -> hook into specific moments
// UI

class App extends React.Component {
    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)