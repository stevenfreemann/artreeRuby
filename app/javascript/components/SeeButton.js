import React from 'react'

const SeeButton = (props) => {
    return (
        <div>
            <button className='see-Button' type='button' onClick={props.listener}>
                 {props.textBtn}
            </button>
        </div>
    )
}

export default SeeButton
