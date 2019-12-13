import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest';
import { Col, Row, Form, Container } from 'react-bootstrap';
// const languages = [
//     {
//       name: 'Python',
//       year: 1991
//     },
//     {
//       name: 'Ruby',
//       year: 1995
//     },
//     {
//       name: 'Scala',
//       year: 2003
//     }
//   ];

//   // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
//   const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

//   const getSuggestions = value => {
//     const escapedValue = escapeRegexCharacters(value.trim());

//     if (escapedValue === '') {
//       return [];
//     }

//     const regex = new RegExp('^' + escapedValue, 'i');
//     const suggestions = languages.filter(language => regex.test(language.name));

//     if (suggestions.length === 0) {
//       return [
//         { isAddNew: true }
//       ];
//     }

//     return suggestions;
//   }

//   export default class AutoSugTest extends Component{

//     constructor() {
//         super();

//         this.state = {
//           value: '',
//           suggestions: []
//         };    
//       }

//       onChange = (event, { newValue, method }) => {
//         this.setState({
//           value: newValue
//         });
//       };

//       getSuggestionValue = suggestion => {
//         if (suggestion.isAddNew) {
//           return this.state.value;
//         }

//         return suggestion.name;
//       };

//       renderSuggestion = suggestion => {
//         if (suggestion.isAddNew) {
//           return (
//             <span>
//               [+] Add new: <strong>{this.state.value}</strong>
//             </span>
//           );
//         }

//         return suggestion.name;
//       };

//       onSuggestionsFetchRequested = ({ value }) => {
//         this.setState({
//           suggestions: getSuggestions(value)
//         });
//       };

//       onSuggestionsClearRequested = () => {
//         this.setState({
//           suggestions: []
//         });
//       };

//       onSuggestionSelected = (event, { suggestion }) => {
//         if (suggestion.isAddNew) {
//           console.log(this.state.value);
//         }
//       };

//       render() {
//         const { value, suggestions } = this.state;
//         const inputProps = {
//           placeholder: "Type 'c'",
//           value,
//           onChange: this.onChange
//         };

//         return (
//          <div>
//           <Autosuggest 
//             suggestions={suggestions}
//             onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//             onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//             getSuggestionValue={this.getSuggestionValue}
//             renderSuggestion={this.renderSuggestion}
//             onSuggestionSelected={this.onSuggestionSelected}
//             inputProps={inputProps} 
//           />
//           <p>BLAH</p>
//           <p>KK</p>
//           </div>
//         );
//       }
//     }



const languages = [
    {
        name: 'C',
        year: 1972
    },
    {
        name: 'Elm',
        year: 2012
    }];

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : languages.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
);

export default class TestSlider extends Component {

    state = {
        value: '',
        suggestions: []
    };

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {

        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Type a programming language',
            value,
            onChange: this.onChange
        };


        return (
            <Container>
                <h1>AutoSug</h1>

                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />


            </Container>
        )
    }
}
