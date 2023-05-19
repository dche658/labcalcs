<template>
  <Panel header="About">
<div>
  <h2>Version {{version}}</h2>
  <p>
    These pages are a collection of simple calculations frequently used in chemical pathology laboratories. 
  </p>
  <p>The calculations have been made available as an independent check on calculations performed in the laboratory information systems.</p>
  <h4>Disclaimer</h4>
  This application is made available in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    <p></p>
</div>
<Card>
  <template #title>
    Change Log
  </template>
  <template #content>
    <DataTable :value="changeLog">
      <Column field="date" header="Date"></Column>
      <Column field="version" header="Version"></Column>
      <Column field="author" header="Author"></Column>
      <Column field="changes" header="Changes"></Column>
    </DataTable>  
  </template>
</Card>
</Panel>

</template>

<script>
export default {
    data() {
        return {
            title: 'About',
            version: 4.2,
            changeLog: [
              {"date":"19/5/2023", "version":"4.2","author":"Doug Chesher","changes":"Fix error thrown in eGFR calculation if age less than 18 years of age"},
              {"date":"10/1/2023", "version":"4.1","author":"Doug Chesher","changes":"Update transferrin molecular mass for transferrin saturation calculation"},
              {"date":"15/3/2022", "version":"4.0","author":"Doug Chesher","changes":"Migrate to Vite with VueJS 3"},
              {"date":"1/12/2021", "version":"3.2","author":"Doug Chesher","changes":"Fixed error in CKD-EPI calculation and add ability to use the 2021 equation"},
              {"date":"28/10/2021", "version":"3.1","author":"Doug Chesher","changes":"Add menu item and page for APS downloads"},
              {"date":"10/10/2021", "version":"3.0","author":"Doug Chesher","changes":"Add units conversion"},
              {"date":"19/7/2021", "version":"2.0","author":"Doug Chesher","changes":"Rewritten for Vue JS"},
              {"date":"19/7/2021", "version":"1.4","author":"Doug Chesher","changes":"Fix error in calculation for fractional excretion of calcium"},
              {"date":"27/1/2021", "version":"1.3","author":"Doug Chesher","changes":"Add equation for adjusted phenytoin"},
              {"date":"23/11/2020", "version":"1.2","author":"Doug Chesher","changes":"Add equation for anion gap"},
              {"date":"30/10/2020", "version":"1.1","author":"Doug Chesher","changes":"Add equation for transferrin saturation"},
              {"date":"29/10/2020", "version":"1.0","author":"Doug Chesher","changes":"Add equations for Adjusted Calcium, Fractional Excretion of Calcium, Creatinine Clearnace, Estimated GFR (CKD-EPI equation), Urine Nitrogen"},
            ]
        }
    }
}
</script>