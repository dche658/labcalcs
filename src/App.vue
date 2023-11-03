<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <h3>
          <a href="/labcalcs/unitsconversion" style="all: unset;">Chem Path Calculations</a>
        </h3>
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

  </div>
  <div class="flex grid p-2">
    <div class="col p-2">
      <Toast />
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentTab: "unitsconversion",
      items: [
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
              label: "Transferrin Sat.", 
              route: "/transferrinsaturation"
            }
          ]
        },
        {
          label: "About", 
          route: "/about"
        }
      ],
    }
  },

}
</script>

<style>
@import './assets/base.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
  padding: 0px;
}
</style>
