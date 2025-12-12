import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import React, { useState }from 'react';
// import API from "./utils/API";
import Welcome from './scenes/Welcome'
import Office from './scenes/Office'
import Bookshelf from './scenes/Bookshelf'
import Painting from './scenes/Painting'
import Desk from './scenes/Desk'
import Safe from './scenes/Safe'
import ScoreBoard from './scenes/ScoreBoard'
import Navbar from './components/Navbar'
import StartPage from "./scenes/StartPage";
import "./App.css";

// entry point for application
function App() {
    // const storedJwt = localStorage.getItem('token');
    // const [jwt, setJwt] = useState(storedJwt || null);
    const [formObject, setFormObject] = useState({})
    // const [user, setUser] = useState()
    const [user, setUser] = useState(null)
    // const [puzzles, setPuzzles] = useState()
    // const puzzleSeed = [
    const [puzzles, setPuzzles] = useState([
      {
        title: "Safe",
        description: "Enter a 4 digit code to crack the safe and win the game.",
        winCondition: '1219',
        isSolved: false
      },
      {
        title: "Bookshelf",
        description: "Solve the riddle then select the books that correspond to the answer.",
        winCondition: "day and night",
        isSolved: false
      },
      {
        title: "Painting",
        description: "Complete the puzzle to put the painting back together",
        winCondition: "solved puzzle",
        isSolved: false
      }
    ]);


    // useEffect(() => {
    //     jwt && API.validateUser(jwt)
    //     .then(res => {
    //       setUser({
    //         username: res.data.username, 
    //         id: res.data._id,
    //       })
    //       setPuzzles(res.data.puzzles)
    //     })
    // }, [jwt])

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleSolvedPuzzle(puzzleName) {
      const puzzleToUpdate = [...puzzles]
      const puzzleIndex = puzzleToUpdate.findIndex(p => p.title === puzzleName);
      if (puzzleIndex !== -1) {
        puzzleToUpdate[puzzleIndex].isSolved = true
        setPuzzles(puzzleToUpdate)
      }
    }

    // Replace signup/login with simple email submit
    function handleEmailSubmit(event) {
      event.preventDefault();
      if (formObject.email) {
        setUser({
          email: formObject.email,
          id: 'local-user'
        });
      }
  };

  function logout(event) {
    event.preventDefault();
    setUser(null);
    localStorage.removeItem('token');
  }


  return (
    <Router>
      <Navbar logout={logout} user={user} />
        <Switch>
          <Route exact path="/" render={(props) => user ? (<StartPage {...props} user={user} puzzle={puzzles} />) : (
            <Welcome {...props} user={user} 
            handleInputChange={handleInputChange} 
            handleEmailSubmit={handleEmailSubmit}
            />)} 
          />
          <Route exact path="/startPage" render={(props) => (
            user ? (<StartPage {...props} user={user} puzzle={puzzles} />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/office" render={(props) => (
            user ? (<Office {...props} user={user} puzzle={puzzles} />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/bookshelf" render={(props) => (
            user ? (<Bookshelf {...props} user={user} handleSolvedPuzzle={handleSolvedPuzzle} puzzle={puzzles} />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/painting" render={(props) => (
            user ? (<Painting {...props} user={user} handleSolvedPuzzle={handleSolvedPuzzle} puzzle={puzzles} />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/desk" render={(props) => (
            user ? (<Desk {...props} user={user} puzzle={puzzles} />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/safe" render={(props) => (
            user ? (<Safe {...props} user={user} handleSolvedPuzzle={handleSolvedPuzzle} puzzle={puzzles} />) : (<Redirect to="/" />)
          )}>
          </Route>
          <Route exact path="/scoreBoard" component={ScoreBoard} />  
        </Switch>
    </Router>
  );
}

export default App;
