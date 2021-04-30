import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebaritem';

class SidebarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null
        }
    }

    // New Note Button Click - Toggle Adding Note
    newNoteBtnClick = () => {
        this.setState({ title: null, addingNote: !this.state.addingNote });
    }

    // Update Title of the Note
    updateTitle = (txt) => {
        this.setState({ title: txt});
    }

    // onSubmit - State of the New Note
    newNote = () => {
        this.props.newNote(this.state.title);
        this.setState({ title: null, addingNote: false });
    }

    // Select Note
    selectNote = (n, i) => {
        this.props.selectNote(n, i);
    }

    // Delete Note
    deleteNote = (note) => {
        this.props.deleteNote(note);
    }

    render() {

        const { notes, classes, selectedNoteIndex } = this.props;
        
        if (notes){
            return (
                <div className={ classes.sidebarContainer }>
                    <Button
                    onClick={ this.newNoteBtnClick}
                    className={ classes.newNoteBtn }>{ this.state.addingNote ? 'Cancel' : 'New Note'}</Button>
    
                    {/* Dynamic Content of the Sidebar - New Note Creation */}
                    {
                        this.state.addingNote ? 
                        <div>
                            <input 
                            type="text" 
                            className={ classes.newNoteInput }
                            placeholder="Enter Note Title"
                            onKeyUp={(e) => this.updateTitle(e.target.value)}></input>
                            <Button 
                            className={ classes.newNoteSubmitBtn }
                            onClick={ this.newNote }>Submit Note</Button>
                        </div> : 
                        null
                    }
    
                    {/* Mapping all the existing notes */}
                    <List>
                        {
                            notes.map((_note, _index) => {
                                return (
                                    <div key={_index}>
                                        <SidebarItemComponent 
                                            _note={_note} 
                                            _index={_index}
                                            selectedNoteIndex={selectedNoteIndex}
                                            selectNote={this.selectNote}
                                            deleteNote={this.deleteNote}>
                                        </SidebarItemComponent>
                                        <Divider></Divider>
                                    </div>
                                )
                            })
                        }
                    </List>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
        
    }
}

export default withStyles(styles)(SidebarComponent);