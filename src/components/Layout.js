import React from 'react';
import { Container } from 'react-bootstrap';


export const Layout = (props) =>(
    <Container fluid="md" style= {{marginBottom: '20px'}}>
        {props.children}
    </Container>
);

export default Layout;