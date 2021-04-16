//import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Figure from 'react-bootstrap/Figure';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Home(){
    let apiHost = "https://jarrettpage-imagequiz.herokuapp.com";
    const history = useHistory();
    const [flowers, setFlowers] = useState([]);


    let getFlowers = () => {
        return fetch(apiHost + '/flowers')
        .then(response => response.json());
    }

    function tableCreator() {
        return (
                <tbody>
                    {createRows()}
                </tbody>
        );
    }

    function createRows() {
        let size = flowers.length / 9;
        let rows = [];
        for (let i = 0; i < size; i++){
            rows.push(<tr>
                {mapFlowers(i)}
            </tr>)
        }
        return rows;
    }
    
    function mapFlowers(row) {
        let cells = [];
        for (let i = 0 + (row * 9); i < 9 + (row * 9); i++){
            cells.push(<td>
                <Figure>
                    <Figure.Image src={flowers[i].picture} width={200} height={200} onClick={() => quizLink(i)} />
                    <Figure.Caption>{flowers[i].name}</Figure.Caption>
                </Figure>
            </td>)
        }
        return cells;
    }

    function quizLink(imageIndex) {
        history.push({
            pathname: '/quiz',
            state: {flowerIndex: imageIndex}
        });
    }

    useEffect(() => {
        if(flowers.length === 0) {
            getFlowers()
            .then(x => setFlowers(x))
            .catch(e => console.log(e));
        }
    });

    return (
        <Row><Col>
            <h2>This is the Home Page.</h2>
            <Table responsive>
                {tableCreator()}
            </Table>
        </Col></Row>
    );
}

export default Home;