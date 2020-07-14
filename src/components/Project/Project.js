import React from 'react';
import { Card, Button } from 'react-bootstrap';
const Project = (props) => (
  
                <Card style={{ width: '18rem'}}>
        <Card.Body style = {{backgroundColor: '#EAEDED'}}>
        <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Button variant="primary">View GitHub Repo</Button>
        </Card.Body>
        </Card>
);

export default Project;