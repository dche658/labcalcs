<template>
    <Panel header="Calculated Osmolarity">
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Sodium</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="sodium" />
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Urea</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="urea" />
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Glucose</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="glucose" />
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Ethanol</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="ethanol" />
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">{{ title }}</label>
            <div class="col-fixed" style="width: 120px">
                {{ calcOsmo }}
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Measured Osmolality</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="osmolality" />
            </div>
            <div class="col">
                mmol/kg
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Osmolar Gap</label>
            <div class="col-fixed" style="width: 120px">
                {{ osmolGap }}
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
    </Panel>
    <Card class="mt-2">
        <template #title>Calculations</template>
        <template #content>
            <p>Calculated osmolarity = (2 x Sodium) + Urea + Glucose + (1.25 x Ethanol)<br />
                <span class="footnote">With all components measured in mmol/L</span>
            </p>

            <p>Osmolar Gap = Measured Osmolality - Calculated Osmolarity</p>
            <p>
                Reference interval for osmolar gap is 0 - 10. Causes of a raised osmolar
                gap include high concentrations of ethanol, methanol, ethylene glycol,
                mannitol or glycine. The osmolar gap may also be high in pseudohyponatraemia
                caused by very higher serum lipids or serum protein.
            </p>
        </template>

    </Card>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
            title: "Calculated Osmolarity",
            sodium: 140,
            urea: 3.8,
            glucose: 4.5,
            osmolality: 290,
            ethanol: 0
        }
    },
    computed: {
        calcOsmo() {
            return (2 * this.sodium) + this.urea + this.glucose + (1.25 * this.ethanol);
        },
        osmolGap() {
            return Math.round((this.osmolality - this.calcOsmo) * 10) / 10;
        }
    }
}
</script>