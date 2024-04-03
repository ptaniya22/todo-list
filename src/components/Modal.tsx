import { useState, useContext,FC } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from '../context/context'
import { ITodo } from '../types';

interface IModalProps {
    isEdit: boolean;
    editNote: ITodo |  null
}

const Modal:FC<IModalProps> = ({  isEdit, editNote }) => {
    
    const { addOrChangeHandler, closeModalHandler } = useContext(TodoContext)
    
    const [title, setTitle] = useState(editNote?.title ?? '')
    const [text, setText] = useState(editNote?.text ?? '')
    

    
    const addOrChange = () => {
        if(title.length > 2 && text.length > 2) {
            const note: ITodo = {
                id: editNote?.id ?? uuidv4(),
                title: title,
                text: text,
                date: new Date().toLocaleDateString(),
                
            }
            addOrChangeHandler(note)
            closeModalHandler()
        }
       
    }


  return (
    <div className="modal" onClick={() => closeModalHandler()}>
        <div className="modal__block" onClick={(event) => event.stopPropagation()}>
            <h2 className="modal__block-title">
                { isEdit ? 'Изменить заметку' : 'Добавить заметку'}
            </h2>
            <div className="modal__block-inputs">
                <label>
                    <input 
                        type="text"  
                        placeholder='Title'
                        value={title}
                        onChange={(event) =>  setTitle(event.target.value)}
                    />
                    <span>Title</span>
                </label>
                <label>
                    <input 
                        type="text"  
                        placeholder='Content'
                        value={text}
                        onChange={(event) =>  setText(event.target.value)}
                    />
                    <span>Content</span>
                </label>
            </div>
            <div className="modal__block-btns">
                <button className="modal__block-btn red" onClick={() => closeModalHandler()}>Отмена</button>
                { !isEdit && <button className="modal__block-btn purple" onClick={() => addOrChange()}>Добавить</button>}
                { isEdit && <button className="modal__block-btn purple" onClick={() => addOrChange()}>Изменить</button>}
            </div>
        </div>
    </div>
  )
}

export default Modal