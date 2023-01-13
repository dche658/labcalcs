<template>
    <Panel header="Fractional Excretion of Calcium">
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Serum Calcium</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="calciumSerum" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Urine Calcium</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="calciumUrine" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Serum Creatinine</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="creatinineSerum" size="6"/>
            </div>
            <div class="col">
                umol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Urine Creatinine</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="creatinineUrine" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">{{title}}</label>
            <div class="col-fixed" style="width: 120px">
                {{feCalcium}}
            </div>
            <div class="col">
                
            </div>
        </div>
        <div>
            <p>The fractional excretion of calcium is also known as the calcium / creatinine clearance ratio. In 
                individuals with hypercalcaemia, this test is useful for distinguishing Primary Hyperparathyroidism 
                from Familial Hypocalciuric Hypercalcaemia.</p>
            <p>FECa is less than 0.01 in 80% of patients with Familial Hypocalciuric Hypercalcaemia, indicating 
                that more than 99% of the filtered calcium is reabsorbed despite the presence of hypercalcaemia.</p>
            <p>In patients with primary hyperthyroidism the FECa is most often greater than 0.02</p>
            <p>The above cutoffs were determined on 24 hour urine samples.</p>
        </div>
    </Panel>
</template>

<script>
export default {
    data() {
        return {
            title: "Fract Ex of Calcium",
            calciumSerum: 2.4,
            calciumUrine: 4.0,
            creatinineSerum: 80,
            creatinineUrine: 8.0
        }
    },
    computed: {
        /* Fractional excretion of calcium 
         * @param calcium concentration in mmol/L
         * @param urine calcium concentration in mmol/L
         * @param creatinine concentration in umol/L
         * @param urine creatinine concentration in mmol/L
         * 
         * return fractional excretion of calcium reported to two decimal places 
         */
        feCalcium() {
            return Math.round((1000*this.calciumUrine*this.creatinineSerum/1000)/(this.calciumSerum*this.creatinineUrine))/1000;
        }
    }
}
</script>