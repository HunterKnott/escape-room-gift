
import React from "react";
import Card from '../../components/Card';
import Row from '../../components/Row';
import Col from '../../components/Col';
import './style.css'

function Welcome (props) {
    
    return(
        <div className="background-login">
            <header className="welcome">
                Welcome to the Escape Room!
                <h2 className="login">{props.user ? props.user.email : "Enter Your Email to Begin"}</h2>
            </header>
            <div className="container">
                <Row>
                    <Col size="lg-4">
                        <p className="intro"> You're out with friends, and you're about to have one of the greatest summers ever!</p>
                        <br></br>
                        <br></br>
                        <p className="until">Until....</p>
                    </Col>
                    <Col size="lg-4">
                        <Card>
                            <form>
                                <div className="form-group">
                                    <div className="formTitle">Start Game</div>
                                    <div className="input-group mb-3">
                                        <input 
                                            onChange={props.handleInputChange} 
                                            name="email" 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="Email" 
                                            aria-label="Email"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        onClick={props.handleEmailSubmit}
                                        className="btn btn-warning"
                                    >
                                        Start Escape Room
                                    </button>
                                </div>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="animated-background">
                <div className="forest">
  
                    <div className="bird-container">
                        <div className="bird"></div>
                    </div>
  
                    <div className="sun"></div>
                    <div className="tree01"></div>
  	                <div className="tree02"></div>
  	                <div className="tree03"></div>
                    <div className="tree04"></div>
  
                    <div className="combi-container">
                        <div className="combi"></div>
                        <div className="wheelshadow"></div>
                        <div className="wheel wheel01" ></div>
                        <div className="wheel wheel02" ></div>
                    </div>
                    {/* <!-- combi-container end --> */}
                    
                </div>
                {/* <!-- forest end --> */}

                <div className="forest-background"></div>
                <div className="road"></div>
            </div>
        </div>
    );
}

export default Welcome
