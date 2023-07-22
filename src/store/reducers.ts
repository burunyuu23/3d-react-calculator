import {ADD_SIGN, CalcActionTypes, EVALUATE, REMOVE_LAST_SIGN} from "./actions";

interface CalcState {
    expression: string;
    result: string;
}

const initialState: CalcState = {
    expression: '',
    result: ''
};

const calcReducer = (state = initialState,
                     action: CalcActionTypes) => {
    switch (action.type) {
        case ADD_SIGN:
            if (action.payload === ".") {
                const allSigns = state.expression.split(' ');
                const lastChar = state.expression.charAt(state.expression.length - 1);
                const lastLastChar = state.expression.charAt(state.expression.length - 2);
                if (allSigns[allSigns.length - 1].includes('.') ||
                    state.expression === "" ||
                    lastChar === " " || '+-*/.'
                        .split('')
                        .includes(lastChar) || '+-*/.'
                        .split('')
                        .includes(lastLastChar))
                    return {...state}
            }
            if ('+-*/'
                .split('')
                .includes(action.payload)) {
                const lastChar = state.expression.charAt(state.expression.length - 1);
                const lastLastChar = state.expression.charAt(state.expression.length - 2);
                if (state.expression === "" || lastChar === " " || '+-*/.'
                    .split('')
                    .includes(lastChar) || '+-*/'
                    .split('')
                    .includes(lastLastChar)) {
                    return {...state}
                }
                return {
                    ...state,
                    expression: state.expression + " " + action.payload + " ",
                    result: ''
                }
            }
            return {
                ...state,
                expression: state.expression + action.payload,
                result: ''
            }
        case REMOVE_LAST_SIGN:
            const lastChar = state.expression.charAt(state.expression.length - 1);
            if ('+-*/'
                .split('')
                .includes(lastChar)) {
                return {
                    ...state,
                    expression: state.expression.slice(0, -2),
                    result: ''
                }
            }
            return {
                ...state,
                expression: state.expression.slice(0, -1),
                result: ''
            }
        case EVALUATE:
            if (state.result !== "") {

                return {
                    ...state,
                    expression: state.result,
                    result: ''
                }
            }
            if (state.expression !== '') {
                const lastChar = state.expression.charAt(state.expression.length - 1);
                console.log(lastChar)
                if (!'+-*/. '
                    .split('')
                    .includes(lastChar))
                    return {
                        ...state,
                        result: '' + eval(state.expression)
                    }
            }
            return {...state}

        default:
            return state
    }
}

export default calcReducer;