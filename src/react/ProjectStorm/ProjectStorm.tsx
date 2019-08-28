import React, { useState } from 'react';

import createEngine, {
    DefaultLinkModel,
    DefaultNodeModel,
    DiagramModel
} from '@projectstorm/react-diagrams';

import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';

import './ProjectStorm.styl';

interface ComponentProps {
    value: string;
    onChange: () => {};
}

const ProjectStorm: React.FC<ComponentProps> = (props: ComponentProps) => {


    const engine = createEngine();
    const node1 = new DefaultNodeModel({
        name: 'Node 1',
        color: 'rgb(0,192,255)',
    });
    node1.setPosition(100, 100);
    const port1 = node1.addOutPort('Out');
    const node2 = new DefaultNodeModel({
        name: 'Node 1',
        color: 'rgb(0,192,255)',
    });
    node2.setPosition(100, 200);
    const port2 = node2.addInPort('In');
    const link = port1.link<DefaultLinkModel>(port2);
    link.addLabel('Hello World!');
    const model = new DiagramModel();
    model.addAll(node1, node2, link);
    engine.setModel(model);

    return (
        <CanvasWidget engine={engine} className="canvasWidget" />
    );
}

export default ProjectStorm;
