import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { icon, name } = service;
    return (
        <Col>
            <Card className="h-100 align-items-center border-0 shadow-lg py-4 rounded-3 service-item">
                <img src={icon} className="service-icon" alt={name} />
                <Card.Body>
                    <Card.Title className='fs-4 service-name'>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;