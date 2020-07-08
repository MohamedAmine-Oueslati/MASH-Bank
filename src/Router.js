import Vue from 'vue';
import Router from 'vue-router';
// import App from './App.vue';
import ProfileInformations from './components/ProfileInformations.vue';
import Simulator from './components/Simulator.vue';
import Appointment from './components/Appointment.vue';
import Scheduled from './components/Scheduled.vue';
import Processed from './components/Processed.vue';
import SimulationResult from './components/SimulationResult.vue';

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/profile',
            name: 'ProfileInformations',
            component: ProfileInformations
        },
        {
            path: '/simulator',
            name: 'Simulator',
            component: Simulator
        },
        {
            path: '/appointment',
            name: 'Appointment',
            component: Appointment
        },
        {
            path: '/scheduled',
            name: 'Scheduled',
            component: Scheduled
        },
        {
            path: '/processed',
            name: 'Processed',
            component: Processed
        },
        {
            path: '/simulationResult',
            name: 'SimulationResult',
            component: SimulationResult
        }
    ]
})