import React from 'react'
import { Us, Es, Mx, Br } from "react-flags-select";

const Country = ({ country }) => {

  switch (country) {
    case 'Mexico':
      return <Mx width="32" alt="currency" height="32" />
    case 'EEUU':
      return <Us width="32" alt="currency" height="32"/>
    case 'Europa':
      return <Es width="32" alt="currency" height="32"/>
    case 'Brasil':
      return <Br width="32" alt="currency" height="32"/>
    default:
      return <Us />
  } 
}

export default Country