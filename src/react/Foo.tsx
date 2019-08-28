import React from 'react';

interface Props {
    value: string;
}

const Foo: React.FC<Props> = (props: Props) => {
    return (
        <div>
            { props.value }
        </div>
    );
}

export default Foo;
