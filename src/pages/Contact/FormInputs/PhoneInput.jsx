import { useState } from 'react'
import { MuiTelInput } from 'mui-tel-input'


const inputStyles = {
  sx: {
    fontSize: { xs: 11, sm: 14.5, md: 15, lg: 15, xl:15 },
    fontWeight: 500,
    letterSpacing: .1,
    lineHeight: 1.25, 
    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
    "&:hover": {
      textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    }
  }
}

const inputLabelStyles = {
  sx: {
    fontSize: { xs: 11.5, sm: 15, md: 15, lg: 15, xl:15 },
    fontWeight: 200,
    opacity: .75,
    letterSpacing: .75,
    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
  }
}


const PhoneInput = ({ id, label, setValue }) => {
  const [ input, setInput ] = useState("");
  const [ error, setError ] = useState({state: false, message: ""})


  const handleSubmit = () => {
    const updatedInput = input.replace(/\s/g, '')

    if(updatedInput.trim().length === 0) {
      setError({state: true, message: "Input required."})
      setValue("")
    } else if(!updatedInput.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g) || updatedInput.trim().length !==  12) {
      setError({state: true, message: "Please enter a valid US number."})
      setValue("")
    } else {
      setValue(updatedInput)
      setError({state: false, message: ""})
    }
  }


  return (
    <MuiTelInput
      id={id}
      label={label}
      size='small'
      variant="standard"
      defaultCountry='US'
      forceCallingCode
      focusOnSelectCountry 
      preferredCountries={['US', 'CA']}
      sx={{my: {xs: 0, sm: 1.5, md: 1.75, lg: 1.5, xl: 2}}} 
      InputProps={inputStyles} 
      InputLabelProps={inputLabelStyles}
      value={input}
      onChange={e => setInput(e)}
      onBlur={() => handleSubmit()}
      error={error.state}
      helperText={error.state && error.message}
    />
  )
}

export default PhoneInput