<template>
  <div class="personal">
    <h2>My Appointments</h2>
    <hr class="solid" />
    <md-content class="md-primary">
      <h3>Date</h3>
      <md-content class="md-accent">
      <h4>------</h4>
    </md-content>
    </md-content>
  

    <md-content class="md-primary">
      <h3>Time</h3>
      <md-content class="md-accent">
      <h4>------</h4>
    </md-content>
    </md-content>
    
    <md-content class="md-primary">
      <h3>Office</h3>
      <md-content class="md-accent">
      <h4>------</h4>
    </md-content>
    </md-content>
    
  </div>
</template>

<script>
export default {
  name: "Scheduled"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-primary {
  width: 400px;
  height: 50px;
  margin-left: 30%;
  /* display: inline-flex; */
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
  /* margin-top: 10px; */
}
.md-accent {
  height: 40px;

}

.personal {
    border:2px solid black;
    height: 150%;
    text-align: center;
    margin: 3%;
    padding: 1%
  }
</style>
