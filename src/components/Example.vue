<template>
<!-- Форма "Стороны и объекты договора" не использует Vue -->
  <form class="form" action="javascript: void(0)">
    <!-- Участники договора -->
    <div class="container__form-input" id="vueContainer__form-input">
      <div class="">Участники договора</div>
        <button class="button button__plus" id="vueAddNewInput" type="submit" @click="pushInput">+</button>
        <div class="container__input" v-for="input in inputs" :key="input.name">
          <input class="nameField" type="text" placeholder="" name='name' v-bind:value=input.name >
          <input class="phoneField" type="tel" placeholder="+7 000 000 000" name='phone' v-bind:value=input.phone>
        </div>
        
        

  </div>
    <!-- Вид собственности -->
    <div class="container__form-input">
      <div class="">Вид собственности</div>
      <label for="typeField"></label>
      <select class="typeField" id="typeField">
        <option value="1">Общая собственность</option>
        <option value="2">Частная собственность</option>
        <option value="3">Государственная собственность</option>
      </select>
    </div>
    <div class="container__form-input">
      <ul class="type-container" id="type-container">
        

      </ul>
    <div id="totalArea"></div>
    </div>
    <div class="tabel" id="tabel">
      
    </div>
    
    <div class="send-button-container">
      <div class="send-button"><button class="button" id="send" type="submit">Send</button></div>
      <div class=""><button class="button" id="load" type="button">Load</button></div>
    </div>
  </form>
  <!-- END! Форма "Стороны и объекты договора" использует Vue -->
</template>

<script>
import vueDataJson from '../../date.json';
export default {
  data () {
    return {
      inputs: [
    {
      name: '',
      phone: ''
    }
  ]
    }
  },
  methods: {
    pushInput() {
      this.inputs.push({name:'', phone:''})
    },
    cell() {
      console.log('hello')
      console.log(vueDataJson)
    }
  }
}
</script>

<style lang="scss">
</style>
