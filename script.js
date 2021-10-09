///////////////////////////////////////////
//d1: in class exercise
///////////////////////////////////////////

//create div to contain all generated html
const div1 = document.createElement("div");
document.body.append(div1);

//create randomBtn and insert line break so there's separation from the emojis
//seems like a really cumbersome way of creating line break...but haven't found a shorter/simpler way
const randomBtn = document.createElement("button");
randomBtn.innerHTML = "generate random # of random emoji";
div1.append(randomBtn);
const linebreak = document.createElement("br");
div1.append(linebreak);

const emojiArray = [
  "✌",
  "😂",
  "😝",
  "😁",
  "😱",
  "👉",
  "🙌",
  "🍻",
  "🔥",
  "🌈",
  "☀",
  "🎈",
  "🌹",
  "💄",
  "🎀",
  "⚽",
  "🎾",
  "🏁",
  "😡",
  "👿",
  "🐻",
  "🐶",
  "🐬",
  "🐟",
  "🍀",
  "👀",
  "🚗",
  "🍎",
  "💝",
  "💙",
  "👌",
  "❤",
  "😍",
  "😉",
  "😓",
  "😳",
  "💪",
  "💩",
  "🍸",
  "🔑",
  "💖",
  "🌟",
  "🎉",
  "🌺",
  "🎶",
  "👠",
  "🏈",
  "⚾",
  "🏆",
  "👽",
  "💀",
  "🐵",
  "🐮",
  "🐩",
  "🐎",
  "💣",
  "👃",
  "👂",
  "🍓",
  "💘",
  "💜",
  "👊",
  "💋",
  "😘",
  "😜",
  "😵",
  "🙏",
  "👋",
  "🚽",
  "💃",
  "💎",
  "🚀",
  "🌙",
  "🎁",
  "⛄",
  "🌊",
  "⛵",
  "🏀",
  "🎱",
  "💰",
  "👶",
  "👸",
  "🐰",
  "🐷",
  "🐍",
  "🐫",
  "🔫",
  "👄",
  "🚲",
  "🍉",
  "💛",
  "💚",
];

// Creating buttons
for (let i = 0; i < emojiArray.length; i += 1) {
  const button = document.createElement("button");
  button.innerText = emojiArray[i];
  div1.append(button);
}

// eventlistener for selecting emoji and then keying in # of emojis to print
// added listening for keystrokes b or s or i for bigger or smaller or default emoji size 
document.addEventListener("keydown", (e) => {
  const selectedEmoji = document.activeElement.innerHTML;
  console.log(e.key, selectedEmoji); //just to show in console value of key pressed and selected emoji
  const lastPara = div1.childNodes[div1.childElementCount - 1];
  const lastEmoji = lastPara.childNodes[lastPara.childNodes.length-1];//doesn't work w ChildElementCount...
  console.log(`you are pressing ${e.key} and last emoji is ${lastEmoji}`)//double chk key press and lastEmoji
  e.key === "ArrowUp"
    ? lastPara.append(selectedEmoji)
    : e.key === "ArrowDown"
    ? lastEmoji.remove()
    : createEmoji(selectedEmoji, parseInt(e.key));

  const allEmojis = document.querySelectorAll("span")
  if (e.key === "b"){
    allEmojis.forEach(e => e.style.fontSize="larger");
  } else if (e.key === "s"){
    allEmojis.forEach(e => e.style.fontSize="smaller")
  } else if (e.key ==="i"){
    allEmojis.forEach(e => e.style.fontSize="initial")
  }
  });

// eventlistener to print random nbr of random emojis
randomBtn.addEventListener("click", () => {
  const selectedEmoji =
    emojiArray[Math.floor(Math.random() * emojiArray.length)];
  const selectedValue = Math.floor(Math.random() * 10);
  createEmoji(selectedEmoji, selectedValue);
});

