// src/components/IngredientList.jsx
const IngredientList = (props) => {
  return (
    <ul>
      {/* // map through props.ingredients */}

      {props.Ingredients.map((Ingredient) => 
       (<li style={{ backgroundColor: Ingredient.color }}> {Ingredient.name} <button onClick={()=>{props.addToBurger(Ingredient)}}>+</button></li>) 
      )}
    </ul>
  );
};

export default IngredientList;
