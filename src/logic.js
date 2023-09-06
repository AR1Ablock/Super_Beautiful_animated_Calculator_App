import { ref, onMounted, watch } from 'vue';
import { evaluate, round } from 'mathjs';

export let ShowHistroyMode = ref(false);
export let HideExtra = ref(false);
export let animate = ref(false);
export let Writing = ref('');
let questionArray = [];
let ReadyToSolve = ref('');
let ChanginSymbolsWithVales = ref('');
let PauseForCheckRound = ref('');
export let SendingSolved = ref('');
let RecivingHistory = ref();
export let ColorMode = ref(false);


// function to change Colormode.
export function ColorToggle(){
  document.querySelector('.ColorMode').classList.add('Round');
  document.querySelector('.calculator_Body').classList.toggle('BackGround');
  document.querySelector('.answer').classList.toggle('TextColor');
  document.querySelector('.WrittingArea').classList.toggle('TextColor');
  document.querySelectorAll('.buttons_card div button').forEach(element => {

    if ( element.classList.contains('numbers_cus') || element.classList.contains('Light_numbers_cus') ){
        element.classList.toggle('numbers_cus');
        element.classList.toggle('Light_numbers_cus');
      }
      else if( element.classList.contains('operations_cus')|| element.classList.contains('Light_operations_cus') ){
        element.classList.toggle('operations_cus');
        element.classList.toggle('Light_operations_cus');
      }
      else if( element.classList.contains('eraser_cus') || element.classList.contains('Light_eraser_cus') ){
        element.classList.toggle('eraser_cus');
        element.classList.toggle('Light_eraser_cus');
      }
      else if( element.classList.contains('Special_Btn_Cus') || element.classList.contains('Light_Special_Btn_Cus')  ){
        element.classList.toggle('Special_Btn_Cus');
        element.classList.toggle('Light_Special_Btn_Cus');
      }
  });
  setTimeout(() => {
    document.querySelector('.ColorMode').classList.remove('Round');
  }, 500);
  
}

// function for toggle extra thigns
export async function toggleExtra() {
  try{
  HideExtra.value = !HideExtra.value;
  let Functionalities = document.querySelectorAll('.getit');
  let calculator_Body = document.querySelector('.calculator_Body');

  if (HideExtra.value) {
    Functionalities.forEach(element => {
      element.classList.remove('showingExtraFunctionality');
      element.classList.remove('showingExtraFunctionality100');
      element.classList.add('HideExtraFunctionality');
      setTimeout(() => {
        document.querySelector('.screen').style.margin = '1.5vmin 0';
        calculator_Body.style.height = '85vmin';
        calculator_Body.style.top = '7.5vmin';
        animate.value = true;
        element.classList.add('HideExtraFunctionality100');
      }, 300);
    });
  }
  else if (!HideExtra.value) {
    Functionalities.forEach(element => {
      calculator_Body.style.height = '95vmin';
      calculator_Body.style.top = '2.5vmin';
      document.querySelector('.arrow').style.top = '0';
      element.classList.remove('HideExtraFunctionality');
      element.classList.remove('HideExtraFunctionality100');
      element.classList.add('showingExtraFunctionality');
      animate.value = false;
      setTimeout(() => {
        element.classList.add('showingExtraFunctionality100');
      }, 200);
    });
  }
  }
  catch(error){
    console.log(error.message);
  }
};

// click events for all buttons
document.addEventListener('DOMContentLoaded', () => {
  try{
  document.querySelectorAll('.buttons_card div button').forEach(element => {
    element.addEventListener('click', () => {
      let CustomData = element.getAttribute('data-value');
      let ContentValue = element.textContent.trim();
      if (ContentValue == '') {
        if (IsNumber_or_Operator(CustomData)) {
          Writing.value += CustomData;
          questionArray.push(CustomData);
        }
      }
      else {
        if (IsNumber_or_Operator(ContentValue)) {
          Writing.value += ContentValue;
          questionArray.push(ContentValue);
        }
      }
    });
  });
  }
  catch(error){
    console.log(error.message);
  }
  // getting data from localstorage, making new array witout this above object,passing each obj of new arr in data arr.
RecivingHistory.value = JSON.parse(localStorage.getItem('CalculationHistory'));
if (RecivingHistory.value !== null) {
  let newArray = RecivingHistory.value.filter(item => item.Date !== '8/20/2023');
  newArray.forEach(element => {
    History.value.push(element);
  });
}
});


