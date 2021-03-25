import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(){
    return (
        <Row><Col>
            <h2 style={{textAlign: "center"}}>Welcome to ImageQuiz React App!</h2>
        </Col></Row>
    );
}

export default Header;