import { useState } from 'react'
import { MuiTelInput } from 'mui-tel-input'
// import { TextField } from '@mui/material'}
const PhoneInput = ({ id, label, setValue }) => {
  const [ input, setInput ] = useState("");
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
      // disableDropdown 
      value={input}
      onChange={e => setInput(e)}
    />
  )
}

export default PhoneInput