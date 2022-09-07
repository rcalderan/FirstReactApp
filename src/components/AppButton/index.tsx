import React from "react";
import './style.scss';

class AppButton extends React.Component<{
    text:string,
    type?:"button" | "submit" | "reset" | undefined
    }>{ 
    render(){
        const {type="button"} = this.props;
        return (        
            <button type={type} className="botao"
            >{this.props.text}</button>
        )
        
    }
}

export default AppButton;