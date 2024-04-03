import { useState, useEffect } from 'react'
import './assets/styles/main.scss'
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import editIcon from './assets/images/edit.svg'
import Modal from './components/Modal'
import { TodoContext } from './context/context'
import { ITodo } from './types'

function App() {


  
  const setLS = () => localStorage.notes = JSON.stringify(notes)
  const getLS = (): ITodo[] => localStorage.notes ? JSON.parse(localStorage.notes) : []
  
  const [isModalOpen, setModalOpen] = useState(false)
  const [notes, setNotes] = useState<ITodo[]>(getLS)
  const [isEdit, setEdit] = useState(false)
  const [editNote, setEditNote] = useState<ITodo | null>(null)
  const [searchValue, setSearchValue] = useState('')
  

  const filteredNotes = notes.filter((note: ITodo) => note.title.toLowerCase().includes(searchValue.toLowerCase()))
  


  useEffect(() => {
 
    
    setLS()
  }, [notes])
  
  const setSearchingHandler = (val: string) => {
    setSearchValue(val)
  }
  
  const openModalHandler = () => {
    setModalOpen(true)
    setEdit(false)
    setEditNote(null)
  }
  
  const closeModalHandler = () => {
    setModalOpen(false)
  }
  
  const addOrChangeHandler = (note: ITodo) => {
    if(editNote?.id) {
        notes.forEach((item,i) => {
          if(item.id == note.id) {
            notes.splice(i, 1, note)
          }
        })
        setLS()
    }else {
      setNotes([...notes, note])
    }
   
  }
  
  const deleteNoteHandler = (id: string) => {
    setNotes(notes.filter(item => item.id != id))
  }
  
  const changeHandler = (note: ITodo) => {
    setEditNote(note)
    setEdit(true)
    setModalOpen(true)
  }
  
  

  return (
    <TodoContext.Provider value={{
      setSearchingHandler,
      deleteNoteHandler,
      changeHandler,
      addOrChangeHandler,
      closeModalHandler,
    }}>
      
      <div className="wrapper">
        <Navbar/>
        <Notes 
          notes={filteredNotes}
        />
        {isModalOpen && 
          <Modal
            editNote={editNote}
            isEdit={isEdit}
          />
        }
        { !isModalOpen && <button className="add" onClick={() => openModalHandler()}>
            <img src={editIcon} alt="" />
        </button>  }
      </div>
    </TodoContext.Provider>
   
  )
}

export default App
