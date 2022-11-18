import { useState } from "react";

const useInput = (inputChecker) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = inputChecker(enteredValue)
    const isInputInvalid = !valueIsValid && isTouched

    const inputChangeHandler = event => {
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        enteredValue,
        valueIsValid,
        inputChangeHandler,
        inputBlurHandler,
        reset,
        isInputInvalid
    }
}

export default useInput