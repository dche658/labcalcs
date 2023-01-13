<template>
    <Panel header="Urea Reduction Ratio and Kt/V">
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Urea Predialysis</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="ureaPredialysis" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Urea Postdialysis</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="ureaPostdialysis" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">{{title}}</label>
            <div class="col-fixed" style="width: 120px">
                {{urr}}
            </div>
            <div class="col">
                %
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Kt/V</label>
            <div class="col-fixed" style="width: 120px">
                {{ktv}}
            </div>
            <div class="col">
                
            </div>
        </div>
        <div>
        Urea Reduction Ratio = 100% x (Urea<sub>predialysis</sub> - Urea<sub>postdialysis</sub>) / Urea<sub>predialysis</sub>
        </div>
        <div>
        Kt/V = ln(Urea<sub>predialysis</sub> / Urea<sub>postdialysis</sub>)
        </div>
    </Panel>
    
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                title: "Urea Reduction Ratio",
                ureaPredialysis: 7,
                ureaPostdialysis: 2,
            }
        },
        computed: {
            urr() {
                var val = "";
                if (this.ureaPredialysis > 0) {
                    val = Math.round(100*(this.ureaPredialysis-this.ureaPostdialysis)*100/this.ureaPredialysis)/100;
                }
                return val;
            },
            ktv() {
                var val = "";
                if (this.ureaPostdialysis>0) {
                    val = Math.round(100*(Math.log(this.ureaPredialysis/this.ureaPostdialysis)))/100;
                }
                return val;
            }
        }
    }
</script>