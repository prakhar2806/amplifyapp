import React from 'react';
import  counterWrapper from '../HOC/counterWrapper'

const HoverCounter = ({counter, incrementCounter}) => {
    return (
        <h2 onMouseOver={incrementCounter}>
            Hover {counter} times
        </h2>
    )
}

export default counterWrapper(HoverCounter)