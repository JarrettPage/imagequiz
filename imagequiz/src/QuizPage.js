import quizzes from './quizzes/data';
//import {flowerName} from './components/Home';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';
//import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Quiz(props){
    const history = useHistory();
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [displayScore, setDisplayScore] = useState(false);
	const [score, setScore] = useState(0);
    //let flowerNum = props.location.state.flowerIndex;
    if(localStorage.getItem( 'Index' ) != -1){
        var flowerNum = localStorage.getItem( 'Index' );
    }
    else{
        var flowerNum = props.location.state.flowerIndex;
    }
    
    function onOptionClick(answer) {
		if (answer == quizzes[flowerNum][currentQuestion].answer) {
			setScore(score + 1);
		}

		const next = currentQuestion + 1;
		if (next < 6) {
			setCurrentQuestion(next);
		} else {
			setDisplayScore(true);
		}
	};

    function multipleChoice() {
        let options = [];
        for(let i = 0; i < quizzes[flowerNum][currentQuestion].choices.length; i++){
            options.push(
                <button onClick={() => onOptionClick(quizzes[flowerNum][currentQuestion].choices[i])}>
                    {quizzes[flowerNum][currentQuestion].choices[i]}
                </button>
            )
        }
        return options;
    }

    function restart(imageIndex) {
        localStorage.setItem( 'Index', imageIndex);
        window.location.reload();
    }

    function backToHome() {
        localStorage.setItem( 'Index', -1);
        history.push('/');
    }

    return (
        <Row><Col>
            <h2>Flower Quiz</h2>
            <div class="imageQuiz">
			{displayScore ? (
				<div class="results">
					Your Score: {score} / 6
                    <div class="again">
                        <button onClick={() => backToHome()}>
                            Different Quiz
                        </button>
                        <button onClick={() => restart(flowerNum)}>
                            Retry
                        </button>
                    </div>
				</div>
			) : (
				<>
					<div class="questions">
						<div class="image">
							<Image src={quizzes[flowerNum][currentQuestion].picture} fluid />
						</div>
					</div>
					<div class="choices">
						{multipleChoice()}
					</div>
				</>
			)}
		</div>
        </Col></Row>
        /*
        <Row><Col>
            <h2>Flower Quiz</h2>

            <CardGroup>
            <Card>
                <Row><Col>
                    <Card.Img variant="top" src={quizzes[flowerNum][0].picture} style={styles.cardImage} />
                </Col>
                <Col>
                    <Card.Body>
                    <Card.Title>Please select the correct answer.</Card.Title>
                    <Button variant="outline-secondary" block>{quizzes[flowerNum][0].choices[0]}</Button>
                    <Button variant="outline-secondary" block>{quizzes[flowerNum][0].choices[1]}</Button>
                    <Button variant="outline-secondary" block>{quizzes[flowerNum][0].choices[2]}</Button>
                    </Card.Body>
                </Col>
                </Row>
            </Card>
            </CardGroup>
        </Col></Row>
        */
    );
}
export default Quiz;