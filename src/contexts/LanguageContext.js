import React, {Component, createContext} from 'react';

export const LanguageContext = createContext();

export  class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {language: "french"}
    };
    render() {
        return(
            <LanguageProvider value={this.state.language}>
                {this.props.children}
            </LanguageProvider>
        )
    }
}