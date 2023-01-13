<template>
    <Panel header="Calculated Osmolarity">
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Sodium</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="sodium" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Urea</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="urea" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Glucose</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="glucose" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">{{title}}</label>
            <div class="col-fixed" style="width: 120px">
                {{calcOsmo}}
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Measured Osmolality</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="osmolality" size="6"/>
            </div>
            <div class="col">
                mmol/kg
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Osmolar Gap</label>
            <div class="col-fixed" style="width: 120px">
                {{osmolGap}}
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
    </Panel>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                title: "Calculated Osmolarity",
                sodium: 140,
                urea: 3.8,
                glucose: 4.5,
                osmolality: 290
            }
        },
        computed: {
            calcOsmo() {
                return (2*this.sodium) + this.urea + this.glucose;
            },
            osmolGap() {
                return Math.round((this.osmolality - this.calcOsmo)*10)/10;
            }
        }
    }
</script>