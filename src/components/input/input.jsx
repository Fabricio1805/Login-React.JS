import React from 'react'
import * as C from './styles'


const Input = ({type, placehoulder, value, onChange}) => {
  return (
    <C.Input 
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placehoulder}

    />
  )
}

export default Input;