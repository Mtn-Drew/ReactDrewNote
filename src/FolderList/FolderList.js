import React from 'react'
import NoteListNav from '../NoteListNav/NoteListNav'
import NotePageNav from '../NotePageNav/NotePageNav'
import {Route} from 'react-router-dom'

class FolderList extends React.Component {
  render() {
    return (
      <div>
        {['/', '/folder/:folderID'].map(path => (
          <Route 
            exact 
            key={path}
            path={path}
            component={NoteListNav}
          />
        ))}
        <Route path="/note/:noteId" component={NotePageNav} />
        <Route path="/add-folder" component={NotePageNav} />
        <Route path="/add-note" component={NotePageNav} />
      </div>
    )
  }
}

export default FolderList