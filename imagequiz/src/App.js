import { HashRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Quiz from './QuizPage';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  let onLoggedIn = (email) => {
      localStorage.setItem('username', email);
      setUsername(email);
  }

  let onLoggedOut = () => {
    setUsername('');
  }

  return (
    <HashRouter>
      <Container fluid>
        <Header />
        <NavigationBar username={username}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login">
            <Login onLoggedIn={onLoggedIn} />
          </Route>
          <Route path="/logout">
            <Logout onLoggedOut={onLoggedOut} />
          </Route>
          <Route path="/quiz" component={Quiz}/>
        </Switch>
        <Footer />
      </Container>
    </HashRouter>
  );
}

export default App;
