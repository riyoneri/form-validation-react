import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const {
    enteredValue: enteredFname,
    valueIsValid: fnameIsValid,
    inputChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    isInputInvalid: fnameInvalid,
    reset: resetFnameInput
  } = useInput(value => value.trim() !== '');

  const {
    enteredValue: enteredLname,
    valueIsValid: lnameIsValid,
    inputChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    isInputInvalid: lnameInvalid,
    reset: resetLnameInput
  } = useInput(value => value.trim() !== '');

  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isInputInvalid: emailInvalid,
    reset: resetEmailInput
  } = useInput(value => value.search('@') > -1);

  let isFormValid = false;
  if (fnameIsValid && lnameIsValid && emailIsValid) {
    isFormValid = true;
  }

  const formSubmitHandler = event => {
    event.preventDefault()

    console.log(enteredFname, enteredLname, enteredEmail)

    resetFnameInput()
    resetLnameInput()
    resetEmailInput()
  }

  const firsNameClasses = fnameInvalid ? 'form-control invalid' : 'form-control'
  const lastNameClasses = lnameInvalid ? 'form-control invalid' : 'form-control'
  const emailClasses = emailInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firsNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={fnameChangeHandler}
            value={enteredFname}
            onBlur={fnameBlurHandler}
          />
          {fnameInvalid && <p>Firstname must not be empty!</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lnameChangeHandler}
            value={enteredLname}
            onBlur={lnameBlurHandler}
          />
          {lnameInvalid && <p>Lastname must not be empty!</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailInvalid && <p>Enter valid email!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
