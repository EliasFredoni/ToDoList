import { useState } from "react";
import './App.css'

function App() {

const [item, setItem] = useState('');
const [items, setItems] = useState([]);

function addItem() {
  const newItem = {
    id: Math.floor(Math.random() * 1000), 
    value: item 
  };

  setItems(oldList => [...oldList, newItem]);
  setItem('');
  console.log(items)
}

function deleteItem(id){
  const newArray = items.filter(items => items.id !== id);
  setItems(newArray);
    };

  return (
    <div className="App">

    <h1>ToDo</h1>

    <input
    type='text'
    placeholder='Füge ToDo hinzu'
    value={item}
    onChange={element => setItem(element.target.value)}
    />
   
    <button class='add-button' onClick={() => addItem()}>+</button>
    
    <ul>
      {items.map(newItem => {
        return(
          <li key={newItem.id}>{newItem.value}
          <button class='delete-button' onClick={() => deleteItem(newItem.id)}>X</button>
          </li>
        )
      })}
    </ul>

    </div>
  );
}

export default App;
