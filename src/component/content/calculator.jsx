import React, { Component } from 'react';
import Base from './Base';
import { connect } from 'react-redux';
import DigitButton from './calculator/digitButton';
import OperationButton from './calculator/operationButton';
import ACTIONS from '../../redux/action';

class Calculator extends Component {
    state = { formater: Intl.NumberFormat('en-us') };

    format = number => {
        if (number === "") return "";
        const [integer, decimal] = number.split('.');//integer and decimal
        if (decimal === undefined)
            return this.state.formater.format(integer);
        return `${this.state.formater.format(integer)}.${decimal}`
    }

    render() { 
        return (
            <Base>
            <div className="calculator">
                <div className="output">
                    <div className="last-output">
                        {this.state.formater.format(this.props.lastOperand)} {this.props.operation}
                    </div>
                    <div className="current-output">
                        {this.state.formater.format(this.props.currentOperand)}
                    </div>
                </div>

                <button onClick={this.props.clear} className='button-ac'>AC</button>
                <button onClick={this.props.delete_digit}>Del</button>
                <OperationButton operation={"÷"} />
                    <DigitButton digit={"7"} />
                    <DigitButton digit={"8"} />
                    <DigitButton digit={"9"} />
                    <OperationButton operation={"×"} />
                    <DigitButton digit={"4"} />
                    <DigitButton digit={"5"} />
                    <DigitButton digit={"6"} />
                    <OperationButton operation={"-"} />
                    <DigitButton digit={"1"} />
                    <DigitButton digit={"2"} />
                    <DigitButton digit={"3"} />
                    <OperationButton operation={"+"} />
                    <DigitButton digit={"0"} />
                    <DigitButton digit={"."} />
                    <button onClick={this.props.evaluate} className='span-2'>=</button>
                </div>
             </Base>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        currentOperand: state.currentOperand,
        lastOperand: state.lastOperand,
        operation: state.operation,
    }
};

const mapDispatchToProps = {
    delete_digit: () => {
        return {
            type: ACTIONS.DELETE_DIGIT,
        }
    },
    clear: () => {
        return {
            type: ACTIONS.CLEAR,
        }
    },
    evaluate: () => {
        return {
            type: ACTIONS.EVALUATE,
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

