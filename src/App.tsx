import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { reducerType } from './reducers/index';
import { addNote, delNote } from './actions';

export default function App() {
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  const [inp, setInp] = useState<string>("");
  return (
    <div className="App">
      <div>
        <input type="text" value={inp} onChange={(e) => {
          setInp(e.target.value);
        }} />
        <button onClick={() => {
          dispatch(addNote(inp));
          setInp("");
        }}>Add</button>
      </div>
      <div className="notes">
        {
          notes.length === 0 ? 
          (<h2>Add Some Notes</h2>) : 
          (<ul>
            {
              notes.map((ele: string, index: number) => (
                <li key={index}>
                  <h3>{ele}</h3>
                  <button className="del_btn" onClick={() => {
                    dispatch(delNote(index))
                  }}>Delete</button>
                </li>
              ))
            }
          </ul>)
        }
      </div>
    </div>
  );
}