import React from 'react'

function PictureOfMe(props) {
    return (
        <>
            <img
                id={props.id}
                src="profile.jpg"
                width={props.width}
                height={props.height}
                className="d-inline-block align-top"
                alt="Nathan Schmidt"
            />
        </>
    )
}

export default PictureOfMe
