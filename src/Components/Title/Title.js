import React, {Component} from 'react'
import './Title.css'

class Title  extends Component{

    constructor(props){
        super(props)

        this.state ={
            title: 'Your CountDown App',
            isInput: false,
        }
    }

    //create edit handeler method 
    editHandler(){
        this.setState({
            ...this.state,
            isInput:true
        })
    }
    //create method for inputChange 
    inputChange(event){
        this.setState({
            ...this.state,
            title:event.target.value
            
        })
    }
    //keyPressHanlder method for change keyprase
    keyPressHanler(event){
        if(event.key === 'Enter'){
            this.setState({
                ...this.state,
                isInput:false
            })
        }
    }
    blurHandler(event){
        this.setState({
            ...this.state,
            isInput:false
        })
    }


    render(){
        let output = null
        if(this.state.isInput){
            output = (
                <div className="edit-field">
                    <input 
                    className="form-control" 
                    onChange ={ (event) => this.inputChange(event) }
                    onKeyPress ={ event => this.keyPressHanler(event) }
                    onBlur ={ event => this.blurHandler(event) }
                    type="text" 
                    value={this.state.title} />
                </div>
            )

        }else{
            output = (
            <div className="d-flex title">
                <h2 className="display-4">{this.state.title}</h2>
                <span onClick= { () => this.editHandler() } className=" edit-icon ml-auto">
                <i className="fas fa-pencil-alt"></i>
                </span>
            </div>
            )
        }
        return(
            <div>
                {
                    output
                }
                
            </div>
            
            
        );
    }
}
export default Title