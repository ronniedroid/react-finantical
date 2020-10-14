import React from 'react'

function FormErr(props) {
    props.clearMessage()
    return(
      <div>
        <p>{props.message}</p>
      </div>
    )
  }

  export default FormErr