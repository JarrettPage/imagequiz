import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Image from 'react-bootstrap/Image';
//import flowers from './data';
import firstRow from './TopRow';
import secondRow from './SecondRow';
import thirdRow from './SplitArray';
//import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
//import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';
import Figure from 'react-bootstrap/Figure';
//import FigureImage from 'react-bootstrap/FigureImage';
//import FigureCaption from 'react-bootstrap/FigureCaption';

function Home(){
    return (
        <Row><Col>
            <h2>This is the Home Page.</h2>
            <Table responsive>
                {tableCreator()}
            </Table>
        </Col></Row>
    );
}

function tableCreator() {
    return (
            <tbody>
                <tr>
                    {firstImages()}
                </tr>
                <tr>
                    {secondImages()}
                </tr>
                <tr>
                    {thirdImages()}
                </tr>
            </tbody>
    );
}

function firstImages() {
    return firstRow.map(data => (
        <td>
            <Figure>
                <Figure.Image src={data.picture} width={200} height={200} />
                <Figure.Caption>{data.name}</Figure.Caption>
            </Figure>
        </td>
    ));
}

function secondImages() {
    return secondRow.map(data => (
        <td>
            <Figure>
                <Figure.Image src={data.picture} width={200} height={200} />
                <Figure.Caption>{data.name}</Figure.Caption>
            </Figure>
        </td>
    ));
}

function thirdImages() {
    return thirdRow.map(data => (
        <td>
            <Figure>
                <Figure.Image src={data.picture} width={200} height={200} />
                <Figure.Caption>{data.name}</Figure.Caption>
            </Figure>
        </td>
    ));
}

/*
function displayImages() {
    return flowers.map(data => (
        <Card>
            <Card.Img variant="top" src={data.picture} />
            <Card.Body>
                <Card.Text>{data.name}</Card.Text>
            </Card.Body>
        </Card>
    ));
}
*/

export default Home;