import React, { useRef, useEffect } from "react";

let  blocks = [  
  [{ text: "France", selection:0 }, { text: "France" , selection:0}],
  [{ text: "Japon", selection:0 }, { text: "France", selection:0 }, { text: "France", selection:0 }, { text: "France", selection:0 }, { text: "France", selection:0 }, { text: "France", selection:0 }]
];

const CANVAS_WIDTH = 800/0.8;
const CANVAS_HEIGHT = 600/0.8;

const colX = [(CANVAS_WIDTH / 800) * 50, (CANVAS_WIDTH / 800) * 600];


const colYSpacingPrecet = [
  (CANVAS_HEIGHT / 600) * 250,  // 2
  (CANVAS_HEIGHT / 600) * 200, // 3
  (CANVAS_HEIGHT / 600) * 150, // 4
  (CANVAS_HEIGHT / 600) * 120, // 5
  (CANVAS_HEIGHT / 600) * 100 // 6
]

const colYOffsetPrecet = [
  (CANVAS_HEIGHT / (600/1.2)) * 120, // 2
  (CANVAS_HEIGHT / (600/1.2)) * 60, // 3
  (CANVAS_HEIGHT / (600/1.2)) * 40, // 4
  (CANVAS_HEIGHT / (600/1.2)) * 30, // 5
  (CANVAS_HEIGHT / (600/1.2)) * 20 // 6
]

let colYGaucheOffset = colYOffsetPrecet[blocks[0].length-2];
let colYDroitOffset = colYOffsetPrecet[blocks[1].length-2]; 

let colYSpacingGauche = colYSpacingPrecet[blocks[0].length-2];
let colYSpacingDroit = colYSpacingPrecet[blocks[1].length-2];

let colYSpacings = [colYSpacingGauche, colYSpacingDroit];
let colYOffsets = [colYGaucheOffset, colYDroitOffset];



let blockSize = [(CANVAS_WIDTH / 800) * 150, (CANVAS_HEIGHT / 600) * 50];
let anchorSize = [(CANVAS_WIDTH / 800) * 15, (CANVAS_HEIGHT / 600) * 15];

let centresGauche = [];

for (let i = 0; i < blocks[0].length; i++) {
  centresGauche.push([    colX[0] + blockSize[0] - anchorSize[0] / 2,
  colYOffsets[0] + i * colYSpacings[0] + blockSize[1] / 2
  ]);
}

let centresDroite = [];
for (let i = 0; i < blocks[1].length; i++) {
  centresDroite.push([colX[1] + anchorSize[0] / 2, colYOffsets[1] + i * colYSpacings[1] + blockSize[1] / 2]);
}

let centres = [centresGauche, centresDroite];



const colors = {
    "LightMode": [
        {
            "background": "#eff0f3",
            "headline": "#0d0d0d",
            "paragraph": "#2a2a2a",
            "button": "#ff8e3c",
            "button-text": "#0d0d0d",
            "button-text-hover": "#eff0f3",
            "stroke": "#0d0d0d",
            "main": "#eff0f3",
            "highlight": "#ff8e3c",
            "secondary": "#fffffe",
            "tertiary": "#d9376e"
        }
    ]
}


const blockColorGradiant1 = colors.LightMode[0].highlight;
const blockColorGradiant2 = colors.LightMode[0].tertiary;


const contourThikness = 4;

const leftAnchorColor = "rgb(0, 0, 0)"
const rightAnchorColor = "rgb(255, 255, 255)"

const textFont = "20px Arial"
const textFontColor = "rgb(255, 255, 255)"

const drawnLineThikness = 4;
const dashedLineStyle = [15, 15]; // [longueurDessine, espacePasDessine]

const lineDrawingColor = "rgb(200, 0, 0, 0.8)"
const lineDrawedColor  = "rgb(200, 255, 0, 0.9)"

const bgColor = colors.LightMode[0].background

const selectedColor = "rgb(0, 200, 0)"
const unSelectedColor = colors.LightMode[0].paragraph

