import React from 'react';
import { Button, Card, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { picture, name, description, price } = service;
    return (
        <Col>
            <Card className="h-100">
                <img src={picture} className="card-img-top" alt="..." />
                <Card.Body>
                    <div className='d-flex my-3'>
                        <h1 className='price fw-bolder display-5'>$<span className='ms-1 fw-bolder colored-text'>{price}</span></h1>
                        <small>+VAT</small>
                    </div>
                    <Card.Title className='fw-bold  title-text'>{name}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{description[0]}</ListGroup.Item>
                        <ListGroup.Item>{description[1]}</ListGroup.Item>
                        <ListGroup.Item>{description[2]}</ListGroup.Item>
                        <ListGroup.Item>{description[3]}</ListGroup.Item>
                    </ListGroup>
                    <Link to='/login' className='text-decoration-none d-inline-block mt-4'>
                        <Button className='px-3 button'>Book Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;