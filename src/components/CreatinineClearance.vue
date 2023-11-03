<template>
    <Panel header="Creatinine Clearance">
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Urine Creatinine</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="creatinineUrine" />
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Serum Creatinine</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="creatinineSerum"/>
            </div>
            <div class="col">
                umol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Collection Duration</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="timeInterval" />
            </div>
            <div class="col">
                hours
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Urine Volumen</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="urineVolume" />
            </div>
            <div class="col">
                mL
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">{{title}}</label>
            <div class="col-fixed" style="width: 120px">
                {{creatinineClearance}}
            </div>
            <div class="col">
                mL/min
            </div>
        </div>
    </Panel>
</template>

<script type="text/javascript">
    export default {
        data() {
        return {
            title: 'Creatinine  Clearance',
            creatinineSerum: 80,
            creatinineUrine: 8.0,
            urineVolume: 1500,
            timeInterval: 24
        }
    },
    computed: {
        creatinineClearance() {
        return Math.round((this.creatinineUrine * this.urineVolume * 1000)/(this.creatinineSerum * this.timeInterval * 60));
        }
    }
    }
</script>