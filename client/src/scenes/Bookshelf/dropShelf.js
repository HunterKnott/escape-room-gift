import React from 'react';
import { DropTarget } from 'react-drag-drop-container';
// import API from "../../utils/API";


 class Shelf extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          message: '',
          droppedBooks: [], // Track which books have been dropped
          solved: false,
          hiddenElements: [] // Track hidden elements to reset them if needed
        };
    }

    // logic for dropping books on the shelf
    dropped = (e) => {
        // Get the book type from the dragData (using compatible syntax for older JS)
        const bookType = (e.dragData && e.dragData.bookType) || (e.dragData && e.dragData.name);
        
        const Swal = require("sweetalert2");

        // Hide the book immediately when dropped
        e.containerElem.style.visibility="hidden";
        
        // Add this book to the dropped books array
        const newDroppedBooks = [...this.state.droppedBooks, bookType];
        
        // Track this element in case we need to reset
        const newHiddenElements = [...this.state.hiddenElements, e.containerElem];
        
        // Only check validation when exactly 2 books are dropped
        if (newDroppedBooks.length === 2) {
            // Check if books are in the correct order: day first, then night
            if (newDroppedBooks[0] === 'day' && newDroppedBooks[1] === 'night') {
                // Puzzle solved!
                this.setState({ 
                    droppedBooks: newDroppedBooks,
                    hiddenElements: newHiddenElements
                });
                const puzzleTitle = this.props.puzzle[1].title;
                this.props.handleSolvedPuzzle(puzzleTitle);
                Swal.fire("Answer: Day and Night\nYou found a key in one of the books!")
            } else {
                // Wrong combination or wrong order - show error and reset
                Swal.fire("That's not right, try again.");
                // Reset the state
                this.setState({ 
                    droppedBooks: [],
                    hiddenElements: []
                });
                // Trigger parent reset to remount all books
                if (this.props.onReset) {
                    this.props.onReset();
                }
            }
        } else {
            // Less than 2 books, just track them
            this.setState({ 
                droppedBooks: newDroppedBooks,
                hiddenElements: newHiddenElements
            });
        }
    };

    render() {
        return (
        <DropTarget 
            onHit={this.dropped}
            targetKey={this.props.targetKey}
            dropData={{name: this.props.name}}    
        >

            <div className='bookshelfPuzzle'>
                {this.props.children}
                </div>
            
        </DropTarget>
        );
    }
}
export default Shelf;