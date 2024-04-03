import { useState, useEffect, useRef, useContext, FC }  from 'react'
import searchIcon from '../assets/images/search.svg'
import backIcon from '../assets/images/back.svg'
import closeIcon from '../assets/images/close.svg'
import { TodoContext } from '../context/context'


const Navbar: FC = () => {
  
  const { setSearchingHandler } = useContext(TodoContext)
  
  const [search, setSearch] = useState('')
  const [nav, setNav] = useState(true)
  const isMounted = useRef(false)
  
  
  useEffect(() => {
    if(isMounted.current) {
      setSearchingHandler(search)
    }
    isMounted.current = true
   
  },[search])
  
  const reset = () => {
    setNav(true)
    setSearch('')
  }
  
  return (
    <header className="header">
        {nav ?  ( <nav className="header__nav">
            <button className="header__nav-lang">Ru</button>
            <h1  className="header__nav-title">Заметки</h1>
            <button className="header__nav-search" onClick={() => setNav(false)}>
                <img src={searchIcon} alt="" /> 
            </button>
        </nav>)  : (
          <nav className="header__search">
          <button className="header__search-back" onClick={() => reset()}>
            <img src={backIcon} alt="" />
          </button>
          <input 
            type="text" 
            className="header__search-input"
            placeholder='Поиск...'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className="header__search-clear" onClick={() => setSearch('')}>
            <img src={closeIcon} alt="" />
          </button>
        </nav>
        )}
       
        
    </header>
  )
}

export default Navbar