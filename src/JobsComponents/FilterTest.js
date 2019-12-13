import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Autosuggest from 'react-autosuggest';
import themeable from 'react-themeable';
import Autocomplete from 'react-autocomplete'
import { Col, Row, Form, Container } from 'react-bootstrap';

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


export default class FilterTest extends Component {


    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: [],
            todo: '',
            todos: [
            ].map((text, id) => ({ id, text })),
        };
        this.state.id = this.state.todos.length;
        // this.handleChange = this.handleChange.bind(this);
        // this.add = this.add.bind(this);
        // this.remove = this.remove.bind(this);
    }


    onChangeInput = (event, { newValue }) => {
        this.setState({
            value: newValue, todo: newValue
        });
        console.log(newValue)
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
    add = (event) => {
        event.preventDefault();
        this.setState({
            id: this.state.id + 1,
            todos: [
                ...this.state.todos,
                { id: this.state.id, text: this.state.todo || '-' }
            ],
            todo: '',
        });
    }
    remove = (event) => {
        this.setState({
            todos: this.state.todos.filter(item =>
                item.id !== +event.currentTarget.getAttribute('data-id')
            )
        });

    }
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
        console.log(name + " naemee")
    }

    
    render() {

        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Type a programming language',
            value,
            onChange: this.onChangeInput
        };

        return (
            <form onSubmit={this.add} autoComplete="off">
                <div className="col-12 mb-2">
                    <TransitionGroup>
                        {this.state.todos.map((item) =>
                            // The next line is what controls
                            // animated transitions
                            <Fade key={item.id} collapse bottom>
                                <div className="card">
                                    <div className="card-body justify-content-between">
                                        {item.text}
                                        <button
                                            data-id={item.id}
                                            onClick={this.remove}
                                            type="button"
                                            className="close"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                </div>
                            </Fade>
                        )}
                    </TransitionGroup>
                </div>

                {/* <div className="col-10"> */}
                    <Row>
                    {/* <div className="input-group mt-4 mb-1"> */}
                        <Autosuggest
                        style={{background:"red"}}
                        type="text"
                        id="todoField"
                        name="todo"
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                        />

                        {/* <input
                  type="text"
                  className="form-control"
                  id='todoField'
                  placeholder='Todo item'
                  name='todo'
                  value={this.state.todo}
                  onChange={this.handleChange}
                /> */}        
                    {/* </div> */}
                    <div className="input-group-append buttonThing">
                            <button
                                onClick={this.add}
                                className="btn btn-outline-success"
                                type="button">
                                Add Item
                             </button>

                        </div>
                        </Row>
                {/* </div> */}
            </form>
        );
    }
}
