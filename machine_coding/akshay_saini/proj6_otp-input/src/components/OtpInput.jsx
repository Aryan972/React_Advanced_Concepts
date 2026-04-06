import {useRef, useEffect} from 'react';

export default function OtpInput({inputArr, setInputArr}){


    const refArr = useRef([]); //used to focus on the current input

    useEffect(() => {
        refArr.current[0]?.focus(); //focus on the first block
    },[]);

    const handleOnChange = (value, index) => {
        console.log(value)
        if(isNaN(value)) return;  //if anything other than number

        const newValue = value.trim(); //to avoid spaces
        const newArr = [...inputArr];
        newArr[index] = newValue.slice(-1); //to only pick the last digit in input box
        setInputArr(newArr);

        newValue && refArr.current[index+1]?.focus(); //makesure if value entered in th ecurrent box -> then only move to next box
    }

    //to clear the value on backspace
    const handleOnKeyDown = (e, index) => {
        console.log(e);
        if(!e.target.value && e.key === "Backspace"){ //to make sure only that block value get's deleted
            refArr.current[index-1]?.focus();
        }
    }

    return(
        <div>
            {inputArr && 
                inputArr.map((input, index) => (
                    <input 
                        className="input-boxes"
                        key={index} 
                        type="text" 
                        value={inputArr[index]}

                        ref={input => {refArr.current[index] = input}}
                        onChange={(e) => handleOnChange(e.target.value, index)}
                        onKeyDown={(e) => handleOnKeyDown(e,index)}
                    />
            ))}


        </div>
    )
}