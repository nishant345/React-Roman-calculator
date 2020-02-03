/** 
 * description: main module contains App class and helper functions with event handlers
 * author: Nishant Gaurav
 * date: 30.01.2020
 * version: I
**/

import React, { Component } from "react";
import "./App.css";
import Dialog from './components/resultDialog';
import Utility from './util';
import { add, substract, multiply } from './calculate';
import { /*asyncValidateRomanNumeral*/ validateRomanNumeral } from './validate';

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });
    return valid;
};
// App class
class App extends Component {
    constructor(props) {
        super(props);
        // state definition
        this.state = {
            romanNumeralOne: null,
            romanNumeralTwo: null,
            value: '',
            res:'',
            isOpen: false,
            formErrors: {
                romanNumeralOne: "",
                romanNumeralTwo: ""
            }
        };
    }
    /**
     * Description: handleSubmit function to handle submit event 
     * parse values from the form if valid, do the calculation
     * @param   {type: Object} e: submit event
     * @return  {type: void} 
     */
    handleSubmit = e => {
        e.preventDefault();
        // proceed if form valid
        if (formValid(this.state)) {
            let num1, num2, op;
            let roman1 = this.state.romanNumeralOne;
            let roman2 = this.state.romanNumeralTwo;
            num1 = parseInt(Utility.romanToInt(roman1));
            num2 = parseInt(Utility.romanToInt(roman2));
            op = this.state.value;
            this.doCalculation(num1, num2, op);
        } else {
            this.setState({ res: " Can't calculate, Please fill the fields"})
        }
        
        // open the dialog box
        this.setState({ isOpen: true });
    }
    /**
     * Description: handleChange function to handle change event on form
     * validate each field 
     * @param   {type: Object} e: change event
     * @return  {type: void} 
     */
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
        switch (name) {
            case "romanNumeralOne":
                /* asyncValidate(value).then(result => { formErrors.romanNumeralOne = result }); */
                formErrors.romanNumeralOne = validateRomanNumeral(value);
                break;
            case "romanNumeralTwo":
                formErrors.romanNumeralTwo = validateRomanNumeral(value);
                break;
            default:
                break;
            }
        this.setState({ 
            formErrors, 
            [name]: value,
            value: e.target.value
        });
    }
    /**
     * Description: doCalculation function to do calculation
     * @param   {type: Number} num1: Input number
     * @param   {type: Number} num2: Input number
     * @param   {type: String} op: operation
     * @return  {type: void} 
     */
    doCalculation(num1, num2, op) {
        if (op){
            switch(op){
                case '+': 
                    let resAdd = add(num1, num2);
                    this.checkForBounds(resAdd);
                    break;
                case '-': 
                    let resSub = substract(num1, num2);
                    this.checkForBounds(resSub);
                    break;
                case '*': 
                    let resMul = multiply(num1, num2);
                    this.checkForBounds(resMul);
                    break;
                default:
                    break;
            }
        }
    }
    /**
     * Description: checkForBounds function to check bounds for Roman Numerals
     * @param   {type: Number} num: input Number
     * @return  {type: void} 
     */
    checkForBounds(num) {
        if (num >= 1 && num <= 3999){
        this.setState({res: Utility.intToRoman(num)});
        } else {
        this.setState({res: `Result out of bounds for Roman Numerals`});
        }
    }

    render() {
    const { formErrors } = this.state;

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Roman Calculator</h1>
                <form onSubmit={this.handleSubmit} noValidate> 
                    <div className="romanOne">
                        <label htmlFor="romanNumeralOne">Enter First Roman Numeral</label>
                        <input
                            className = {formErrors.romanNumeralOne.length > 0 ? "error" : null}
                            placeholder="First Roman Numeral"
                            type="text"
                            name="romanNumeralOne"
                            noValidate
                            data-testid = "romanNumeralOne"
                            onChange={this.handleChange}
                        />
                        {formErrors.romanNumeralOne.length > 0 && (
                            <span className="errorMessage">{formErrors.romanNumeralOne}</span>
                        )}
                    </div>
                    <div className="romanOne">
                        <label htmlFor="romanNumeralTwo">Enter Second Roman Numeral</label>
                        <input
                            className={formErrors.romanNumeralTwo.length > 0 ? "error" : null}
                            placeholder="Second Roman Numeral"
                            type="text"
                            name="romanNumeralTwo"
                            noValidate
                            data-testid = "romanNumeralTwo"
                            onChange={this.handleChange}
                        />
                        {formErrors.romanNumeralTwo.length > 0 && (
                            <span className="errorMessage">{formErrors.romanNumeralTwo}</span>
                        )}
                    </div>
                    <div className="romanOne">
                        <label htmlFor="operations">Operations</label>
                        <select className="operations" 
                            name = "operations"
                            data-testid = "operations"
                            value = {this.state.value}
                            onChange={this.handleChange}>
                            <option value="">Operation</option>
                            <option value="+">&#43;</option>
                            <option value="-">&#45;</option>
                            <option value="*">&#42;</option>
                        </select>
                    </div>
                    <div className="calculate-div">
                        <button 
                            type="submit" 
                            data-testid="calculateButton">
                            Calculate
                        </button>
                        <small 
                            data-testid="shortMsg">
                            When in Rome, do as the Romans do
                        </small> 
                    </div>
                </form>
                <Dialog isOpen={this.state.isOpen}
                        data-testid="dialog"
                        onClose={e => this.setState({ isOpen: false})}>
                    <h3> {this.state.romanNumeralOne} &nbsp;
                        {this.state.value} &nbsp;
                        {this.state.romanNumeralTwo} &nbsp; = 
                        &nbsp; {this.state.res} &nbsp;
                    </h3>
                </Dialog>
            </div>
        </div>
    )};
}

export default App;