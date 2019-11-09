import React from 'react'
import {Route} from 'react-router-dom'
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
                component = {NoteListMain}
            />
        ))}
        <Route path="/note/:noteId" component={NotePageMain} />
        </>
      )
  }
}

export default NoteList