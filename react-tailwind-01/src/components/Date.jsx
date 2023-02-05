import React from 'react'

const Date = () => {

  var today = new window.Date();
  return (
    <div className="flex ... align-items-center mb-5 mb-lg-0">
      <svg className="mr-1 svg-18 hide-mobile" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      <p className="text-s text-muted m-0">
        Actualizado el dia {today.getDate()}/{today.getMonth() + 1}/{today.getFullYear()}
      </p>
    </div>
  )
}

export default Date