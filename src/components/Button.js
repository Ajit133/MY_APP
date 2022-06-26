import { Component } from "react";


class Button extends Component{

    render () {
        const {change,Locale,show} = this.props
        return(
            <div>
            <button type="button" onClick={() => change(Locale)} >
             {Locale === "bn-BD"?'Change Clock' :'ঘড়ি পরিবর্তন করুন'}
            </button>
             {show && <p>Hello</p>}
            </div>

        )
    }
}
export default Button;