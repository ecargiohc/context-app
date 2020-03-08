import React, {Component, createContext} from 'react';

export const LanguageContext = createContext();

export  class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {language: "french"}
        this.changeLanguage = this.changeLanguage.bind(this);
    };
    changeLanguage(e) {
        this.setState(e.target.value);
    };
    render() {
        return(
            <LanguageProvider 
            value={{...this.state, changeLanguage: this.changeLanguage}}>
                {this.props.children}
            </LanguageProvider>
        )
    }
}