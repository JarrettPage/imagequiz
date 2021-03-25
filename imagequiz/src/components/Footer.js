import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return (
        <Row><Col>
            <div>ImageQuiz &copy; Copyright {new Date().getFullYear()}, All Rights Reserved.</div>
        </Col></Row>
    );
}

export default Footer;