<template>   
        <div class="personal">
          <h2>My Personal informations</h2>
          <hr class="solid">
          <h3>First Name</h3>
          <h4>------</h4>
          <h3>Last Name</h3>
          <h4>------</h4>
          <h3>Username</h3>
          <h4>------</h4>
          <h3>Occupation</h3>
          <h4>------</h4>
          <h3>State</h3>
          <h4>------</h4>
          <h3>City</h3>
          <h4>------</h4>
          <h3>Zip Code</h3>
          <h4>------</h4>
          <md-button class="md-raised" :md-ripple="false">Edit</md-button>
          <md-button class="md-raised md-primary">Save</md-button>
        </div>
</template>

<script>

export default {
  name: 'ProfileInformations',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .personal {
    border:2px solid black;
    height: 100%;
    text-align: center;
    margin: 3%;
    padding: 1%
  }
</style>
