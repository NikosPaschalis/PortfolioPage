import React from 'react';
import { Card, Button } from 'react-bootstrap';
const Project = (props) => (
  
                <Card style={{ width: '18rem' }}>
        <Card.Body style = {{backgroundColor: '#164D56'}}>
        <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <a href={props.gitLink}><Button variant="primary">View GitHub Repo</Button></a>
        </Card.Body>
        </Card>
);

export default Project;