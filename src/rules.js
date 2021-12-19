export function row(state) {
  if((state.C0 === "O" && state.C1 === "O" && state.C2 === "O") || (state.C0 === "X" && state.C1 === "X" && state.C2 === "X")){
    return "R1";
  }
  if((state.C3 === "O" && state.C4 === "O" && state.C5 === "O") || (state.C3 === "X" && state.C4 === "X" && state.C5 === "X")){
    return "R2";
  }
  if((state.C6 === "O" && state.C7 === "O" && state.C8 === "O") || (state.C6 === "X" && state.C7 === "X" && state.C8 === "X")){
    return "R3";
  }
  else {
    return 0;
  }
}

export function column(state) {
  if((state.C0 === "O" && state.C3 === "O" && state.C6 === "O") || (state.C0 === "X" && state.C3 === "X" && state.C6 === "X")){
    return "C1";
  }
  if((state.C1 === "O" && state.C4 === "O" && state.C7 === "O") || (state.C1 === "X" && state.C4 === "X" && state.C7 === "X")){
    return "C2";
  }
  if((state.C2 === "O" && state.C5 === "O" && state.C8 === "O") || (state.C2 === "X" && state.C5 === "X" && state.C8 === "X")){
    return "C3";
  }
  else {
    return 0;
  }
}

export function diagonal(state) {
  if((state.C0 === "O" && state.C4 === "O" && state.C8 === "O") || (state.C0 === "X" && state.C4 === "X" && state.C8 === "X")){
    return "D1";
  }
  if((state.C2 === "O" && state.C4 === "O" && state.C6 === "O") || (state.C2 === "X" && state.C4 === "X" && state.C6 === "X")){
    return "D2";
  }
  else {
    return 0;
  }
}

function changeColorById(id) {
  var element = document.getElementById(id);
  element.style.border = "0.5rem solid #28b485";
  element.style.color = "#28b485";
  element.style.textShadow = "0.5rem 0.5rem 0.7rem rgba(85,197,122,0.3)";
}

export function changeColor(a,b,c) {

  //ROWS

  if(a === "R1") {
    changeColorById("0");
    changeColorById("1");
    changeColorById("2");
  }
  if(a === "R2") {
    changeColorById("3");
    changeColorById("4");
    changeColorById("5");
  }
  if(a === "R3") {
    changeColorById("6");
    changeColorById("7");
    changeColorById("8");
  }

  //COLUMN

  if(b === "C1") {
    changeColorById("0");
    changeColorById("3");
    changeColorById("6");
  }
  if(b === "C2") {
    changeColorById("1");
    changeColorById("4");
    changeColorById("7");
  }
  if(b === "C3") {
    changeColorById("2");
    changeColorById("5");
    changeColorById("8");
  }

  //DAGONALS

  if(c === "D1") {
    changeColorById("0");
    changeColorById("4");
    changeColorById("8");
  }

  if(c === "D2") {
    changeColorById("2");
    changeColorById("4");
    changeColorById("6");
  }
}
