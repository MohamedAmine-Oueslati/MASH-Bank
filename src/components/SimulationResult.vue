<template>
  <div class="personal">
    <h2>Simulation Result</h2>
          <hr class="solid">
    <md-content>
      <div>
        <h3>Amount</h3>
      <h3>Repayment Period</h3>
      <h3>Number Of Years</h3>
      <h3>Rate(%)</h3>
      <h3>Deadlines</h3>
      </div>
      <div>
      <h3>-------</h3>
      <h3>-------</h3>
      <h3>-------</h3>
      <h3>-------</h3>
      <h3>-------</h3>
      </div>
    </md-content>
    
  </div>
</template>

<script>
export default {
  name: "SimulationResult",
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

h3 {
  display: inline-block;
  margin: 30px
}
/* .styleInput {
  background-color: rgb(110, 110, 255);
  color: white;
} */
</style>
