import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Notes from './Components/Notes'
import CreateArea from './Components/CreateArea'

function App() {
  const [notes , setNotes] = useState([])
  function addNote(note) {
    setNotes(prevNotes=>(
      [...prevNotes , note]
    ))
  }
  function deleteNode(id) {
    setNotes((prevNotes)=>{
      return prevNotes.filter((noteItem , index)=>{
        return id !== index
      })
    })
  }
  return (
    <>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />

      {notes.map((noteItem , index)=>{
        return <Notes 
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNode}
        />
      })}
      <Footer />
    </>
  )
}

export default App
