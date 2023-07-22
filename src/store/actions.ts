export const ADD_SIGN = "ADD_SIGN";
export const REMOVE_LAST_SIGN = "REMOVE_LAST_SIGN";
export const EVALUATE = "EVALUATE";

interface AddSignAction {
    type: typeof ADD_SIGN;
    payload: string;
}
interface RemoveLastSignAction {
    type: typeof REMOVE_LAST_SIGN;
}
interface EvaluateAction {
    type: typeof EVALUATE;
}


export type CalcActionTypes = AddSignAction | RemoveLastSignAction | EvaluateAction;

export const addSign = (value: string): CalcActionTypes => ({
    type: ADD_SIGN,
    payload: value,
});

export const removeLastSign = (): CalcActionTypes => ({
    type: REMOVE_LAST_SIGN,
});

export const evaluate = (): CalcActionTypes => ({
    type: EVALUATE,
});