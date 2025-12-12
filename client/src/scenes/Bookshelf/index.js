import React from 'react'
import { DragDropContainer } from 'react-drag-drop-container';
import Draggable from 'react-draggable';
import  Shelf  from './dropShelf'

export default class BookShelf extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      resetKey: 0 // Key to force remount on reset
    };
  }

  handleReset = () => {
    // Increment key to force remount of all books
    this.setState({ resetKey: this.state.resetKey + 1 });
  }

  render() {
    const resetKey = this.state.resetKey;

// Books at top of shelf along with draggable and drop containers with two books having matching keys to the shelf "Day and Night"
return (
  <div className="books" style={{
    display: "flex", flexDirection: "column", alignItems: "center",
    margin: "15px"
  }}>
    <h1 style={{ fontSize: "30px", margin: "15px", color:"white" }}>What breaks yet never falls, and what falls yet never breaks?</h1>
    <h3 style={{ margin: "15px", color:"white" }}>Two books display images corresponding to the riddle's answer.  Drag them both onto the bookshelf to solve this puzzle.</h3>
    <div className="droppableBooks" style={{ display: "flex" }} key={resetKey}>

{/* Red book - incorrect */}
<DragDropContainer key={`red-${resetKey}`} targetKey="DayAndNight" dragData={{bookType: "red"}}>
<Draggable
  axis="both"
  handle=".handle"
  defaultPosition={{x: 0, y: 0}}
  position={null}
  scale={1}
  onStart={this.handleStart}
  onDrag={this.handleDrag}
  onStop={this.handleStop}>
  <div>
    <img className="handle" src={require('./images/redBookSmall.png')} alt="Book with triangle symbol"></img>
  </div>
</Draggable>
</DragDropContainer>

{/* Blue book - incorrect */}
<DragDropContainer key={`blue-${resetKey}`} targetKey="DayAndNight" dragData={{bookType: "blue"}}>
<Draggable
  axis="both"
  handle=".handle"
  defaultPosition={{x: 0, y: 0}}
  position={null}
  scale={1}
  onStart={this.handleStart}
  onDrag={this.handleDrag}
  onStop={this.handleStop}
  >
  <div>
    <img className="handle" src={require('./images/blueBookSmall.png')} alt="Blue book with wave symbol"></img>
  </div>
</Draggable>
</DragDropContainer>

{/* Day book - CORRECT */}
<DragDropContainer key={`day-${resetKey}`} targetKey="DayAndNight" dragData={{bookType: "day"}}>
<Draggable
  axis="both"
  handle=".handle"
  defaultPosition={{x: 0, y: 0}}
  position={null}
  scale={1}
  onStart={this.handleStart}
  onDrag={this.handleDrag}
  onStop={this.handleStop}>
    <div>
    <img className="handle" src={require('./images/dayBookSmall.png')} alt="Book with day symbol"></img>
    </div>
</Draggable>
</DragDropContainer>

{/* Green book - incorrect */}
<DragDropContainer key={`green-${resetKey}`} targetKey="DayAndNight" dragData={{bookType: "green"}}>
<Draggable
  axis="both"
  handle=".handle"
  defaultPosition={{x: 0, y: 0}}
  position={null}
  scale={1}
  onStart={this.handleStart}
  onDrag={this.handleDrag}
  onStop={this.handleStop}>
  <div>
    <img className="handle" src={require('./images/greenBookSmall.png')} alt="Book with triangle symbol"></img>
  </div>
</Draggable>
</DragDropContainer>

{/* Pink book - incorrect */}
<DragDropContainer key={`pink-${resetKey}`} targetKey="DayAndNight" dragData={{bookType: "pink"}}>
<Draggable
  axis="both"
  handle=".handle"
  defaultPosition={{x: 0, y: 0}}
  position={null}
  scale={1}
  onStart={this.handleStart}
  onDrag={this.handleDrag}
  onStop={this.handleStop}>
  <div>
    <img className="handle" src={require('./images/pinkBookSmall.png')} alt="Book with triangle symbol"></img>
  </div>
</Draggable>
</DragDropContainer>

{/* Night book - CORRECT */}
<DragDropContainer key={`night-${resetKey}`} targetKey="DayAndNight" dragData={{bookType: "night"}}>
<Draggable
  axis="both"
  handle=".handle"
  defaultPosition={{x: 0, y: 0}}
  position={null}
  scale={1}
  onStart={this.handleStart}
  onDrag={this.handleDrag}
  onStop={this.handleStop}>
  <div>
    <img className="handle" src={require('./images/nightBookSmall.png')} alt="Book with night symbol"></img>
  </div>
</Draggable>
</DragDropContainer>

{/* Brown book - incorrect */}
<DragDropContainer key={`brown-${resetKey}`} targetKey="DayAndNight" dragData={{bookType: "brown"}}>
<Draggable
  axis="both"
  handle=".handle"
  defaultPosition={{x: 0, y: 0}}
  position={null}
  scale={1}
  onStart={this.handleStart}
  onDrag={this.handleDrag}
  onStop={this.handleStop}>
  <div>
    <img className="handle" src={require('./images/brownBookSmall.png')} alt="Book with triangle symbol"></img>
  </div>
</Draggable>
</DragDropContainer>

{/* Gray book - incorrect */}
<DragDropContainer key={`gray-${resetKey}`} targetKey="DayAndNight" dragData={{bookType: "gray"}}>
<Draggable
  axis="both"
  handle=".handle"
  defaultPosition={{x: 0, y: 0}}
  position={null}
  scale={1}
  onStart={this.handleStart}
  onDrag={this.handleDrag}
  onStop={this.handleStop}>
  <div>
    <img className="handle" src={require('./images/grayBookSmall.png')} alt="Book with triangle symbol"></img>
  </div>
</Draggable>
</DragDropContainer>
</div>

<Shelf targetKey="DayAndNight" 
    onHit={this.dropped}
    onDragEnter={this.highlight}
    onDragLeave={this.unHighlight}
    onReset={this.handleReset}
    {...this.props}
    >
      <img className="handle" src={require('./images/bookshelf.jpg')} alt="Book with night symbol"></img>
        </Shelf>
        </div>

)
}
}