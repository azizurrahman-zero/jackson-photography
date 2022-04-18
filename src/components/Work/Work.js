import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Work.css'

const Work = ({ work }) => {
    const { icon, name } = work;
    return (
        <Col>
            <Card className="h-100 align-items-center border-0 shadow-lg py-4 rounded-3 work-item">
                <img src={icon} className="work-icon" alt={name} />
                <Card.Body>
                    <Card.Title className='fs-4 work-name'>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Work;