const Game =  ({ canvasRef, startGame }) => {
  canvasRef = useRef(null);
  const ctxRef = useRef(null);
  let isDragging = false;
  let startPos;
  let endPos;
  let drawnedLines = [];
  let blockSelection = [];
  let blockSelectionState = 0;
  let blockSelectionBefore = [];
  let draggingHover = [];

  useEffect(() => {
    if (!startGame) {
        return;
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    function drawBlocks() {
      ctx.lineWidth = contourThikness;

      for (let i = 0; i < blocks.length; i++) {
        for (let j = 0; j < blocks[i].length; j++) {
          const gradient = ctx.createLinearGradient(
            colX[i],
            colYOffsets[i] + j * colYSpacings[i],
            colX[i],
            (CANVAS_HEIGHT / 600) * colYOffsets[i] + j * colYSpacings[i] + blockSize[0]
          );
          gradient.addColorStop(0.1, blockColorGradiant1);
          gradient.addColorStop(0.2, blockColorGradiant2);
          ctx.fillStyle = gradient;



          //ctx.fillRect(colX[i], colYOffsets[i] + j * colYSpacings[i], blockSize[0], blockSize[1]);
         

          
          if(blocks[i][j].selection){
            ctx.strokeStyle = selectedColor;
          }else{
            ctx.strokeStyle = unSelectedColor;
          }


          ctx.beginPath();
          ctx.roundRect(colX[i], colYOffsets[i] + j * colYSpacings[i], blockSize[0], blockSize[1], 40);
          ctx.stroke();
          ctx.fill();


          ctx.beginPath();
          ctx.roundRect(colX[i], colYOffsets[i] + j * colYSpacings[i],  blockSize[0], blockSize[1], 40);
          ctx.stroke();


          ctx.fillStyle = textFontColor;
          ctx.font = textFont;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(blocks[i][j].text, colX[i] + blockSize[0] / 2, colYOffsets[i] + j * colYSpacings[i] + blockSize[1] / 2);
          ctx.save();
        }
      }
    }

    function drawLine(startPos, endPos){
        var startAnchor = getAnchorAtPos(startPos);
        var endAnchor = getAnchorAtPos(endPos);
    
        var isStartABlock = getBlockAtPos(startPos);
        var isEndABlock = getBlockAtPos(endPos);
    
    
        if(isStartABlock){
            blocks[isStartABlock[0]][isStartABlock[1]].selection = 1;
            if(isEndABlock){
                blocks[isEndABlock[0]][isEndABlock[1]].selection = 1;
                if(draggingHover.length == 0){
                    draggingHover.push(isEndABlock);
                }
            }
            if(!isEndABlock && draggingHover.length > 0){
                blocks[draggingHover[0][0]][draggingHover[0][1]].selection = 0;
                draggingHover = [];
            }
            //draw();

            ctx.beginPath();
            ctx.moveTo(startPos.x, startPos.y);
            ctx.lineTo(endPos.x, endPos.y);
            ctx.strokeStyle = lineDrawingColor;
            ctx.lineWidth = 3;
            ctx.setLineDash(dashedLineStyle);
            ctx.stroke();
            ctx.setLineDash([]);
            return;
        }
    
        /*try{
            var isRightAnchor = startAnchor.block[0] == 0 && startAnchor.side == "right";
            var isLeftAnchor = startAnchor.block[0] == 1 && startAnchor.side == "left";
    
            if((isLeftAnchor || isRightAnchor)){
                ctx.beginPath();
                ctx.moveTo(startPos.x, startPos.y);
                ctx.lineTo(endPos.x, endPos.y);
                ctx.strokeStyle = lineDrawingColor;
                ctx.lineWidth = 3;
                ctx.setLineDash(dashedLineStyle);
                ctx.stroke();
                ctx.setLineDash([]);
            }
    
        }catch(e){
            return;
        }*/
    }
    function drawStraightLine(startPos, endPos){
        try{
            blocks[startPos[0]][startPos[1]].selection = 0;
        }catch(e){}
        try{
            blocks[endPos[0]][endPos[1]].selection = 0;
        }catch(e){}

        
        ctx.beginPath();
        ctx.moveTo(centres[startPos[0]][startPos[1]][0], centres[startPos[0]][startPos[1]][1]);
        ctx.lineTo(centres[endPos[0]][endPos[1]][0], centres[endPos[0]][endPos[1]][1]);
        ctx.strokeStyle = lineDrawedColor;
        ctx.lineWidth = drawnLineThikness;
        ctx.stroke();
    
    }
    function getAnchorAtPos(pos){    
        for(var i = 0; i < blocks.length; i++){
            for(var j = 0; j < blocks[i].length; j++){
                
                if(pos.x > colX[i] - anchorSize[0] && pos.x < colX[i] && pos.y > colYOffsets[i] + j * colYSpacings[i] + blockSize[1]/2 - anchorSize[1]/2 && pos.y < colYOffsets[i] + j * colYSpacings[i] + blockSize[1]/2 + anchorSize[1]/2){
                    return {block: [i, j], side: "left"};
                }
                if(pos.x > colX[i] + blockSize[0] && pos.x < colX[i] + blockSize[0] + anchorSize[0] && pos.y > colYOffsets[i] + j * colYSpacings[i] + blockSize[1]/2 - anchorSize[1]/2 && pos.y < colYOffsets[i] + j * colYSpacings[i] + blockSize[1]/2 + anchorSize[1]/2){
                    return {block: [i, j], side: "right"};
                }
            }
        }
        return null;
    }
    function getBlockAtPos(pos){
        for(var i = 0; i < blocks.length; i++){
            for(var j = 0; j < blocks[i].length; j++){   
                if(pos.x > colX[i] && pos.x < colX[i] + blockSize[0] && pos.y > colYOffsets[i] + j * colYSpacings[i] && pos.y < colYOffsets[i] + j * colYSpacings[i] + blockSize[1]){
                    return [i, j];
                }
            }
        }
        return null;
    }

    function drawBackground() {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
      drawBackground();
      drawBlocks();


      for(var i = 0; i < drawnedLines.length; i++){
        drawStraightLine(drawnedLines[i].start, drawnedLines[i].end);
      }
    }

    function resetAllVars(){
        drawnedLines = [];
        colYGaucheOffset = colYOffsetPrecet[blocks[0].length-2];
        colYDroitOffset = colYOffsetPrecet[blocks[1].length-2]; 
       
        colYSpacingGauche = colYSpacingPrecet[blocks[0].length-2];
        colYSpacingDroit = colYSpacingPrecet[blocks[1].length-2];
       
        colYSpacings = [colYSpacingGauche, colYSpacingDroit];
        colYOffsets = [colYGaucheOffset, colYDroitOffset];
       
       
       
        blockSize = [(CANVAS_WIDTH / 800) * 150, (CANVAS_HEIGHT / 600) * 50];
        anchorSize = [(CANVAS_WIDTH / 800) * 15, (CANVAS_HEIGHT / 600) * 15];
       
        centresGauche = [];
       
       for (let i = 0; i < blocks[0].length; i++) {
         centresGauche.push([    colX[0] + blockSize[0] - anchorSize[0] / 2,
         colYOffsets[0] + i * colYSpacings[0] + blockSize[1] / 2
         ]);
       }
       
        centresDroite = [];
       for (let i = 0; i < blocks[1].length; i++) {
         centresDroite.push([colX[1] + anchorSize[0] / 2, colYOffsets[1] + i * colYSpacings[1] + blockSize[1] / 2]);
       }
       
        centres = [centresGauche, centresDroite];
    }

    function isValidLine(startPos, endPos){
        var startAnchor = getAnchorAtPos(startPos);
        var endAnchor = getAnchorAtPos(endPos);
    
        var isStartABlock = getBlockAtPos(startPos);
        var isEndABlock = getBlockAtPos(endPos);
    
        if(isStartABlock && isEndABlock && isStartABlock[0] != isEndABlock[0]){
            return [true, isStartABlock, isEndABlock];
        }
    
        /*try{
            if(startAnchor != null){
                var isStartRightAnchor = startAnchor.block[0] == 0 && startAnchor.side == "right";
                var isStartLeftAnchor = startAnchor.block[0] == 1 && startAnchor.side == "left";
    
                if(isStartRightAnchor && isEndABlock){
                    return [true, startAnchor.block, isEndABlock];
                }
    
                if(isStartLeftAnchor && isEndABlock){
                    return [true, isEndABlock, startAnchor.block];
                }
            }
    
            if(endAnchor != null){
                var isEndLeftAnchor = endAnchor.block[0] == 1 && endAnchor.side == "left";
                var isEndRightAnchor = endAnchor.block[0] == 0 && endAnchor.side == "right";
    
                if(isEndLeftAnchor && isStartABlock){
                    return [true, isStartABlock, endAnchor.block];
                }
                if(isEndRightAnchor && isStartABlock){
                    return [true, endAnchor.block, isStartABlock];
                }
            }        
    
            if(endAnchor != null && startAnchor != null){
                return [(isStartRightAnchor && isEndLeftAnchor) || (isStartLeftAnchor && isEndRightAnchor), startAnchor.block, endAnchor.block];
            }
    
    
        }catch(e){
            return [false, null, null];
        }*/
        return [false, null, null];
        
    }



    canvas.addEventListener("mousedown", function(event){
        isDragging = true;
        startPos = {x: event.offsetX, y: event.offsetY};

        if(blockSelectionState == 0 && getBlockAtPos(startPos) != null){
            blockSelection= [getBlockAtPos(startPos)[0], getBlockAtPos(startPos)[1]]
            //blocks[getBlockAtPos(startPos)[0]][getBlockAtPos(startPos)[1]].selection = 1;
            blockSelectionState = 1;
        }
    });

    canvas.addEventListener("mouseup", function(event){
        /*try{
            blocks[blockSelection[0]][blockSelection[1]].selection = 0;
        }catch(e){
            console.log("no block selected");
        }*/
        isDragging = false;
        endPos = {x: event.offsetX, y: event.offsetY};



        if(blockSelectionState == 1 && getBlockAtPos(endPos) != null){
            if(blockSelection[0] == getBlockAtPos(endPos)[0] && blockSelection[1] == getBlockAtPos(endPos)[1]){
                blockSelectionBefore.push(blockSelection);
                blocks[blockSelection[0]][blockSelection[1]].selection = 1;
                //blocks[blockSelection[0]][blockSelection[1]].selection = 1;

                if(blockSelectionBefore.length == 2){
                    console.log("2 blocks");
                    blocks[blockSelectionBefore[0][0]][blockSelectionBefore[0][1]].selection = 0;
                    blocks[blockSelectionBefore[1][0]][blockSelectionBefore[1][1]].selection = 0;


                    /*try{
                        blocks[blockSelectionBefore[0][0]][blockSelectionBefore[0][1]].selection = 0;
                    }catch(e){
                        console.log("no block selected");
                    }*/
                    
                    if((blockSelectionBefore[0][0] == blockSelectionBefore[1][0] && blockSelectionBefore[0][1] == blockSelectionBefore[1][1])==false && (blockSelectionBefore[0][0] != blockSelectionBefore[1][0])){
                        drawnedLines.push({start: [blockSelectionBefore[0][0], blockSelectionBefore[0][1]], end: [blockSelectionBefore[1][0], blockSelectionBefore[1][1]]});
                        blockSelectionState = 0;
                    }else{
                        blockSelectionBefore = [];
                        return;
                    }
                    draw();



                    blockSelectionBefore = [];
                    return;
                }
            }
            blockSelectionState = 0;
        }        
        blockSelection = [];


        var Valid = isValidLine(startPos, endPos);
        if(Valid[0]){
            drawnedLines.push({start: Valid[1], end: Valid[2]});
        }
        //blocks[getBlockAtPos(startPos)[0]][getBlockAtPos(startPos)[1]].selection =0;
        try{
            //blocks[getBlockAtPos(endPos)[0]][getBlockAtPos(endPos)[1]].selection = 0;
            //if(draggingHover.length == 0){
            //    blocks[getBlockAtPos(startPos)[0]][getBlockAtPos(startPos)[1]].selection = 0;
            //}
        }catch(e){
            console.log("no block selected");
        }
        draw();
    });

    canvas.addEventListener("mousemove", function(event){
        if(isDragging){
            endPos = {x: event.offsetX, y: event.offsetY};
            draw();
            drawLine(startPos, endPos);
        }
    });


    function getRandomCountry(){
        var countries = [
            "France",
            "Japon",
            "Chine",
            "Russie",
            "Etats-Unis",
            "Allemagne",
            "Royaume-Uni",
            "Italie",
            "Espagne",
            "Inde"
        ] 
        return countries[Math.floor(Math.random() * countries.length)];
    }

    // when space is pressed
    document.addEventListener("keydown", function(event){
        if(event.keyCode == 32){
            
             blocks = [  
                [{ text: getRandomCountry() }],
                [{ text:getRandomCountry()  }]
              ];

            
              
              for (let j = 0; j < Math.random() * 5; j++) {
                blocks[0].push({ text: getRandomCountry() });
            }
            for (let j = 0; j < Math.random() * 5; j++) {
                blocks[1].push({ text: getRandomCountry() });
            }
            




              resetAllVars();
              ctx.fillStyle = "white";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            draw();
              
        }
    });


  
      draw();
    }, [startGame]);
  
    return (
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      />
    );
  };
  
  export default Game;
  