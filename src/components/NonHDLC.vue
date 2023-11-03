<template>
	<Panel header="Non HDL Cholesterol">
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Cholesterol</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="cholesterol" />
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">HDL Cholesterol</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="hdl" />
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">{{title}}</label>
            <div class="col-fixed" style="width: 120px">
                {{nhdlCholesterol}}
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
                title: "Non-HDL Cholesterol",
                cholesterol: 5.0,
                hdl: 1.1
            }
        },
        computed: {
            nhdlCholesterol() {
                var val = Math.round(100*(this.cholesterol - this.hdl))/100;
                return val;
            },
        }
    }
</script>