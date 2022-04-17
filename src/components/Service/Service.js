import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = () => {
    return (
        <Col>
            <Card className="h-100">
                <img src="..." className="card-img-top" alt="..." />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button src='#'>CheckOut</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;