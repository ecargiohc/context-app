import React, {createContext, useState} from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
        const [language, setLanguage] = useState("spanish");
        const changeLanguage = (e) => setLanguage(e.target.value);
    // changeLanguage(e) {
    //     this.setState({language: e.target.value})
    // };
    // render() {
        return(
            <LanguageContext.Provider 
            // value={{...this.state, changeLanguage: this.changeLanguage}}
            value={{language, changeLanguage}}>
                {/* {this.props.children} */}
                {props.children}
            </LanguageContext.Provider>
        )
    // }
};

export const withLanguageContext = Component => props => (
    <LanguageContext.Consumer>
        {value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
);
