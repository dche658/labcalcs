import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Menu from 'primevue/menu';
import PanelMenu from 'primevue/panelmenu';
import Panel from 'primevue/panel';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import router from './router';


import 'primevue/resources/themes/saga-blue/theme.css';       //theme
//import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';                 //core css
import 'primeicons/primeicons.css';                           //icons
import 'primeflex/primeflex.css';

const app = createApp(App);
app.use(PrimeVue);
app.use(router);

app.component('Button',Button);
app.component('Card',Card);
app.component('Menu',Menu);
app.component('Panel',Panel);
app.component('InputText',InputText);
app.component('Dropdown',Dropdown);
app.component('PanelMenu',PanelMenu);
app.component('DataTable',DataTable);
app.component('Column',Column);

app.mount('#app');
