<script setup>
import { ref } from 'vue';
const items = ref([
        {
          label: "Units Conversion",
          route: "/unitsconversion"
        },
        {
          label: "Calculated Tests",
          items: [
            {
              label: "Anion Gap",
              route: "/anion-gap"
            },
            {
              label: "Adjusted Calcium",
              route: "/adjusted-calcium"
            },
            {
              label: "Fract Ex Calcium",
              route: "/fe-calcium"
            },
            {
              label: "TmP/GFR",
              route: "/tmp-gfr"
            },
            {
              label: "Creatinine Clearance",
              route: "/creatclearance"
            },
            {
              label: "Cockcroft & Gault",
              route: "/cgcreatclearance"
            },
            {
              label: "Est GFR (CKD-EPI)",
              route: "/ckdepi"
            },
            {
              label: "LDL Cholesterol",
              route: "/ldlc"
            },
            {
              label: "Non-HDL Cholesterol",
              route: "/nhdlc"
            },
            {
              label: "Calc Osmolarity",
              route: "/calcosmo"
            },
            {
              label: "Urea Reduction Ratio",
              route: "/urr"
            },
            {
              label: "Adj. Phenytoin",
              route: "/adjustedphenytoin"
            },
            {
              label: "Urine Nitrogen",
              route: "/urinenitrogen"
            },
            {
              label: "Urine Anion Gap",
              route: "/urineag"
            },
            {
              label: "Urine Osmolal Gap",
              route: "/urineosmgap"
            },
            {
              label: "Transferrin Sat.",
              route: "/transferrinsaturation"
            }
          ]
        },
        {
          label: "About",
          route: "/about"
        }
      ]);
</script>

<template>
  <div>
      <Menubar :model="items">
        <template #start>
            <a v-bind:href="'/labcalcs/#'+items[0].route" style="all: unset;">
              <img src="@/assets/logo.svg" height="48" width="48"/>
            </a>
        </template>
        <template #item="{ label, item, props, root, hasSubmenu }">
          <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action">
              <span v-bind="props.icon" />
              <span v-bind="props.label">{{ label }}</span>
            </a>
          </router-link>
          <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
            <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]"
              v-bind="props.submenuicon" />
          </a>
        </template>
      </Menubar>
    </div>

  <div>
    <div class="col p-2">
      <Toast />
      <router-view />
    </div>
  </div>
</template>

<style>
@import './assets/base.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
