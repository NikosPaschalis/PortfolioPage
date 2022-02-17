import React from 'react';
import { Card, Button } from 'react-bootstrap';
const Project = (props) => (
  
                <Card bg="dark" style={{ width: '18rem'}}>
        <Card.Body >
        <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <a href={props.gitLink}><Button variant="info">View GitHub Repo</Button></a>
        </Card.Body>
        </Card>
);

export default Project;