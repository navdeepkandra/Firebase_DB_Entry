import './App.css'
import {getDatabase, ref, set} from 'firebase/database';
import {app} from './firebase.js';

const db = getDatabase(app);

function App() {

  const connect = () => {
    set(ref(db, 'users/akhila'), {
      id: 2,
      name: 'Akhila',
      age: 23,
    });
  }

  return (
    <>
      <h1 className='text-center bg-red-200 text-2xl font-bold'>Firebase Project</h1>
      <button onClick={connect}>Connect</button>
    </>
  )
}

export default App
