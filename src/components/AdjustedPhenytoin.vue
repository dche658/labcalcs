<template>
    <Panel header="Adjusted Phenytoin">
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Phenytoin</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="phenytoin" size="6"/>
            </div>
            <div class="col">
                mg/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Albumin</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="albumin" size="6"/>
            </div>
            <div class="col">
                g/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Est GFR</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="egfr" size="6"/>
            </div>
            <div class="col">
                mL/min/1.73m<sup>2</sup>
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Ref Albumin</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="albref" size="6"/>
            </div>
            <div class="col">
                g/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Adjusted Phenytoin</label>
            <div class="col-fixed" style="width: 120px">
                {{adjustedPhenytoin}}
            </div>
            <div class="col">
                mg/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Free Phenytoin</label>
            <div class="col-fixed" style="width: 120px">
                {{freePhenytoin}}
            </div>
            <div class="col">
                mg/L
            </div>
        </div>
        <div>
            <p>
              Adjusted phenytoin = total phenytoin / (((albumin/albref)*beta*(1-alpha))+alpha)    
            </p>
            <p>
              Free phenytoin = alpha * adjusted Phenytoin
            </p>  
            <p>
              Where:
              <ul>
                  <li>alpha = 0.1, assuming 90% protein binding</li>
                  <li>beta = 1 if eGFR &gt;= 15 mL/min/1.73m<sup>2</sup> or 
                      0.48 if eGFR &lt; 15 mL/min/1.73m<sup>2</sup></li>
                  <li>albref is the reference albumin which should be the median of your reference 
                      population or the mid point of the reference interval. When using the BCG 
                      method, albref = 44 g/L. With BCP the median albumin concentration is lower.
                  </li>
              </ul>
            </p>
        </div>
    </Panel>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                title: 'Adjusted and Free Phenytoin',
                phenytoin: 20,
                albumin: 30,
                egfr: 90,
                albref: 40
            }
        },
        computed: {
            /*
             * Calculate Adjusted phenytoin 
             * @param phenytoin Measured phenytoin concentration. Can be molar or mass units.
             * @param albumin Measured serum/plasma albumin concentration
             * @param egfr Estimated glomerula filtration rate
             * @param albref Reference albumin. Ideally median of normal population
             *
             * return adjusted phenytoin rounded to 1 decimal place
             */
            adjustedPhenytoin() {
              var alpha = 0.1; // assumes 90% protein binding
              var beta = 1.0;
              if (this.egfr < 15) {
                beta = 0.48;
              }
              var adj_phenytoin = this.phenytoin/(((this.albumin/this.albref)*beta*(1-alpha))+alpha);
              return Math.round(10*adj_phenytoin)/10; //Round to 1 decimal place
            },
            freePhenytoin() {
                var alpha = 0.1; // assumes 90% protein binding
              var beta = 1.0;
              if (this.egfr < 15) {
                beta = 0.48;
              }
              var adj_phenytoin = this.phenytoin/(((this.albumin/this.albref)*beta*(1-alpha))+alpha);
              var free_phenytoin = adj_phenytoin * 0.1;
              return Math.round(free_phenytoin*100)/100;
            }
        }
    }
</script>