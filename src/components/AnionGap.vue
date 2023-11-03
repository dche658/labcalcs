<template>
    <Panel header="Anion Gap">
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Sodium</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="sodium" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Potassium</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="potassium" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Chloride</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="chloride" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Bicarbonate</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="bicarbonate" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">{{title}}</label>
            <div class="col-fixed" style="width: 120px">
                {{anionGap}}
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
    </Panel>
</template>

<script>
export default {
    data() {
    return {
        title: 'Anion Gap',
      sodium: 140,
      potassium: 4.5,
      chloride: 95,
      bicarbonate: 26
    }
  },
  computed: {
        /* Anion Gap
         * @param sodium concentration in mmol/L
         * @param potassium concentration in mmol/L
         * @param chloride concentration in mmol/L
         * @param bicarbonate concentration in mmol/L
         *
         * return anion gap
         */
        anionGap() {
            return this.sodium + this.potassium - (this.chloride + this.bicarbonate);       
        }
  }
}
</script>