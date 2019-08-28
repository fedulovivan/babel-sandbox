import React, { PureComponent, createRef, Children } from 'react';
import { dia, shapes } from 'jointjs';
import PropTypes from 'prop-types';
import each from 'lodash/each';

import './Joint.styl';
// import './Joint.css';
// import styles from './Joint.styl';
// console.log(styles);

const { Graph, Paper } = dia;
const { standard: { Rectangle, Link } } = shapes;

interface ComponentProps {
    shapes: any[];
    links: any[];
    children: any;
}

class Joint extends PureComponent<ComponentProps> {

    graph: joint.dia.Graph;

    jointPaperRef: React.RefObject<HTMLDivElement>;

    paper?: joint.dia.Paper;

    constructor(props: Readonly<ComponentProps>) {

        super(props);

        this.graph = new Graph();

        this.jointPaperRef = createRef<HTMLDivElement>();

    }

    componentDidMount(): void {

        this.paper = new Paper({
            el: this.jointPaperRef.current,
            model: this.graph,
            width: 600,
            height: 400,
            gridSize: 10
        });

        // const rect1 = new Rectangle();
        // rect1.addTo(this.graph);

        // const rect2 = new Rectangle();
        // rect1.resize(100, 40);
        // rect1.position(10, 20);
        // rect2.resize(200, 20);
        // rect2.position(300, 100);
        // rect2.addTo(this.graph);

        // const link = new Link();
        // link.source(rect1);
        // link.target(rect2);
        // link.addTo(this.graph);

        Children.forEach(this.props.children, child => {
            console.log(child);
        });

        each(this.props.shapes, (/* { props: { width, height, x, y } } */shape) => {
            // const r = new Rectangle();
            // r.resize(width, height);
            // r.position(x, y);
            // r.addTo(this.graph);
            // shape.diaElement.addTo(this.graph);
            // console.log(shape);
        });

        each(this.props.links, ({ props: { source, target } }) => {
            // const l = new Link();
            // l.source(source);
            // l.target(target);
            // l.addTo(this.graph);
        });
    }

    render(): React.ReactElement {
        return (
            <div className="root">
                <div ref={this.jointPaperRef} />
            </div>
        );
    }
}

export default Joint;
