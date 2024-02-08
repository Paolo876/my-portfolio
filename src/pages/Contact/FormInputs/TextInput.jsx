import { useState } from 'react'
import { TextField } from '@mui/material'

const inputStyles = {
  sx: {
    fontSize: { xs: 11, sm: 14.5, md: 15, lg: 15, xl:15 },
    fontWeight: 500,
    letterSpacing: .1,
    lineHeight: 1.25, 
    textShadow: "1px 1px 5px rgba(10,10,10,.75)",
    "&:hover": {
      textShadow: "1px 1px 3px rgba(100,100,100,.75)",
    },
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

const TextInput = ({ id, label, setValue }) => {
  const [ input, setInput ] = useState("");
  const [ error, setError ] = useState({state: false, message: ""})

  const handleSubmit = () => {
    if(input.trim().length === 0) {
      setError({state: true, message: "Input required."})
      setValue("")
    } else if(input.match(/[^A-Za-z 0-9]/g)) {
      setError({state: true, message: "Input must not contain any special characters."})
      setValue("")
    } else {
      setValue(input)
      setError({state: false, message: ""})
    }
  }

  return (
    <TextField
      variant="standard" 
      fullWidth 
      type="text" 
      InputProps={inputStyles} 
      InputLabelProps={inputLabelStyles} 
      inputProps={{maxLength: 40}} 
      id={id}
      label={label}
      value={input}
      onChange={e => setInput(e.target.value)}
      onBlur={() => handleSubmit()}
      error={error.state}
      helperText={error.state && error.message}
    />
  )
}

export default TextInput