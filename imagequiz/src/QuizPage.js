//import quizzes from './quizzes/data';
//import {flowerName} from './components/Home';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Quiz(props){
    let apiHost = "https://jarrettpage-imagequiz.herokuapp.com";

    const history = useHistory();
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [displayScore, setDisplayScore] = useState(false);
    const [flowerNum, setFlowerNum] = useState(-1);
	const [score, setScore] = useState(0);
    const [quiz, setQuiz] = useState([]);
    //const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    
    /*
    let getQuizzes = () => {
        return fetch(apiHost + '/quizzes')
        .then(response => response.json());
    }
    */
    let getQuiz = (quizNum) => {
        let num = quizNum.toString();
        return fetch(apiHost + '/quiz/' + num)
        .then(response => response.json());
    }
    
    let addScore = (points) => {
        return fetch(apiHost + '/score', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(points)
        });
    }
/*
    let userNameChanged = (event) => {
        setUserName(event.target.value);
    }
*/
    let submit = (event) => {
        let username = localStorage.getItem('username');
        let userScore = {score: score, quizId: flowerNum, username: username};
        addScore(userScore)
        .then(() => {
            setMessage('User score was added successfully.');
        })
        .catch(e => setMessage('Score was unable to be added.'));
        event.preventDefault();
    }

    function onOptionClick(answer) {
		if (answer === quiz[currentQuestion].answer) {
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
        for(let i = 0; i < quiz[currentQuestion].choices.length; i++){
            options.push(
                <button onClick={() => onOptionClick(quiz[currentQuestion].choices[i])}>
                    {quiz[currentQuestion].choices[i]}
                </button>
            )
        }
        return options;
    }

    function restart() {
        setCurrentQuestion(0);
        setScore(0);
        setDisplayScore(false);
    }

    function backToHome() {
        history.push('/');
    }

    useEffect(() => {
        if(quiz.length === 0) {
            setFlowerNum(props.location.state.flowerIndex);
            getQuiz(flowerNum)
            .then(x => {setQuiz(x); console.log(x)})
            .catch(e => console.log(e));
        }
    });

    return (
        <Row><Col>
            <h2>Flower Quiz</h2>
            <div class="imageQuiz">
			{displayScore ? (
				<div class="results">
                    <Form onSubmit={submit}>
                        <Form.Label>
					    Your score was {score} / 6.
                        </Form.Label>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                        <div class="again">
                            <button onClick={() => backToHome()}>
                                Different Quiz
                            </button>
                            <button onClick={() => restart()}>
                                Retry
                            </button>
                        </div>
				</div>
			) : (
                <>
                {(quiz.length === 0) ? ('') :
                <>
					<div class="questions">
						<div class="image">
							<Image src={quiz[currentQuestion].picture} fluid />
						</div>
					</div>
					<div class="choices">
						{multipleChoice()}
					</div>
				</>
                }
                </>
            )}
		</div>
        </Col></Row>
    );
}
export default Quiz;