import React, { PureComponent, createRef } from 'react';
import { dia, shapes } from 'jointjs';

const { standard: { Rectangle, Link } } = shapes;

interface ComponentProps {
    width: number;
    height: number;
    x: number;
    y: number;
}

class ReactRectangle extends PureComponent<ComponentProps> {
    // diaElement: shapes.standard.Rectangle;
    ref: React.RefObject<HTMLDivElement>;
    constructor(props: Readonly<ComponentProps>) {
        super(props);
        this.ref = createRef();
        const r = new Rectangle();
        r.resize(props.width, props.height);
        r.position(props.x, props.y);
        this.state.diaElement = r;
    }
    render(): React.ReactElement {
        return <div ref={this.ref}></div>;
    }
}
ReactRectangle.defaultProps = {
    x: 0,
    y: 0,
};
export default ReactRectangle;

// import { dia, shapes } from 'jointjs';
// import PropTypes from 'prop-types';

// import './Joint.styl';
// // import './Joint.css';
// // import styles from './Joint.styl';
// // console.log(styles);

// const { Graph, Paper } = dia;
// const { standard: { Rectangle, Link } } = shapes;

// interface RectangleProps {
//     width: number;
//     height: number;
//     x: number;
//     y: number;
// }

// interface ComponentProps {
//     // startFrom: number;
// }

// class Joint extends Component<ComponentProps> {

//     graph: joint.dia.Graph;

//     jointPaperRef: React.RefObject<HTMLDivElement>;

//     paper?: joint.dia.Paper;

//     constructor(props: Readonly<ComponentProps>) {

//         super(props);

//         this.graph = new Graph();

//         this.jointPaperRef = createRef<HTMLDivElement>();

//     }

//     componentDidMount(): void {

//         this.paper = new Paper({
//             el: this.jointPaperRef.current,
//             model: this.graph,
//             width: 600,
//             height: 400,
//             gridSize: 10
//         });

//         const rect1 = new Rectangle();
//         rect1.resize(100, 40);
//         rect1.position(10, 20);
//         rect1.addTo(this.graph);

//         const rect2 = new Rectangle();
//         rect2.resize(200, 20);
//         rect2.position(300, 100);
//         rect2.addTo(this.graph);

//         const link = new Link();
//         link.source(rect1);
//         link.target(rect2);
//         link.addTo(this.graph);
//     }

//     render(): React.ReactElement {
//         return (
//             <div className="root">
//                 <div ref={this.jointPaperRef} />
//             </div>
//         );
//     }
// }

// export default Joint;
