import React from "react";
import './style.scss';

class AppButton extends React.Component<{text:string}>{ 
    render(){
        return (        
            <button className="botao"
            >{this.props.text}</button>
        )
        
    }
}

export default AppButton;