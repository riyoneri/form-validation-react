import { useState } from "react";

const useInput = (validateValue) => {
    const [entereValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(entereValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    }
    const inputBlurHandler = event => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: entereValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }

}

export default useInput