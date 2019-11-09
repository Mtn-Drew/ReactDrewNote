import React from 'react';
import dummyStore from '../dummyStore';
import './App.css';
import Header from '../Header'
import FolderList from '../FolderList/FolderList'
import NoteList from '../NoteList/NoteList'

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      notes : [],
      folders : []
    }
  }

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummyStore), 600);
}


  render() {

    return(
      <div className="App">
        <nav className="App__nav"><FolderList 
          notes = {this.state.notes} 
          folders = {this.state.folders}
          /></nav>
        <Header />
        <main className="App__main"><NoteList 
          notes = {this.state.notes} 
          folders = {this.state.folders}
          /></main>
      </div>
    )
  }
}

export default App