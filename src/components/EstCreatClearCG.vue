<template>
    <Panel header="Cockcroft and Gault Estimated Creatinine Clearance">
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
            <label class="col-fixed" style="width: 150px;">Weight</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="weight" size="6"/>
            </div>
            <div class="col">
                kg
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Age</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="age" size="6"/>
            </div>
            <div class="col">
                years
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Gender</label>
            <div class="col-fixed" style="width: 120px">
                <Dropdown v-model="gender" :options="genders" optionLabel="name" optionValue="code"/>
            </div>
            <div class="col">
                
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">{{title}}</label>
            <div class="col-fixed" style="width: 120px">
                {{cockcroftGault}}
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
            title: 'Est Creat Clearance',
            creatinineSerum: 80, 
            weight: 70,
            age: 50, 
            gender: 'F',
            genders: [
                {name: 'Female', code: 'F'},
                {name: 'Male', code: 'M'}
            ]
        }
    },
    computed: {
        /*
         * Estimated Creatinine Clearance
         * @param creatinine concentration in umol/L
         * @param weight in kilograms
         * @param age in years
         * @param gender M or F
         *
         * return estimated creatinine clearance in mL/min
         */
        cockcroftGault() {
          var ecc = ((140-this.age)*this.weight)/(this.creatinineSerum * 0.814);
          if (this.gender==="F" || this.gender==="f") {
                     ecc = ecc * 0.85;
          }
          return Math.round(ecc);
        }
    },
}
</script>