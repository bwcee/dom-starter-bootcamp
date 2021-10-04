///////////////////////////////////////////
//array of arrays
///////////////////////////////////////////
const button = document.getElementById("starter-button");

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
button.addEventListener("click", main)


///////////////////////////////////////////
//2 grey box + 1 yellow box + 6 pink box exercise
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
//6 grey box exercise
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
//hello papaya & banana world exercise
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
    divSpan.innerText="this is a span"
  }
}

for (let i=0; i<4; i+=1){
  const texts =["hello", "papaya", "banana", "world"]
  const currentSpan = document.getElementsByClassName("word")[i];
  currentSpan.innerText=texts[i]
}

}

button.addEventListener("click", main) */


///////////////////////////////////////////
//First exercise
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

