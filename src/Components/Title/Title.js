import React, {Component} from 'react'

class Title  extends Component{

    constructor(props){
        super(props)

        this.state ={
            number: 0,
        }
    }

    counter(){
        this.setState({
            number: this.state.number+1
        })
        console.log(this.state.number)
    }

    render(){
        return(
            <div>
                <h2>Hi, this is {this.props.name} & My Email ( {this.props.email} )</h2>
                <button onClick= { () => this.counter() }>Click Me { this.state.number }</button>
                
            </div>
            
            
        );
    }
}
export default Title