// actual function that prints the emojis
function createEmoji(emoji, value) {
  const newPara = document.createElement("p");
  div1.append(newPara);
  for (let i = 0; i < value; i += 1) {
    const newSpan = document.createElement("span");
    newPara.append(newSpan);
    newSpan.innerHTML = emoji;
  }
}

///////////////////////////////////////////
//d1: click and input
///////////////////////////////////////////
/* const starterButton = document.getElementById("starter-button");

function main(){

const containerDiv = document.createElement('div');
containerDiv.classList.add("container");
document.body.appendChild(containerDiv);

nestedInput = document.createElement('input');
nestedInput.value = "type some text";
containerDiv.append(nestedInput);

nestedButton = document.createElement('button');
nestedButton.innerText="add row div";
containerDiv.append(nestedButton)

//has to be placed within main, otherwise nestedButton will not be in the same scope
//placing nestedButton as global variable results in button disappearing from previously created containers
//and only appearing in most recently created container 
nestedButton.addEventListener("click", addRows);

for (let i=0; i<2; i+=1){
  const rowDiv = document.createElement('div');
  rowDiv.classList.add("row");
  containerDiv.appendChild(rowDiv);
  for (let j=0;j<2;j+=1){
    const divSpan = document.createElement('span');
    divSpan.classList.add("word");
    rowDiv.append(divSpan);
    
    const texts1 = ["hello", "papaya"];
    const texts2 = ["banana", "world"]
      if (i===0){
        divSpan.innerText=texts1[j]
      } else if (i===1){
        divSpan.innerText=texts2[j]
      }
    }
  }
}

function addRows(){
  const currentContainerDiv = document.activeElement.parentElement;
  
  const rowDiv = document.createElement('div');
  rowDiv.classList.add("row");
  currentContainerDiv.append(rowDiv);
  
  const divSpan = document.createElement('span');
  divSpan.classList.add("word");
  rowDiv.append(divSpan);
  divSpan.innerText=document.activeElement.previousSibling.value

}

starterButton.addEventListener("click", main); */

///////////////////////////////////////////
//d1: nested button
///////////////////////////////////////////
/* const starterButton = document.getElementById("starter-button");

function main(){

const containerDiv = document.createElement('div');
containerDiv.classList.add("container");
document.body.appendChild(containerDiv);

nestedButton = document.createElement('button');
nestedButton.innerText="add row div";
containerDiv.append(nestedButton)

//has to be placed within main, otherwise nestedButton will not be in the same scope
//placing nestedButton as global variable results in button disappearing from previously created containers
//and only appearing in most recently created container 
nestedButton.addEventListener("click", addRows);

for (let i=0; i<2; i+=1){
  const rowDiv = document.createElement('div');
  rowDiv.classList.add("row");
  containerDiv.appendChild(rowDiv);
  for (let j=0;j<2;j+=1){
    const divSpan = document.createElement('span');
    divSpan.classList.add("word");
    rowDiv.append(divSpan)
    //divSpan.innerText="this is a span"
    const texts1 = ["hello", "papaya"];
    const texts2 = ["banana", "world"]
      if (i===0){
        divSpan.innerText=texts1[j]
      } else if (i===1){
        divSpan.innerText=texts2[j]
      }
    }
  }
}

function addRows(){
  const currentContainerDiv = document.activeElement.parentElement;
  
  const rowDiv = document.createElement('div');
  rowDiv.classList.add("row");
  currentContainerDiv.append(rowDiv);
  
  for (let j=0;j<2;j+=1){
    const divSpan = document.createElement('span');
    divSpan.classList.add("word");
    rowDiv.append(divSpan)
    divSpan.innerText="this is a span"
  }
}

starterButton.addEventListener("click", main); */

