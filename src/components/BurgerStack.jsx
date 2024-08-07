// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
  return <ul>
    
    {/* // map through props.ingredients */}


    {props.borgir.map((Ingredient , index) => 
       (<li style={{ backgroundColor: Ingredient.color }} key={index}> {Ingredient.name} <button onClick={()=>{props.removeFromBurger(index)}}>-</button></li>) 
      
      )}
    </ul>;
};

export default BurgerStack;