<template>
    <Panel header="Transferrin Saturation">
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Iron</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="iron" size="6"/>
            </div>
            <div class="col">
                umol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Transferrin</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="transferrin" size="6"/>
            </div>
            <div class="col">
                <Dropdown v-model="transferrinUnits" :options="units" optionLabel="name" optionValue="name"/>
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Transferrin Saturation</label>
            <div class="col-fixed" style="width: 120px">
                {{ transferrinSaturation }}
            </div>
            <div class="col">
                %
            </div>
        </div>
        <div>
        <p>Transferrin is the principal transport for iron in plasma and has a molecular mass of approximately 79,640 (RCPA 2021), [79,570 Da (Beilby 1992)], including 5.5% carbohydrate. Each molecule of transferrin has two binding sites for iron, which is transported in the ferric (Fe<sup>3+</sup>) oxidation state. Each site can bind one Fe<sup>3+</sup> ion together with one ion of HCO<sup>3-</sup>. When transferrin binds to the cell surface transferrin-receptor, the complex is internalised into a vacuole that becomes acidified, releasing iron from transferrin.</p>
        <p>Under normal circumstances only about 30% of iron binding sites are occupied. Transferrin saturation is decreased in iron deficiency and increased in iron overload. Elevated transferrin saturation is the earliest phenotypic abnormality in hereditary haemochromatosis, and transferrin saturation can be used to screen for this disorder.</p>
        <p>Under normal circumstances, transferrin saturation does not exceed 100%. However, with acute iron poisoning in infants the iron binding capacity can be exceeded and the calculated transferrin saturation may exceed 100%. This may also occur with the administration of intravenous iron preparations such as iron dextran. However, such preparations may interfere with the measurement of iron so the effect on the observed transferrin saturation may be variable</p>
        <div class="grid">
            <div class="col-fixed" style="width: 150px">
                Transferrin Sat. 
            </div>
            <div class="col">
                = (79640 x [Iron] x 100%)/(2 x [Transferrin] x 10<sup>6</sup>)<br>
                = [Iron] x 3.982 / [Transferrin]
            </div>
        </div>
        <p>where [Iron] is in umol/L; [Transferrin] is in g/L; and assuming 2 iron binding sites for each molecule of transferrin. </p>
        </div>
        <div>
            <h4>References</h4>
            <ul>
                <li>Beilby J, Olynyk J, Ching S, Prins A, Swanson N, Reed W, Harley H, Garcia-Webb P. Transferrin index: an alternative method for calculating the iron saturation of transferrin. Clin Chem. 1992 Oct;38(10):2078-81</li>
                <li>Iron Studies Standardised Reporting Protocol Working Party. Iron Studies Standardised Reporting Protocol 2nd ed. Royal College of Pathologists of Australasia. Surry Hills. 2021.</li>
            </ul>
        </div>
    </Panel>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                title: 'Transferrin Saturation',
                iron: 10,
                transferrin: 1.5,
                transferrinUnits: 'g/L',
                units: [{name:'g/L'},{name:'mg/L'}]
            }
        },
        computed: {
            /*
             * Transferrin Saturation
             * @param iron concentration in umol/L
             * @param transferrin concentration
             * @param trfUnit is the units used for transferrin concentration
             *
             * return transferrin saturation as percentage index.
             */
            transferrinSaturation() {
                var unitMultiplier = 1;
                if (this.transferrinUnits==='mg/L') {
                    unitMultiplier = 1000;
                }
                var ts = this.iron*3.982*unitMultiplier/this.transferrin;
                ts = Math.round(ts*100)/100;
                if (ts > 100) ts = "> 100";
                return ts;
            }
        }
    }
</script>