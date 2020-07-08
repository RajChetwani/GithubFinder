import React from 'react'
import spinner from './spinner.gif'

export default function Spinner() {
    return (
        <React.Fragment>
            <img src={spinner} alt="" style={{ width:'100px',margin:'auto',display:'block'}} />
        </React.Fragment>
    )
}
