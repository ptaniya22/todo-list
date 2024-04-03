import { createContext } from "react";
import { ITodo } from "../types";

interface ITodoContext {
    setSearchingHandler: (val: string) => void
    deleteNoteHandler: (id: string) => void
    changeHandler: (note: ITodo) => void
    addOrChangeHandler: (note: ITodo) => void
    closeModalHandler: () => void
}


export const TodoContext = createContext({} as ITodoContext)

