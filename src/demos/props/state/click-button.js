import { useState } from "react";
function ClickButton() {
  //Array destructuring demo;
  //const animals = ["cat", "dog", "cow"];
  //const[animal1, animal2, animal3] =animals;
  //console.log(animal2);
  //console.log(animal1);

  // useState returns back an array that looks like: [currentvalue, setterfunction] = usestate(initial value);
  const [numClicks, setNumClicks] = useState(0);

  const onButtonClick = () => {
    setNumClicks(numClicks + 1);

    //dont mutate state variable directly;
    //numClicks += 1;
  };

  const clicksEmote = " 0_0 ".repeat(numClicks);
  //longer version

  //let text = '';
  //if(numClicks === 0) text = "you havent clicked yet, click this!";
  //else text = `you've clicked ${clicksEmote}`;
  //or
  const text =
    numClicks === 0
      ? "you havent clicked yet, click this!"
      : `you've clicked ${clicksEmote}`;

  const buttonStyle = {
    width: "5rem",
    minheight: "5rem",
    transform: `rotate(${numClicks * 35}deg)`,
    transition: "all o.25",
  };

  return (
    <button style={buttonStyle} onClick={onButtonClick}>
      {text}
    </button>
  );
}

export default ClickButton;
