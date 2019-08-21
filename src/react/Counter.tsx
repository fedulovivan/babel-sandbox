import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

interface CounterProps {
    startFrom: number;
}

export default function Counter(props: CounterProps): React.ReactElement {
    const [counter, setCounter] = useState(props.startFrom);
    function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
        setCounter(counter + (event.currentTarget.id === 'inc' ? 1 : -1));
    }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setCounter(parseInt(event.currentTarget.value, 10));
    }
    return (
        <div>
            {/* <input type="text" value={counter} readOnly />
            <button id="inc" onClick={handleClick}>Increase +</button>
            <button id="dec" onClick={handleClick}>Decrease -</button> */}
            <Button id="dec" onClick={handleClick}>Dec</Button>
            <Input type="number" value={counter} onChange={handleChange}></Input>
            <Button id="inc" onClick={handleClick}>Inc</Button>
        </div>
    );
}