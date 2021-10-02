import { createApp } from 'vue';
import App from "./App.vue";
import BasedCard from "./components/UI/BasedCard.vue"
import BasedButton from './components/UI/BasedButton.vue';


const app = createApp(App);


app.component('based-card',BasedCard);
app.component('based-button',BasedButton);
app.mount('#app');
