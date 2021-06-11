import React from 'react'

const SeeButton = (props) => {
    return (
        <button className='see-Button' type='button' onClick={props.listener} style={{...props.style}}>
                {props.textBtn}
        </button>
    )
}

export default SeeButton
