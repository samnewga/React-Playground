import React from 'react';


class TheDate extends React.Component {
    constructor(props) {
        super(props)
        this.state={ datetime: new Date()
        };
        console.log('constructor')
    }
    componentDidMount(){
        this.interval = setInterval(() => {
            console.log('setInterval')
            this.setState({
                datetime: new Date()
            })
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.internval)
    }
    render() {
        console.log('render')
        return (
            <div>
                {this.state.datetime.toLocaleString()}
            </div>
        )
   }
}

export default TheDate