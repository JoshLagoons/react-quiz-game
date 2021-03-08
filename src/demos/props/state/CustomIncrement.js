import { useState } from "react";
function CustomIncrement() {
  const [value, setValue] = useState(0);
  const setIncrement = useState(1);
  const [incrementRate, setRate] = useState(1);

const onCurrentValueChange = (e) => setValue(e.target.value);
const onIncrementChange = (e) => setIncrement(e.target.value);
const onIncrementRateChange = (event) => {

const newRate = parseFloat(event.target.value);
setRate(newRate);
console.log(event.target.value);
};

const addButton = () => {
  //const adding = {value}
  const adding = {value}
  adding.rate = incrementRate;
  //Dont know how to add my value to my increment, tried a lot of ways.
  //for somereason my add button became my reset 
  console.log(adding);
 
}
const resetButton = () => {

 function YEP() {
   document.getElementById("haha").reset();
 }
  console.log(resetButton);
}

  return (
    <form id = "haha">
       <div>
      <div>
        <label htmlFor="value">The current value is:</label>
        <input 
        id="currentValue" 
        type="value" 
        value={value}
        onChange = {onCurrentValueChange}
        />
      </div>
      <div>
        <label htmlFor="increment">The current increment is:</label>
        <input 
        id="increment" 
        type="value" 
        value={incrementRate} 
        onChange = {onIncrementChange}
        /> 
      </div>
      <div>
        <label htmlFor="increment">Increment:</label>
        <input 
        id="incrementRate" 
        type="range" 
        min="0" 
        max="50" step="1" 
        value={incrementRate}
        onChange={onIncrementRateChange}
        />
      </div>
      <button onClick={addButton} id= "add">Add</button>
      <button type="reset" value="reset" onClick={resetButton}>Reset</button>
    
    </div>
    </form>
   
  );

}

/*
let addbtn = document.querySelector(`#add`);
let currentValue = document.querySelector(`#currentValue`)
addbtn.addEventListener(`click`, () => {

  currentValue.value = parseInt(currentValue.value) + 1;
});
*/
export default CustomIncrement;
