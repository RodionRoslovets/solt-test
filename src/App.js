import { useReducer, useEffect } from 'react'
import people from './data'
import Main from './components/main/main'
import reducer from './reducer'
import {InView} from 'react-intersection-observer'

function App() {
  let [newPeople, dispatch] = useReducer(reducer)

  useEffect(()=>{
    dispatch({type:'INIT', payload:people})
  }, [])

  return (
    <div>
    { newPeople ? 
      <>
        <Main people={newPeople}/>
        <InView onChange={(inView)=>inView ? dispatch({type:'LOADMORE', payload:people}) : null}></InView>
      </>  
        : null }
    
   </div>
  );
}

export default App;
