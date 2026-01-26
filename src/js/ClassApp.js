import React from 'react'

class ClassApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: props.count
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    render(){
        return (
            <>
                <h1>Кнопка нажата {this.state.count} раз</h1>
                <button onClick={this.increment}>Увеличить</button>
            </>
        )
    }
}

export default ClassApp