///////////////////////////////////////////
//d1: array of arrays
///////////////////////////////////////////
/* const button = document.getElementById("starter-button");

const words = [
  ['orange', 'tomato'],
  ['fire engine', 'basketball'],
];

function main(){
  const containerDiv = document.createElement('div');
  containerDiv.classList.add("container");
  document.body.appendChild(containerDiv);
  for (let i=0; i<words.length; i+=1){
    const rowDiv = document.createElement('div');
    rowDiv.classList.add("row");
    containerDiv.appendChild(rowDiv);
    for (let j=0; j<words[i].length; j+=1){
        const divSpan = document.createElement('span');
        divSpan.classList.add("word");
        rowDiv.append(divSpan)
        divSpan.innerText=words[i][j]
    }
  }  
    
}
button.addEventListener("click", main) */

///////////////////////////////////////////
//d1: 2 grey box + 1 yellow box + 6 pink box exercise
///////////////////////////////////////////
/* const button = document.getElementById("starter-button");

function main(){

for (let i=0; i<2; i+=1){
  const containerDiv = document.createElement('div');
  containerDiv.classList.add("container");
  document.body.appendChild(containerDiv);
  
  const rowDiv = document.createElement('div');
  rowDiv.classList.add("row");
    containerDiv.appendChild(rowDiv);
  
    for (let j=0;j<6;j+=1){
        const divSpan = document.createElement('span');
        divSpan.classList.add("word");
        rowDiv.append(divSpan)
        divSpan.innerText="hey"
    
    }
  }

for (let i=0; i<2; i+=1){
  const currentSpans = document.getElementsByClassName("row")[i].children
  for (let j=0; j<6; j+=1){
    const words = ['banana', 'pasta', 'alligator', 'purple', 'accurate', 'fickle'];
    currentSpans[j].innerText=words[j]
  } 
}
  
}
button.addEventListener("click", main) */

///////////////////////////////////////////
//d1: 6 grey box exercise
///////////////////////////////////////////
/* const button = document.getElementById("starter-button");

function main(){

for (let i=0; i<6; i+=1){
  const containerDiv = document.createElement('div');
  containerDiv.classList.add("container");
  document.body.appendChild(containerDiv);
    for (let i=0; i<2; i+=1){
      const rowDiv = document.createElement('div');
      rowDiv.classList.add("row");
      containerDiv.appendChild(rowDiv);
      for (let j=0;j<2;j+=1){
        const divSpan = document.createElement('span');
        divSpan.classList.add("word");
        rowDiv.append(divSpan)
        divSpan.innerText="  "
      }
    }
  }

let counter =1;
for (let i=0; i<24; i+=4){
 const currentSpan = document.getElementsByClassName("word")[i];
 currentSpan.innerText=counter;
 counter +=1;
}
}
button.addEventListener("click", main)
 */

///////////////////////////////////////////
//d1: hello papaya & banana world exercise + event listener
///////////////////////////////////////////
/* const button = document.getElementById("starter-button");

function main(){

const containerDiv = document.createElement('div');
containerDiv.classList.add("container");
document.body.appendChild(containerDiv);

for (let i=0; i<2; i+=1){
  const rowDiv = document.createElement('div');
  rowDiv.classList.add("row");
  containerDiv.appendChild(rowDiv);
  for (let j=0;j<2;j+=1){
    const divSpan = document.createElement('span');
    divSpan.classList.add("word");
    rowDiv.append(divSpan)
    //divSpan.innerText="this is a span"
    const texts1 = ["hello", "papaya"];
    const texts2 = ["banana", "world"]
      if (i===0){
        divSpan.innerText=texts1[j]
      } else if (i===1){
        divSpan.innerText=texts2[j]
      }
    }
  }
}

button.addEventListener("click", main)
 */

///////////////////////////////////////////
//d1: First exercise
///////////////////////////////////////////
/* let input = document.getElementById("starter-ex");
let button = document.getElementById("starter-button");

 function myButtonClicked(){
  let typedValue = input.value;
  let newHtwo = document.createElement("h2");
  newHtwo.innerText = typedValue;
  document.body.appendChild(newHtwo);
  input.value ="";
  };

button.addEventListener("click", myButtonClicked) */
