import React from 'react'
import {Route} from 'react-router-dom'
import {getNotesForFolder, findNote} from '../notes-helpers'
import NoteListMain from '../NoteListMain/NoteListMain'
import NotePageMain from '../NotePageMain/NotePageMain'

  class NoteList extends React.Component {
    render() {
      return (
        <>
        {['/', '/folder/:folderId'].map(path => (
            <Route
                exact
                key={path}
                path={path}
                render={routeProps => {
                    const {folderId} = routeProps.match.params;
                    const notesForFolder = getNotesForFolder(
                        this.props.notes,
                        folderId
                    );
                    return (
                        <NoteListMain
                            {...routeProps}
                            notes={notesForFolder}
                        />
                    );
                }}
            />
        ))}
        <Route
            path="/note/:noteId"
            render={routeProps => {
                const {noteId} = routeProps.match.params;
                const note = findNote(this.props.notes, noteId);
                return <NotePageMain {...routeProps} note={note} />;
            }}
        />
    </>
);
}}

export default NoteList