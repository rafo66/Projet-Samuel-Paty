import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Game  from "./Game1";

const BUTTON_WIDTH = 100;
const BUTTON_HEIGHT = 50;

const CANVAS_WIDTH = 800/0.8;
const CANVAS_HEIGHT = 600/0.8;

  const textFont = "20px Arial"
const textFontColor = "rgb(255, 255, 255)"

  let selectedGame = false;

  const GamesMenu = () => {

    const canvasRef1 = useRef(null);
    const canvasRef2 = useRef(null);
    const [startGame, setStartGame] = useState(false);
  
    const handleStartGame = () => {
      setStartGame(true);
    };
  
    useEffect(() => {
      const canvas1 = canvasRef1.current;
      const context1 = canvas1.getContext('2d');
  
      // drax a rectangle
      context1.fillStyle = "rgb(250, 255, 0)";
      context1.fillRect(0, 0, 20, 30);

      // draw a text
      context1.font = textFont;
      context1.fillStyle = textFontColor;
      context1.fillText("Choisissez un jeu :", 20, 30);

      
    }, []);
  
    return (
      <div style={{ position: 'relative' }}>

        


        <canvas
          ref={canvasRef2}
          width={0}
          height={0}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />

        {startGame ? (
          <Game canvasRef={canvasRef2} startGame={startGame} />
        ) : (

          <>

        <canvas
          ref={canvasRef1}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          style={{backgroundColor: 'rgb(0, 0, 0)'}}
        />
          <button
            onClick={handleStartGame}
            style={{
              position: 'absolute',
              top: (CANVAS_HEIGHT - BUTTON_HEIGHT) / 2,
              left: (CANVAS_WIDTH - BUTTON_WIDTH) / 2,
              zIndex: 1,
              cursor: 'pointer',
            }}
          >
            Start Game
          </button>          
          </>
        )}
      </div>
    );
  };
  
  export default GamesMenu;