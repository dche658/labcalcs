<template>
    <Panel header="Estimated GFR: CKD-EPI">
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Equation</label>
            <div class="col-fixed" style="width: 120px;">
                <Dropdown v-model="equation" :options="equations" optionLabel="name" optionValue="code"/>
            </div>
            <div class="col"></div>
        </div>
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
            <label class="col-fixed" style="width: 150px;">Age</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield" v-model.number="age" size="6"/>
            </div>
            <div class="col">
                
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
        <div class="field grid" v-if="equation==='CKD2009CR'">
            <label class="col-fixed" style="width: 150px;">African American</label>
            <div class="col-fixed" style="width: 120px">
                <Dropdown v-model.number="african" :options="yesNo" optionLabel="name" optionValue="code"/>
            </div>
            <div class="col">
                
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">{{title}}</label>
            <div class="col-fixed" style="width: 120px">
                {{egfrCKDEPI}}
            </div>
            <div class="col">
                mL/min/1.73m<sup>2</sup>
            </div>
        </div>
    </Panel>
    <div class="card mt-2 p-3">
        <h5>Calculation</h5>
        <p>
        eGFR (mL/min/1.73m<sup>2</sup>) = mu x ((Creatinine<sub>serum</sub> x 0.0113)/kappa)<sup>alpha</sup> x gamma<sup>Age in years</sup> x delta x epsilon</p>
        <table class="displaytable">
            <thead class="displaytable-thead" >
                <tr>
                    <td>Equation</td>
                    <td>Creatinine (umol/L)</td>
                    <td>Sex</td>
                    <td>mu</td>
                    <td>kappa</td>
                    <td>alpha</td>
                    <td>gamma</td>
                    <td>delta</td>
                    <td>epsilon</td>
                </tr>
            </thead>
            <tbody class="displaytable-tbody">
                <tr>
                    <td rowspan="4">2009 Creatinine [1]</td>
                    <td>&leq; 62</td>
                    <td>F</td>
                    <td>141</td>
                    <td>0.7</td>
                    <td>-0.329</td>
                    <td>0.9929</td>
                    <td>1.018</td>
                    <td>1.159 if black else 1.0</td>
                </tr>
                <tr>
                    <td>&gt; 62</td>
                    <td>F</td>
                    <td>141</td>
                    <td>0.7</td>
                    <td>-1.209</td>
                    <td>0.9929</td>
                    <td>1.018</td>
                    <td>1.159 if black else 1.0</td>
                </tr>
                <tr>
                    <td>&leq; 80</td>
                    <td>M</td>
                    <td>141</td>
                    <td>0.9</td>
                    <td>-0.411</td>
                    <td>0.9929</td>
                    <td>1.0</td>
                    <td>1.159 if black else 1.0</td>
                </tr>
                <tr>
                    <td>&gt; 80</td>
                    <td>M</td>
                    <td>141</td>
                    <td>0.9</td>
                    <td>-1.209</td>
                    <td>0.9929</td>
                    <td>1.0</td>
                    <td>1.159 if black else 1.0</td>
                </tr>
                <tr>
                    <td rowspan="4">2021 Creatinine [2]</td>
                    <td>&leq; 62</td>
                    <td>F</td>
                    <td>142</td>
                    <td>0.7</td>
                    <td>-0.241</td>
                    <td>0.9938</td>
                    <td>1.012</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>&gt; 62</td>
                    <td>F</td>
                    <td>142</td>
                    <td>0.7</td>
                    <td>-1.200</td>
                    <td>0.9938</td>
                    <td>1.012</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>&leq; 80</td>
                    <td>M</td>
                    <td>142</td>
                    <td>0.9</td>
                    <td>-0.302</td>
                    <td>0.9938</td>
                    <td>1.0</td>
                    <td></td>
                </tr>
                <tr>
                    <td>&gt; 80</td>
                    <td>M</td>
                    <td>142</td>
                    <td>0.9</td>
                    <td>-1.200</td>
                    <td>0.9938</td>
                    <td>1.0</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <div>
            <h5>References</h5>
            <ol>
                <li>
                    Levey AS, Stevens LA, Schmid CH, Zhang YL, Castro AF 3rd, Feldman HI, Kusek JW, Eggers P, Van Lente F, Greene T, Coresh J; CKD-EPI (Chronic Kidney Disease Epidemiology Collaboration). A new equation to estimate glomerular filtration rate. Ann Intern Med. 2009 May 5;150(9):604-12.
                </li>
                <li>
                    Inker LA, Eneanya ND, Coresh J, Tighiouart H, Wang D, Sang Y, Crews DC, Doria A, Estrella MM, Froissart M, Grams ME, Greene T, Grubb A, Gudnason V, Gutiérrez OM, Kalil R, Karger AB, Mauer M, Navis G, Nelson RG, Poggio ED, Rodby R, Rossing P, Rule AD, Selvin E, Seegmiller JC, Shlipak MG, Torres VE, Yang W, Ballew SH, Couture SJ, Powe NR, Levey AS; Chronic Kidney Disease Epidemiology Collaboration. New Creatinine- and Cystatin C-Based Equations to Estimate GFR without Race. N Engl J Med. 2021 Nov 4;385(19):1737-1749.
                </li>
            </ol>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                title: 'Est. GFR (CKD-EPI)',
                creatinineSerum: 80,
                age: 50,
                gender: 'F',
                african: 0,
                equation: 'CKD2009CR',
                genders: [
                    {name: 'Female', code: 'F'},
                    {name: 'Male', code: 'M'}
                ],
                yesNo: [
                    {name: 'Yes', code: 1},
                    {name: 'No', code: 0}
                ],
                equations: [
                    {name: 'CKD-EPI 2009 Creatinine', code:'CKD2009CR'},
                    {name: 'CKD-EPI 2021 Creatinine', code:'CKD2021CR'}
                ]
            }
        },
        computed: {
            /*
             * Estimated Glomerular Filtration Rate CKD-EPI Equation
             * @param creatinine concentration in umol/L
             * @param gender M or F
             * @param age in years
             * @param african_american as true or false
             *
             * return estimated GFR in mL/min/1.73m^2 rounded to integers
             */
            egfrCKDEPI() {
                var egfr, a, mu, kappa, c, d, e;
                e = 1.0;
                egfr = "Not available";
                if (this.age >= 18) {
                    if (this.equation==="CKD2009CR") {
                        mu = 141;
                        c = 0.9929;
                        if (this.african===1) {
                            e = 1.159;
                        }
                        if (this.gender==="F" && this.creatinineSerum <= 62) {
                            a=-0.329;
                            kappa = 0.7;
                            d = 1.018;
                        } else if (this.gender==="F" && this.creatinineSerum > 62) {
                            a=-1.209;
                            kappa = 0.7;
                            d = 1.018;
                        } else if (this.gender==="M" && this.creatinineSerum <=80) {
                            a=-0.411;
                            kappa = 0.9;
                            d = 1.0;
                        } else if (this.gender==="M" && this.creatinineSerum > 80) {
                            a=-1.209;
                            kappa = 0.9;
                            d = 1.0;
                        }    
                    } else if (this.equation==="CKD2021CR") {
                        mu = 142;
                        c = 0.9938;
                        e = 1.0;
                        if (this.gender==="F" && this.creatinineSerum <= 62) {
                            a=-0.241;
                            kappa = 0.7;
                            d = 1.012;
                        } else if (this.gender==="F" && this.creatinineSerum > 62) {
                            a=-1.200;
                            kappa = 0.7;
                            d = 1.012;
                        } else if (this.gender==="M" && this.creatinineSerum <=80) {
                            a=-0.302;
                            kappa = 0.9;
                            d = 1.0;
                        } else if (this.gender==="M" && this.creatinineSerum > 80) {
                            a=-1.200;
                            kappa = 0.9;
                            d = 1.0;
                        } 
                    }
                    egfr =mu * ((this.creatinineSerum *  0.0113/kappa)**a) * (c**this.age) * d * e;
                    egfr = Math.round(egfr);
                } else {
                    egfr = "";
                    this.$toast.add({ severity: 'warn', 
                        summary: 'Warning', 
                        detail: 'The CKD-EPI equation is only valid for those 18 years and older.', 
                        life: 3000 });

                }
                return egfr;
            }
        }
    }
</script>