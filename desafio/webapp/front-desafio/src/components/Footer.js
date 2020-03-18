import React from 'react';
import { Navbar, Container, Col } from 'react-bootstrap'

class Footer extends React.Component {
    render() {
        let year = new Date().getFullYear();
        return (
            <Navbar fixed="bottom" bg="dark" variant='light' expand="lg">
                <Container>
                    <Col lg={12} className="text-center text-muted ">
                        <div>{year}, All Rights Reserved By Luan Maia</div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;