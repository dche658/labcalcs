<template>
  <div class="border-bottom-2 border-300 m-0 p-1 pl-2"
    style="color: #FFFFFF; backgroundColor: var(--blue-800);">
    <h3>
      <a href="/labcalcs/unitsconversion" 
      style="all: unset;">Chem Path Calculations</a></h3>
  </div>
  <div class="flex grid p-2">
    <div class="col-fixed p-2" style="width: 210px">
      <PanelMenu :model="items" v-model:expandedKeys="expandedKeys"/>
    </div>
    <div class="col p-2">
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
        label:"Utilities",
        items: [
          {
            label:"Units Conversion", to:"/unitsconversion"
          }
        ]
        
      },
      {
        label:"Calculated Tests",
        items: [
          {
            label:"Anion Gap", to:"/anion-gap"
          },
          {
            label:"Adjusted Calcium", to:"/adjusted-calcium"
          },
          {
            label:"Fract Ex Calcium", to:"/fe-calcium"
          },
          {
            label:"TmP/GFR", to:"/tmp-gfr"
          },
          {
            label:"Creatinine Clearance", to:"/creatclearance"
          },
          {
            label:"Cockcroft & Gault", to:"/cgcreatclearance"
          },
          {
            label:"Est GFR (CKD-EPI)", to:"/ckdepi"
          },
          {
            label:"LDL Cholesterol", to:"/ldlc"
          },
          {
            label:"Non-HDL Cholesterol", to:"/nhdlc"
          },
          {
            label:"Calc Osmolarity", to:"/calcosmo"
          },
          {
            label:"Urea Reduction Ratio", to:"/urr"
          },
          {
            label:"Adj. Phenytoin", to:"/adjustedphenytoin"
          },
          {
            label:"Urine Nitrogen", to:"/urinenitrogen"
          },
          {
            label:"Transferrin Sat.", to:"/transferrinsaturation"
          }
        ]
      },
      {
        label:"Help",
        items:[
          {
            label:"About", to:"/about"
          }
        ]
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
