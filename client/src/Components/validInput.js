import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';


const ValidInput = (props) => {

  const inputName= props.name;
  const invalidFunction= props.invalidFunction? props.invalidFunction: ()=>false;
  const inputType= props.inputType;
  

  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event) => {
    setValue(event.target.value);

    // check if input is valid
    if (invalidFunction(value)) {
      setIsValid(false);
    } 
    else {
      setIsValid(true);
    }
  };

  return (
    <div class= "m-2">
    <div  className="p-float-label">

      {inputType=="InputText"?
      <InputText 
        id = {`inputId`}
        type="text"
        value={value}
        onChange={handleInputChange}
        className={!isValid ? 'p-invalid' : ''}
      />:
      inputType=="InputDate"?
      <Calendar value={value} onChange={handleInputChange} />:
      <></>

      }
      {isValid ? <label htmlFor={`inputId`}>{inputName}</label>: 
      <label htmlFor={`inputId`} className="p-error">{`${inputName} לא חוקי`}</label>}
    </div> </div>
  );
};

export default ValidInput;

// return ( <>
//   <div class="flex flex-column card-container green-container">
//   <div className="field">
 
//       <ValidInput name='ת"ז מגיש הבקשה' inputType={"InputText"} invalidFunction={(x)=> x.length<8}></ValidInput>

// </div>
  
//   <div className="field">
      
//       <ValidInput name='שם מגיש הבקשה' inputType={"InputText"}></ValidInput>
//   </div>
//   <div className="field">
     
//       <ValidInput name='תאריך הגשה' inputType={"InputDate"}></ValidInput>
//       </div>

//       <div className="field" >

//       <ValidInput name='הערות' inputType={"InputText"}></ValidInput>
//       </div>
//   </div>

//   </>
//    )