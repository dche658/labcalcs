<template>
    <Panel header="LDL Cholesterol">
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Cholesterol</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="cholesterol" size="6"/>
            </div>
            <div class="col-fixed" style="width: 120px">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Triglyceride</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="triglyceride" size="6"/>
            </div>
            <div class="col-fixed" style="width: 120px">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">HDL Cholesterol</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="hdl" size="6"/>
            </div>
            <div class="col-fixed" style="width: 120px">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">LDL Chol (Friedewald)</label>
            <div class="col-fixed" style="width: 120px">
                {{ldlCholesterol}}
            </div>
            <div class="col-fixed" style="width: 120px">
                mmol/L
            </div>
            <div class="col">
                {{message}}
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">LDL Chol (NIH)</label>
            <div class="col-fixed" style="width: 120px">
                {{ldlNIH}}
            </div>
            <div class="col-fixed" style="width: 120px">
                mmol/L
            </div>
            <div class="col">
                {{msgNIH}}
            </div>
        </div>
        <div>
            <h5>Friedewald equation for LDL Cholesterol</h5>
            <p>
                LDL-C (mmol/L) = Total Cholesterol - HDL-C - Triglyceride/2.2
            </p>
            <p>
                Friedewald WT, Levy RI, Fredrickson DS. Estimation of the Concentration of Low-Density Lipoprotein Cholesterol in Plasma, Without Use of the Preparative Ultracentrifuge. Clinical Chemistry. 1972;18(6):499–502
            </p>
            <h5>NIH equation for LDL Cholesterol</h5>
            <p>
                LDL-C (mmol/L) = Cholesterol/0.948 - HDL-C/0.971 - (TG/3.74 + TG x NonHDL-C/24.16 - TG<sup>2</sup>/79.36) - 0.244
            </p>
            <p>
                Sampson M, Ling C, Sun Q, et al. A New Equation for Calculation of Low-Density Lipoprotein Cholesterol in Patients With Normolipidemia and/or Hypertriglyceridemia. JAMA Cardiol. 2020;5(5):540–548.
            </p>
            <p>
                Higgins V, Leiter LA, Delaney SR, Beriault DR. Validating the NIH LDL-C equation in a specialized lipid cohort: Does it add up? Clinical Biochemistry. 2022;99:60-68
            </p>
        </div>
    </Panel>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                title: "LDL Cholesterol",
                cholesterol: 5.0,
                triglyceride: 1.5,
                hdl: 1.1
            }
        },
        computed: {
            ldlCholesterol() {
                var val = Math.round(100*(this.cholesterol - this.hdl - (this.triglyceride/2.2)))/100;
                return val;
            },
            ldlNIH() {
                var val = (this.cholesterol/0.948)-(this.hdl/0.971)-((this.triglyceride/3.74)+(this.triglyceride*(this.cholesterol-this.hdl)/24.16)-((this.triglyceride**2)/79.36))-0.244;
                return Math.round(100*val)/100;
            },
            message() {
                if (this.triglyceride > 4.5) {
                    return "While a result has been calculated, the Friedewald equation is not valid if the triglyceride concentration exceeds 4.5 mmol/L.";
                } else {
                    return "";
                }
            },
            msgNIH() {
                if (this.triglyceride > 9.0) {
                    return "While a result has been calculated, the NIH equation is only valid for triglyceride concentrations up to 9 mmol/L";
                } else {
                    return "";
                }
            },
        }
    }
</script>