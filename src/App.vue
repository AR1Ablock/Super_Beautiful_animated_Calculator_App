<template>
  <div class="encapsulation">
    <button class="ColorMode" @click="ColorToggle()">Change</button>
  <div class="calculator_Body">
    <div class="historymode">
      <button class="histroy_btn" :class="{ 'activeArrow' : ShowHistroyMode }" @click="ShowHistroyMode = !ShowHistroyMode"><span class="arrow"></span></button>
    </div>
    <div class="history" :class="{'activeHistory' : ShowHistroyMode }">
    <div v-for="(item, index) in History" :key="index">
      <p class="HistroyDate">{{ item.Date }} </p>
      <p>{{ item.Question }} = {{ item.Answer }} </p>
    </div>
  </div>

    <div class="screen" :style="HideExtra ? 'top: 3vmin' : ''">   
      <div class="currentlyWriting" > <textarea class="WrittingArea" name="" id="" cols="23" rows="1" v-model.trim="Writing"></textarea> </div>
      <div class="answer"> <p> {{ SendingSolved }} </p> </div>
    </div>

    <div class="buttons_card" :style="HideExtra ? 'top: 5vmin' : ''">
      
      <div class="Colum1_row1_item custom_row_pos"> <button class="custom_row eraser_cus" @click="Clear"> C </button> </div>
      <div class="Colum1_row2_item custom_row_pos"> <button class="custom_row numbers_cus" @click="toggleExtra()"> E </button> </div>
      <div class="Colum1_row3_item custom_row_pos"> <button class="custom_row numbers_cus"> ∛ </button> </div>
      <div class="Colum1_row4_item custom_row_pos"> <button class="custom_row numbers_cus"> π </button> </div>
      <div class="Colum1_row5_item getit"> <button class="Special_Btn_Cus"> ^ </button> </div>
      <div class="Colum1_row6_item getit"> <button class="Special_Btn_Cus"> r </button> </div>
      <div class="Colum1_row7_item getit"> <button class="Special_Btn_Cus"> ! </button> </div>

      <div class="Colum2_row1_item getit"> <button class="Special_Btn_Cus"> % </button> </div>
      <div class="Colum2_row2_item"> <button class="eraser_cus" @click="Cut()"> X </button> </div>
      <div class="Colum2_row3_item"> <button class="operations_cus divide" data-value='/'> </button> </div>
      <div class="Colum2_row4_item"> <button class="operations_cus Multiplication" data-value='*'> </button> </div>
      <div class="Colum2_row5_item"> <button class="operations_cus Minus" data-value='-'> </button> </div>
      <div class="Colum2_row6_item"> <button class="numbers_cus"> 1 </button> </div>
      <div class="Colum2_row7_item"> <button class="numbers_cus"> 2 </button> </div>

      <div class="Colum3_row1_item"> <button class="numbers_cus"> 3 </button> </div>
      <div class="Colum3_row2_item" :class="{ 'Change1': animate }"> <button class="PlusAndEqualBtn operations_cus"> + </button> </div>
      <div class="Colum3_row3_item"> <button class="numbers_cus"> 4 </button> </div>
      <div class="Colum3_row4_item"> <button class="numbers_cus"> 5 </button> </div>
      <div class="Colum3_row5_item"> <button class="numbers_cus"> 6 </button> </div>
      <div class="Colum3_row6_item"> <button class="numbers_cus">7 </button> </div>
      <!--   <div class="row3_Colum7_item"> <button>  </button> </div> -->

      <div class="Colum4_row1_item"> <button class="numbers_cus"> 8 </button> </div>
      <div class="Colum4_row2_item"> <button class="numbers_cus"> 9 </button> </div>
      <div class="Colum4_row3_item" :class="{ 'Change2': animate }"> <button class="PlusAndEqualBtn operations_cus" @click="Gettinganswer()"> = </button> </div>
      <div class="Colum4_row4_item"> <button class="calculator-button numbers_cus" data-value='.'> </button> </div>
      <div class="Colum4_row5_item"> <button class="numbers_cus zeroBtnWidth"> 0 </button> </div>

    </div>

  </div>

</div>
</template>



<script setup>
import { ref, onMounted } from 'vue';
import { History, ShowHistroyMode, toggleExtra, HideExtra, animate, Writing, Gettinganswer, SendingSolved, Cut, Clear, ColorMode, ColorToggle } from './logic'

onMounted(() => {
  toggleExtra(); // need this here. so when page load and App.vue mounted then function run and turn HideExtra from false to true so extra will hide at load
  document.querySelector('.WrittingArea').focus(); // focus on textare when page load.
  
});

window.addEventListener('keydown', ()=>{
  document.querySelector('.WrittingArea').focus(); // focus on textare when page load.
});

</script>

<style>
@import url(./assets/styles.css);
</style>