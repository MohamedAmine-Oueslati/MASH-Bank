<template>
  <div id="app">
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
        <router-view />
      <!-- <profileInformations />
      <Simulator />
      <SimulationResult />
      <Appointment />
      <Processed />
      <Scheduled /> -->
      </md-app-content>
    </md-app>
  </div>
  </div>
</template>

<script>
  // import ProfileInformations from './components/ProfileInformations.vue';
  // import Simulator from './components/Simulator.vue';
  // import Appointment from './components/Appointment.vue';
  // import Scheduled from './components/Scheduled.vue';
  // import Processed from './components/Processed.vue';
  // import SimulationResult from './components/SimulationResult.vue';

  // export default {
  //   name: 'App',
  //   components: {
      // ProfileInformations,
      // Simulator,
      // Appointment,
      // Processed,
      // Scheduled,
      // SimulationResult
  //   }
  // }
</script>

<style scoped>
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
  .personal {
    border:2px solid black;
    height: 100%;
    text-align: center;
    margin: 3%;
    padding: 1%
  }
</style>