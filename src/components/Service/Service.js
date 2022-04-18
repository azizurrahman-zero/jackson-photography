import React from 'react';
import { Button, Card, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { picture, name, descriptionPoint, description, price } = service;
    return (
        <Col>
            <Card className="h-100">
                <img src={picture} className="card-img-top" alt={name} />
                <Card.Body>
                    <div className='d-flex my-3'>
                        <h1 className='price fw-bolder display-5'>$<span className='ms-1 fw-bolder colored-text'>{price}</span></h1>
                        <small>+VAT</small>
                    </div>
                    <Card.Title className='fw-bold  title-text'>{name}</Card.Title>
                    <ListGroup variant="flush" className='mb-3'>
                        <ListGroup.Item>{descriptionPoint[0]}</ListGroup.Item>
                        <ListGroup.Item>{descriptionPoint[1]}</ListGroup.Item>
                        <ListGroup.Item>{descriptionPoint[2]}</ListGroup.Item>
                        <ListGroup.Item>{descriptionPoint[3]}</ListGroup.Item>
                    </ListGroup>
                    <p className='description'>{description}</p>
                    <Link to='/checkout' className='text-decoration-none d-inline-block mt-3'>
                        <Button className='px-3 button'>Book Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;