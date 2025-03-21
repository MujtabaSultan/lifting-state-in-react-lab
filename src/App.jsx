// src/App.jsx
import {useState} from "react"
import './App.css';

import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {

const addToBurger =(item)=>{
setBorgir([...borgir,item])

}

const removeFromBurger =(indx)=>{
const newBorgir=[...borgir]
  newBorgir.splice(indx,1)
  setBorgir(newBorgir)
 
  }

const [borgir, setBorgir] = useState([]);

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>

        <IngredientList Ingredients={availableIngredients} addToBurger={addToBurger}/>
        <BurgerStack borgir={borgir} removeFromBurger={removeFromBurger}/>
      {/* List & Stack components */}
      </section>
    </main>
  );
};

export default App;