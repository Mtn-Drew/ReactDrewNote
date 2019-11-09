import React from 'react'
import NoteListNav from '../NoteListNav/NoteListNav'
import NotePageNav from '../NotePageNav/NotePageNav'
import {Route} from 'react-router-dom'
import {findNote, findFolder} from '../notes-helpers'

class FolderList extends React.Component {
  render() {
    return (
      <div>
        {['/', '/folder/:folderID'].map(path => (
          <Route 
            exact 
            key={path}
            path={path}
            render={routeProps => (
              <NoteListNav
                folders={this.props.folders}
                notes={this.props.notes}
                {...routeProps}
                />
            )}
          />
        ))}


        <Route 
          path="/note/:noteID"
          render={routeProps =>{
            const {noteId} = routeProps.match.params
            const note = findNote(this.props.notes, noteId) || {}
            const folder = findFolder(this.props.folders, note.folderId)
            return <NotePageNav {...routeProps} folder={folder} />
          }}
          />
        <Route path="/add-folder" component={NotePageNav} />
        <Route path="/add-note" component={NotePageNav} />
      </div>
    )
  }
}

export default FolderList