// function for keyboard input events.
window.addEventListener('keydown', (e)=>{
try{
  if(IsNumber_or_Operator(e.key)){
    questionArray.push(e.key);
  }
  else if(e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'Control' || e.key == 'c' || e.key == 'a' || e.key == 'C' || e.key == 'A'){
  }
  else if(e.key == 'Enter'){
    Gettinganswer();
  }
  else if(e.key == 'Delete'){
    Clear();
  }
  else
  {
    e.preventDefault();
  }
  if(e.key == 'Backspace'){
    Cut();
  }
}
catch(error){
  console.log(error.message);
}
});



// Values And Operator checker.
function IsNumber_or_Operator(input) {
  try{
    // expressions to check.
  let checking = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.', '+', '-', '*', '/', '∛', 'π', '^', '%','()','!','r'];
  if (checking.toString().includes(input))
    return true;
  else
    return false;
  }
  catch(error){
    console.log(error.message);
  }
};

function floating_Decimals(value) {
  try{
  if (Number.isInteger(value))
    return value;
  else
    return value.toFixed(3);
  }
  catch(error){
    console.log(error.message);
  }
};

function RoundCheck(value){
  try{
  let i = 0
  for (i; i<=value.length; i++)
  {
    if(value[i] == 'r')
      return true;
  }
    return false;
  }
  catch(error){
    console.log(error.message);
  }
};

// the most important function to correct the expression.
function correctExpression(expression) {
  try{
  let invalidOperators = /([*+-/^r]{2,})|([*+-/^r]$)/g;
  let correctedExpression = expression.replace(invalidOperators, match => match.slice(-1));
  return correctedExpression;
  }
  catch(error){
    console.log(error.message);
  }
};

// Main FUnction (to solve Questions Problems)
export function Gettinganswer() {
  try{
  questionArray.join('');   
  questionArray.forEach(element => {
    ReadyToSolve.value += element;
  let corrected =  correctExpression(ReadyToSolve.value);
  ReadyToSolve.value = '';
  ReadyToSolve.value = corrected;

  Writing.value = ReadyToSolve.value;
  ChanginSymbolsWithVales.value = ReadyToSolve.value.replace(/∛([0-9.]+)/g, "($1)^(1/3)").replace(/π/g, '*3.14');
  });
  if(RoundCheck(ChanginSymbolsWithVales.value)){
    PauseForCheckRound.value =  ChanginSymbolsWithVales.value.replace(/r/g, '');
    SendingSolved.value = round(floating_Decimals((evaluate(PauseForCheckRound.value))) );
  }
  else{
    SendingSolved.value = floating_Decimals(evaluate(ChanginSymbolsWithVales.value));
  }
  let CurrentEra = new Date();
  let HistryRecord = {
    Date: CurrentEra.toLocaleDateString(),
    Question: ReadyToSolve.value,
    Answer: SendingSolved.value,
  };
  History.value.push(HistryRecord);
  localStorage.setItem('CalculationHistory', JSON.stringify(History.value));
  questionArray.splice(0, questionArray.length);
  }
  catch(error){
    console.log(error.message);
    SendingSolved.value = 'Invalid Expression';
  }
};


// Clear the last one Index from Writing Field.
export function Cut() {
  try{
  if (Writing.value.length > 0) {
    Writing.value = Writing.value.slice(0, -1);
    questionArray.pop();
    ReadyToSolve.value = ReadyToSolve.value.slice(0, -1);
    PauseForCheckRound.value = PauseForCheckRound.value.slice(0, -1);
  }
  }
  catch(error){
    console.log(error.message);
  }
};

// Clear All The inputs Fields And Question Arrays.
export function Clear() {
  try{
  Writing.value = '';
  SendingSolved.value = '';
  ReadyToSolve.value = '';
  PauseForCheckRound.value = '';
  questionArray.splice(0, questionArray.length);
  }
  catch(error){
    console.log(error.message);
  }
};

// History data.
export let History = ref([
  {
    Date: '8/20/2023',
    Question: '1+22-3434*54545/5656^4545',
    Answer: 335314955.534
  }

]);