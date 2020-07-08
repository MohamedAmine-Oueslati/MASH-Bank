<template>
  <div>
    <md-empty-state
      class="md-primary"
      md-icon="done"
      md-label="Process Successfully Completed "
      md-description="Your Appointment is being Processed , Thanks!">
    </md-empty-state>
  </div>
</template>

<script>
export default {
  name: "Processed"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    text-align: center;
  }

  .md-empty-state {
    display: inline-block;
    vertical-align: middle;
      margin-left: 16px;
  }
</style>
