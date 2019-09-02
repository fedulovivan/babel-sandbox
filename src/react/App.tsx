import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Foo from './Foo';
import { hot } from 'react-hot-loader/root';

import './App.styl';

// custom wrappers over jointjs
// import Joint from './Joint/Joint';
// import Rectangle from './Joint/Rectangle/Rectangle';
// import Link from './Joint/Link/Link';
// import ProjectStorm from './ProjectStorm/ProjectStorm';

interface ComponentProps {
    startFrom: number;
}

function App(props: ComponentProps): React.ReactElement {

    const [counter, setCounter] = useState(props.startFrom);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
        setCounter(counter + (event.currentTarget.id === 'inc' ? 1 : -1));
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setCounter(parseInt(event.currentTarget.value, 10));
    }

    return (
        <div className="root">

            <Button id="dec" onClick={handleClick}>Dec</Button>
            <Input type="number" value={counter} onChange={handleChange}></Input>
            <Button id="inc" onClick={handleClick}>Inc</Button>

            <Foo value="FC.value20" />

            {/*
            1. pass graph elements via props
            <Joint
                shapes={[
                    <Rectangle width={100} height={40} x={10} y={20} />,
                    <Rectangle width={200} height={20} x={300} y={100} />,
                ]}
                links={[
                    <Link source={shapes[0]} target={shapes[1]} />,
                ]}
            />
            2. pass graph elements as children
            <Joint>
                <Rectangle width={100} height={40} x={10} y={20} id="r1" />
                <Rectangle width={200} height={20} x={300} y={100} id="r2" />
                <Link source="r1" target="r2" />
            </Joint>
            */}

            {/* playing with react-diagrams */}
            {/* <ProjectStorm /> */}
        </div>
    );
}

App.defaultProps = {
    startFrom: 11,
}

export default hot(App);