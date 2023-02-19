import React, {useState} from 'react';

const NewComponent = () => {

    const [counter, setCounter] = useState(1)
    const changeCounter = (value) => {
        setCounter(counter + value);
    }
    return (
        <div>
            <h2>New component</h2>
            <button onClick={() => changeCounter(-1)}>-</button>
            {counter}
            <button onClick={() => changeCounter(1)}>+</button>
        </div>
    );
};

export default NewComponent;
