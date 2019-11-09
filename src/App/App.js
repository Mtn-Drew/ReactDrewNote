import React from 'react';
import './App.css';
import Header from '../Header'
import FolderList from '../FolderList/FolderList'
import NoteList from '../NoteList/NoteList'
import ApiContext from '../ApiContext'
import config from '../config'

class App extends React.Component {
  
    state = {
      notes : [],
      folders : []
    }
  
  
  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
      .then(([notesResponse, foldersResponse]) => {
        if (!notesResponse.ok) return notesResponse.json()
        .then(e => Promise.reject(e))
        if (!foldersResponse.ok) return foldersResponse.json().then(e=>Promise.reject(e))
        return Promise.all([notesResponse.json(), foldersResponse.json()])
      })
      .then(([notes, folders]) => {
        this.setState({notes, folders})
      })
      .catch(error => {
        console.error({error})
      })
  }

  handleDeleteNote = (noteId) => {
    this.setState = ({
      notes : this.state.notes.filter(note => note.id !== noteId)
    })
  }

  render() {

    const value = {
      notes : this.state.notes,
      folders : this.state.folders,
      deleteNote : this.state.handleDeleteNote
    }

    return(
      <ApiContext.Provider value={value}>
        <div className="App">
          <nav className="App__nav"><FolderList /></nav>
          <Header />
          <main className="App__main"><NoteList /></main>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App