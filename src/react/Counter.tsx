import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

interface Props {
    startFrom: number;
    foo?: string;
}

export default function Counter(props: Props): React.ReactElement {
    const [counter, setCounter] = useState(props.startFrom);
    function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
        setCounter(counter + (event.currentTarget.id === 'inc' ? 1 : -1));
    }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = event.currentTarget;
        setCounter(value ? parseInt(value, 10) : 0);
    }
    return (
        <div>
            <Button id="dec" onClick={handleClick}>Dec</Button>
            <Input type="number" value={counter} onChange={handleChange}></Input>
            <Button id="inc" onClick={handleClick}>Inc</Button>
        </div>
    );
}
