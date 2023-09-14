import React from 'react'

const Logo = ({stroke="white", fill="none"}) => {


  return (
  <svg width="66" height="66" viewBox="0 0 66 66" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M21.4101 17.6428L16.8729 63L9.43645 57.2774L2 51.5547L4.73121 23.4714L21.4101 17.6428Z" stroke={stroke} stroke-width="3"/>
    <path d="M41.5442 43.0585L25.2903 46.3437L29.5707 3L44.7623 10.7362L41.5442 43.0585Z" stroke={stroke} stroke-width="3"/>
    <path d="M62.8254 38.5954L47.74 41.6687L50.1229 19.6805L64 26.8847L62.8254 38.5954Z" stroke={stroke} stroke-width="3"/>
  </svg>
  )
}

export default Logo