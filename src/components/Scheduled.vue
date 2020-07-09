<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">MY DASHBORD</span>
        <span class="space"></span>
        <span class="md-mail">E-mail</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped">
        <md-list>
          <md-list-item>
            <md-icon>account_box</md-icon>
            <router-link to="/profile">
              <span class="md-list-item-text">Profile informations</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>exposure</md-icon>
            <router-link to="/simulator">
              <span class="md-list-item-text">Simulator</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>today</md-icon>
            <router-link to="/appointment">
              <span class="md-list-item-text">Make an appointment</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>alarm</md-icon>
            <router-link to="/scheduled">
              <span class="md-list-item-text">My scheduled appointments</span>
            </router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
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
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "Scheduled"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .md-primary {
  width: 400px;
  height: 50px;
  margin-left: 30%;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
} */
/* .md-accent {
  height: 40px;
} */

.personal {
  border: 2px solid black;
  height: 150%;
  text-align: center;
  margin: 3%;
  padding: 1%;
}
 .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .md-mail {
    margin-left: 80%;
    font-size: 25px;
  }
</style>
