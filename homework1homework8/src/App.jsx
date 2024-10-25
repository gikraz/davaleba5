// დავალება პირველი

// import React, { useState, useEffect } from "react";

// const HiddenWordGame = () => {
//   const hiddenWord = "secret"; 
//   const [typedWord, setTypedWord] = useState("");
//   const [isWordRevealed, setIsWordRevealed] = useState(false);

//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       setTypedWord((prev) => prev + event.key);

      
//       if ((typedWord + event.key).includes(hiddenWord)) {
//         setIsWordRevealed(true);
//       }
//     };

    
//     window.addEventListener("keypress", handleKeyPress);

    
//     return () => {
//       window.removeEventListener("keypress", handleKeyPress);
//     };
//   }, [typedWord]);

//   return (
//     <div>
//       <h1>Type to reveal the hidden word!</h1>
//       {isWordRevealed ? (
//         <p>The hidden word is: {hiddenWord}</p>
//       ) : (
//         <p>Keep typing... Typed so far: {typedWord}</p>
//       )}
//     </div>
//   );
// };

// export default HiddenWordGame;



// დავალება მეორე 



// import React, { useState, useEffect } from "react";

// const Timer = () => {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (isRunning) {
//       timer = setInterval(() => {
//         setTime((prevTime) => prevTime + 1);
//       }, 1000);
//     }
    
//     return () => clearInterval(timer);
//   }, [isRunning]);

//   const handleStartPause = () => {
//     setIsRunning(!isRunning);
//   };

//   const handleReset = () => {
//     setTime(0);
//     setIsRunning(false);
//   };

//   return (
//     <div>
//       <h1>Timer: {time} seconds</h1>
//       <button onClick={handleStartPause}>
//         {isRunning ? "Pause" : "Start"}
//       </button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

// export default Timer;




// მესამე დავალება


// import React, { useState, useEffect } from "react";

// const MouseCoordinates = () => {
//   const [coords, setCoords] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setCoords({ x: event.clientX, y: event.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

 
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Mouse Coordinates</h1>
//       <p>
//         X: {coords.x}, Y: {coords.y}
//       </p>
//     </div>
//   );
// };

// export default MouseCoordinates;






// დამატებითი


import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); 

  const handleClick = () => {
    setCount(count + 1); 
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default Counter;
