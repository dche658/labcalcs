import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Panel from 'primevue/panel';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import router from './router';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';


//import 'primevue/resources/themes/saga-blue/theme.css';       //theme
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';                 //core css
import 'primeicons/primeicons.css';                           //icons
import 'primeflex/primeflex.css';

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(ToastService);

app.component('Button',Button);
app.component('Card',Card);
app.component('Menu',Menu);
app.component('Panel',Panel);
app.component('InputText',InputText);
app.component('Dropdown',Dropdown);
app.component('Menubar',Menubar);
app.component('DataTable',DataTable);
app.component('Column',Column);
app.component('Toast',Toast);

app.mount('#app');
