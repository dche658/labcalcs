<template>
  <Panel header="Adjusted Calcium">
    <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Total Calcium</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="calcium" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Albumin</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="albumin" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Albumin Method</label>
            <div class="col-fixed" style="width: 120px">
                <Dropdown v-model="method" :options="methods" optionLabel="name" optionValue="code"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">{{title}}</label>
            <div class="col-fixed" style="width: 120px">
                {{adjustedCalcium}}
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div>
          <p>Calcium circulating in plasma is present as approximately 50% free calcium, 40% protein bound 
                  (mostly albumin), and 10% complexed to various anions. However, it is the free portion that is 
                  physiologically important. In individuals with hypoproteinaemia / hypoalbuminaemia the total calcium 
                  may be reduced while the free calcium may be in the normal physiological range. As a surrogate to 
                  measuring the concentration of free calcium, it is possible to calculate a total calcium concentration 
                  adjusted for the albumin concentration. Because the adjusted calcium is an estimate of what the total 
                  calcium concentration would be if the albumin were at the mid point of the albumin reference interval,
                  the reference interval for the adjusted calcium is the same as that quoted for measured total calcium.</p>
              <p>Adjusted Calcium = Measured Calcium + (slope * (40 - Albumin))</p>
              <p>If albumin is measured by bromocresol purple, the slope is 0.018; If albumin is measured by 
                  bromocresol green the slope is 0.02.</p>
        </div>
  </Panel>

</template>

<script>

export default {
    data() {
        return {
            title: 'Adjusted Calcium',
            calcium: 2.4,
            albumin: 40,
            method: 'BCP',
            methods: [
              {name: 'BCP', code: 'BCP'},
              {name: 'BCG', code: 'BCG'}
            ]
        }
    },
    computed: {
        /* Albumin adjusted calcium 
         * @param calcium concentration in mmol/L
         * @param albumin  concentration in g/L
         * @param albuminMethod as BCP or BCG
         *
         * return albumin adjusted calcium concentration in mmol/L
         */
        adjustedCalcium() {
        var slope;
        if (this.method === "BCP") {
            slope = 0.018;
        } else {
            slope = 0.02;
        }
        return this.calcium + (slope*(40-this.albumin));
        }
    },
}
</script>