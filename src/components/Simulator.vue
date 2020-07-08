<template>
  <div class="personal">
    <h2>My Simulator</h2>
          <hr class="solid">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label for="loanType">Loan Type</label>
          <md-select v-model="loanType" name="loanType" id="loanType" class="styleInput">
            <md-option value="car">Car</md-option>
            <md-option value="home">Home</md-option>
            <md-option value="studies">Studies</md-option>
          </md-select>
        </md-field>
      </div>
      <br />
      <div class="md-layout-item">
        <md-field>
          <label for="numOfYears">Number Of Years</label>
          <md-select v-model="numOfYears" name="numOfYears" id="numOfYears" class="styleInput">
            <md-option value="one">1</md-option>
            <md-option value="two">2</md-option>
            <md-option value="three">3</md-option>
            <md-option value="four">4</md-option>
            <md-option value="five">5</md-option>
            <md-option value="six">6</md-option>
          </md-select>
        </md-field>
      </div>
      <br />
      <div class="md-layout-item">
          <md-field >
      <label>Amount</label>
      <md-input v-model="amount" class="styleInput" type="number" min="10000" max="60000" step="1000" ></md-input>
    </md-field>
      </div>
      <br />
      <div class="md-layout-item">
        <md-field>
          <label for="frequency">Repayment Frequency</label>
          <md-select v-model="frequency" name="frequency" id="frequency" class="styleInput">
            <md-option value="monthly">Monthly</md-option>
            <md-option value="per quarter">Per Quarter</md-option>
            <md-option value="per semester">Per Semester</md-option>
            <md-option value="yearly">Yearly</md-option>
          </md-select>
        </md-field>
      </div>
    </div>

    <md-button class="md-primary md-raised" @click="loanType = 'Car'">Calculate</md-button>
  </div>
</template>

<script>
export default {
  name: "Simulator",
  // data: () => ({
  //   movie: "godfather",
  //   country: null,
  //   font: null
  // })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personal {
  border: 2px solid black;
  height: 100%;
  text-align: center;
  margin: 3%;
  padding: 1%;
}
.md-layout-item {
  display: block;
}
/* .styleInput {
  background-color: rgb(110, 110, 255);
  color: white;
} */
</style>
