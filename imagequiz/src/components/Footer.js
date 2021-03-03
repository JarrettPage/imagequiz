import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return (
        <Row><Col>
            <div>Practicum 5 &copy; Copyright {new Date().getFullYear()}, All Rights Reserved.</div>
        </Col></Row>
    );
}

export default Footer;