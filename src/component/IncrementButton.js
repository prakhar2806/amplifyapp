import React from 'react';
import counterWrapper from '../HOC/counterWrapper';

const IncrementButton = ({ counter, incrementCounter }) => {

    return (
        <button onClick={incrementCounter}> clicked {counter} times</button>
    )
}

export default counterWrapper(IncrementButton);