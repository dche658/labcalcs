<template>
    <Panel header="Tubular Maximum Reabsorption of Phosphate">
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Serum Phosphate</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="po4Serum" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Urine Phosphate</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="po4Urine" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Serum Creatinine</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="creatinineSerum" size="6"/>
            </div>
            <div class="col">
                umol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Urine Creatinine</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="creatinineUrine" size="6"/>
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">TRP</label>
            <div class="col-fixed" style="width: 120px">
                {{trp}}
            </div>
            <div class="col">

            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">TmP/GFR</label>
            <div class="col-fixed" style="width: 120px">
                {{tmpgfr}}
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div>
            <p>Olaf Bijvoet [1] devised the ratio of the renal
                tubular maximum reabsorption rate of phosphate to glomerular filtration rate (TmP/GFR)
                to help to distinguish hypercalcaemia due to hyperparathyroidism from other causes of
                hypercalcaemia. Although it has been superseded for this purpose by the measurement of
            plasma intact parathyroid hormone (PTH), it is still clinically useful.</p>

            <p>TmP/GFR measures maximum renal tubular phosphate reabsorption in mass per unit volume of glomerular filtrate. It is independent of the two other factors that affect plasma phosphate concentration: the rate of phosphate flow into the extracellular space from gut, cells and bone, and the glomerular filtration rate [2].</p>

            <p>TmP/GFR has replaced earlier indices of renal phosphate handling such as the phosphate excretion index (PEl) and the index of phosphate excretion (IPE) because it alone has a physiological basis.</p>

            <p>The tubular reabsorption of phosphate is one minus the fractional excretion of phosphate.</p>

            <p>TRP = 1-((urine phosphate x serum creatinine)/(serum phosphate x urine creatinine x 1000)</p>

            <p>If TRP ≤ 0.86, the patient is on the linear part of the excretion profile and TmP/GFR is equal to TRP x serum phosphate.</p>

            <p>If TRP > 0.86, the patient is on the curvilinear part of the excretion profile and TmP/GFR is equal to (0.3 x TRP x serum phosphate)/(1-(0.8 x TRP)) [3]</p>
        </div>

        <div>
            <Card style="width: 40em;">
                <template #title>
                    Reference Intervals [4]
                </template>
                <template #content>
                    <DataTable :value="refranges" stripedRows :size="small" >
                        <Column field="age" header="Age"></Column>
                        <Column field="gender" header="Gender"></Column>
                        <Column field="range" header="Range (mmol/L)" style="width: 30%;"></Column>
                    </DataTable>     
                </template>
                   
            </Card>
            
        </div>

        <div>
            <h4>References</h4>
            <ol>
                <li>O. L. Bijvoet, D. B. Morgan, and P. Fourman. The assessment of phosphate reabsorption. Clinica Chimica Acta. vol. 26, pp. 15–24, Oct. 1969</li>
                <li>R. B. Payne. Renal tubular reabsorption of phosphate (TmP/GFR): indications and interpretation. Annals of clinical biochemistry, vol. 35 ( Pt 2), pp. 201–6, Mar. 1998</li>
                <li>A. P. Kenny and A. C. A. Glen. Tests of phosphate reabsorption. The Lancet, vol. 302, Art. no. 7821, 1973</li>
                <li>The Australian and New Zealand Bone and Mineral Society.
                <a href="https://www.anzbms.org.au/tmpgfr/tmpgfr-calculator.asp">https://www.anzbms.org.au/tmpgfr/tmpgfr-calculator.asp</a> 
                Accessed 27 Feb 2024. Reference intervals based on Derain Dubourg L, Aurelle M, Chardon L, Flammier S, Lemoine S, Bacchetta J. Tubular phosphate handling: references from child to adulthood in the era of standardized serum creatinine. Nephrol Dial Transplant. 2022 Oct 19;37(11):2150-2156
                </li>
            </ol>
        </div>
        
    </Panel>
</template>

<script>
export default {
    data() {
        return {
            title: "Tubular Max Reabsorption of Phosphate",
            po4Serum: 0.7,
            po4Urine: 4.0,
            creatinineSerum: 80,
            creatinineUrine: 8.0,
            refranges: [
              { age: '0-<13 years', gender: 'Any', range: '1.11-1.70'},
              { age: '13-<16 years', gender: 'Any', range: '0.87-1.69'},
              { age: '16-<19 years', gender: 'Any', range: '0.71-1.61'},
              { age: '>=19 years', gender: 'Any', range: '0.70-1.35'}
            ]
        }
    },
    computed: {
        /* Tubular reabsorption of phosphate
         * @param phosphate concentration in mmol/L
         * @param urine phosphate concentration in mmol/L
         * @param creatinine concentration in umol/L
         * @param urine creatinine concentration in mmol/L
         * 
         * return TRP tubular reabsorption of phosphate 
         */
        trp() {
            return Math.round(1000*(1-((this.po4Urine*this.creatinineSerum)/(this.po4Serum*this.creatinineUrine*1000))))/1000;
        },
        tmpgfr() {
            //trp = 1-((this.po4Urine*this.creatinineSerum/1000)/(this.po4Serum*this.creatinineUrine));
            var tmp = 0;
            if (this.trp <= 0.86) {
                tmp = this.trp * this.po4Serum;
            } else {
                tmp = (0.3 * this.trp * this.po4Serum)/(1-(0.8*this.trp));
            }
            return Math.round(1000*tmp)/1000;
        }
    }
}
</script>