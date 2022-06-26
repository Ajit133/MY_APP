import { Component } from "react";

class Form extends Component{
    state = {
        title:"JavaScript",
        text : "JavaScript is awesome",
        library : 'React'
    }
    handleChange = (e) => {
       if (e.target.type === 'text'){
        this.setState({
            title : e.target.value
        });
       }else if(e.target.type === 'textarea'){
        this.setState({
            text : e.target.value
        })
       }else if(e.target.type === 'select-one'){
        this.setState({
            library : e.target.value
        })} else(console.log('Nothing Here'))

    }
    render(){
        const {title,text,library} = this.state
        return(
            
            <form>
                <input type="text" placeholder="Enter the Text" value={title} onChange={this.handleChange}/>
                <br/>
                <br/>
                <textarea name="text" value={text} onChange={this.handleChange} />
                <br/>
                <br/>
                <select value={library} onChange={this.handleChange} >
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                </select>
            </form>
            
        )
    }
}
export default Form