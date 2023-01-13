<template>
    <Panel header="Estimated Urine Nitrogen">
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">24h Urine Protein</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="proteinUrine" size="6"/>
            </div>
            <div class="col">
                g/24h
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">24h Urine Urea</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="ureaUrine" size="6"/>
            </div>
            <div class="col">
                mmol/24h
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Est. Urine Nitrogen</label>
            <div class="col-fixed" style="width: 120px">
                {{ urineNitrogen }}
            </div>
            <div class="col">
                g/24h
            </div>
        </div>
        <div>
            <p>Ideally, total urinary nitrogen (TUN) excretion should be used to assess urinary nitrogen losses. However, the reference procedure for measurement of urinary nitrogen is the Kjeldahl procedure in which the sample is digested with sulfuric acid to produce ammonium sulphate. Ammonium sulphate is then converted to ammonia by distillation with sodium hydroxide, and the amount of ammonia present is determined by back titration with boric acid with methyl orange as a pH indicator. For the most part, this procedure is not available in clinical laboratories, so various methods for approximating TUN excretion have been used.</p>
            <p>Urea accounts for approximately 80 – 90 % of urinary Nitrogen and a range of equations have been developed to estimate urinary nitrogen from the urine urea concentration. An alternate approach is to consider urinary excretion of other nitrogen containing compounds in addition to urea.</p>
            <p>Assuming the average nitrogen content of protein is approximately 16%.</p>
            <p>Estimated Nitrogen Excretion = ([24 hour urine urea] x 0.028)+([24 hour urine protein] x 0.16)</p>
        </div>
    </Panel>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                title: 'Estimated 24h Urine Nitrogen',
                proteinUrine: 0.15,
                ureaUrine: 50
            }
        },
        computed: {
            /*
             * Total urinary nitrogen
             * @param urine urea concentration in mmol/24h
             * @param urine protein concentration in g/24h
             */
            urineNitrogen() {
                return Math.round(100*((this.ureaUrine * 0.028)+(this.proteinUrine * 0.16)))/100;
            }
        }   
    }
</script>