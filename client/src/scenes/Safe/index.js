import React, {useState} from "react";
// import { Route, Link } from "react-router-dom";
import Row from "../../components/Row";
// import emailjs from '@emailjs/browser';
import "./style.css";

function Safe(props) {
  const safePuzzle = props.puzzle[0];
  // const userEmail = props.user.email;
  const Swal = require("sweetalert2");
  const [code, setCode] = useState([])

  // Initialize EmailJS (you'll need to replace 'YOUR_PUBLIC_KEY' with your actual public key)
  // You can get this from EmailJS dashboard
  // For now, we'll initialize it in the sendEmail function

  function pickNumber(event) {
    event.preventDefault();
    setCode([...code, event.target.value])
  };

  function enterCode(event) {
    event.preventDefault();
    if (code.join('') === safePuzzle.winCondition) {
      safeCracked();
    } else {
    setCode([])
      Swal.fire("Wrong code, try again!");
    }
  };

  function reset(event) {
    event.preventDefault();
    setCode([])
  };

  // function sendEmail() {
  //   // Replace 'YOUR_SERVICE_ID' with your actual EmailJS service ID
  //   const serviceId = 'service_vd49itr';
  //   // Replace 'YOUR_TEMPLATE_ID' with your actual EmailJS template ID
  //   const templateId = 'template_9hoxzbs';
  //   // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
  //   const publicKey = 'rl5GL9AWeBthjlURK';

  //   // Initialize EmailJS with your public key
  //   emailjs.init(publicKey);

  //   // Prepare template parameters
  //   const templateParams = {
  //     to_email: userEmail,
  //     // Add any other template parameters you need
  //   };

  function sendEmail() {
    // Just show the popup without sending email
    Swal.fire("Check your email");
  }

  function safeCracked() {
    props.handleSolvedPuzzle(safePuzzle.title);
    
    // Show popup with "Get Your Prize" button
    Swal.fire({
      title: "You escaped with the keys found in the safe!",
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: "Get Your Prize",
      confirmButtonColor: "#ffc107",
      allowOutsideClick: false,
      allowEscapeKey: false
    }).then((result) => {
      if (result.isConfirmed) {
        // Send email when button is clicked
        sendEmail();
      }
    });
  };

  return (
    <div
      className="safe"
      style={{
        position: "relative",
      }}
    >
      <div
        className="crack"
        style={{
          position: "absolute",
          right: "150px",
          bottom: "1015px"
        }}
      >
        Crack the safe with a 4 digit code.
      </div>
      {/* <div>
        <Route
          render={() =>
            safePuzzle.isSolved ? (
              <Link to="/scoreBoard" className="btn btn-warning next">
                You escaped! Now see how you stack up against other users!
              </Link>
            ) : (
              ""
            )
          }
        />
      </div> */}
      <div
        className="box"
        style={{
          position: "absolute",
          right: 0,
        }}
      >
        <div className="screen">{code}</div>
        <div className="numPad">
          <Row>
            <button className="num" onClick={pickNumber} value="1">
              1
            </button>
            <button className="num" onClick={pickNumber} value="2">
              2
            </button>
            <button className="num" onClick={pickNumber} value="3">
              3
            </button>
          </Row>
          <Row>
            <button className="num" onClick={pickNumber} value="4">
              4
            </button>
            <button className="num" onClick={pickNumber} value="5">
              5
            </button>
            <button className="num" onClick={pickNumber} value="6">
              6
            </button>
          </Row>
          <Row>
            <button className="num" onClick={pickNumber} value="7">
              7
            </button>
            <button className="num" onClick={pickNumber} value="8">
              8
            </button>
            <button className="num" onClick={pickNumber} value="9">
              9
            </button>
          </Row>
          <Row>
            <button className="enter" onClick={reset}>
              Reset
            </button>
            <button className="num" onClick={pickNumber} value="0">
              0
            </button>
            <button className="enter" onClick={enterCode} type="submit">
              Enter
            </button>
          </Row>
        </div>
        <div
          className="note"
          style={{
            position: "absolute",
            right: 0,
          }}
        >
          <div
            className="postIt"
            style={{
              position: "absolute",
              right: "-76px",
            }}
          >
            Dad's Safe
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safe;