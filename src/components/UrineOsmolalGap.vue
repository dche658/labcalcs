<script setup>
	import { ref, computed } from 'vue';
	const sodium = ref(40);
	const potassium = ref(20);
	const glucose = ref(0);
	const urea = ref(50);

	const osmo = ref(290);

	const creatinine = ref(7.0);

	const creatOutput = ref(10.0);

    const volume = ref(1.5);

    const duration = ref(24);


	const osmoCalc = computed(() => {
		return 2*(sodium.value+potassium.value) + urea.value + glucose.value;
	});
	const osmoGap = computed(() => {
		return osmo.value - osmoCalc.value;
	});

	const estNH4 = computed(() => {
		return osmoGap.value/2;
	});

	const nh4creat = computed(() => {
		return estNH4.value/creatinine.value;
	});

	const nh4output = computed(() => {
		return Math.round(10*nh4creat.value * creatOutput.value)/10;
	});

    const nh4out24 = computed(() => {
        return Math.round(10*estNH4.value*duration.value*volume.value/24)/10;
    });

</script>
<template>
	<Panel header="Urine Osmolal Gap">
        <div>
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
                <label class="col-fixed" style="width: 150px;">Potassium</label>
                <div class="col-fixed" style="width: 120px">
                    <InputText type="text" class="inputfield numericfield" v-model.number="potassium" />
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
                <label class="col-fixed" style="width: 150px;">Urea</label>
                <div class="col-fixed" style="width: 120px">
                    <InputText type="text" class="inputfield numericfield" v-model.number="urea" />
                </div>
                <div class="col">
                    mmol/L
                </div>
            </div>
            <div class="field grid">
                <label class="col-fixed" style="width: 150px;">Measured Osmolality</label>
                <div class="col-fixed" style="width: 120px">
                    <InputText type="text" class="inputfield numericfield" v-model.number="osmo" />
                </div>
                <div class="col">
                    mmol/kg
                </div>
            </div>
            <div class="field grid">
                <label class="col-fixed" style="width: 150px;">Calculated Osmolarity</label>
                <div class="col-fixed" style="width: 120px">
                    {{ osmoCalc }}
                </div>
                <div class="col">
                    mmol/L
                </div>
            </div>
            <div class="field grid">
                <label class="col-fixed" style="width: 150px;">Osmolal Gap</label>
                <div class="col-fixed" style="width: 120px">
                    {{ osmoGap }}
                </div>
                <div class="col">
                    mmol/L
                </div>
            </div>
            <div class="field grid">
                <label class="col-fixed" style="width: 150px;">Calculated Ammonium</label>
                <div class="col-fixed" style="width: 120px">
                    {{ estNH4 }}
                </div>
                <div class="col">
                    mmol/L
                </div>
            </div>
        </div>
        <div class="flex flex-wrap">
            <Card class="mr-2 mb-2">
                <template #title>Spot Urine</template>
                <template #content>
                    <div class="field grid">
                        <label class="col-fixed" style="width: 150px;">Creatinine</label>
                        <div class="col-fixed" style="width: 120px">
                            <InputText type="text" class="inputfield numericfield" v-model.number="creatinine" />
                        </div>
                        <div class="col">
                            mmol/L
                        </div>
                    </div>
                    <div class="field grid">
                        <label class="col-fixed" style="width: 150px;">Estimated Creatinine Output</label>
                        <div class="col-fixed" style="width: 120px">
                            <InputText type="text" class="inputfield numericfield" v-model.number="creatOutput" />
                        </div>
                        <div class="col">
                            mmol/24
                        </div>
                    </div>
                    <div class="field grid">
                        <label class="col-fixed" style="width: 150px;">Ammonium Output</label>
                        <div class="col-fixed" style="width: 120px">
                            {{ nh4output }}
                        </div>
                        <div class="col">
                            mmol/24h
                        </div>
                    </div>
                </template>
            </Card>
            <Card class="mb-2">
                <template #title>24h Urine</template>
                <template #content>
                    <div class="field grid">
                        <label class="col-fixed" style="width: 150px;">Urine Volume</label>
                        <div class="col-fixed" style="width: 120px">
                            <InputText type="text" class="inputfield numericfield" v-model.number="volume" />
                        </div>
                        <div class="col">
                            L
                        </div>
                    </div>
                    <div class="field grid">
                        <label class="col-fixed" style="width: 150px;">Collection Duration</label>
                        <div class="col-fixed" style="width: 120px">
                            <InputText type="text" class="inputfield numericfield" v-model.number="duration" />
                        </div>
                        <div class="col">
                            hours
                        </div>
                    </div>
                    <div class="field grid">
                        <label class="col-fixed" style="width: 150px;">Ammonium Output</label>
                        <div class="col-fixed" style="width: 120px">
                            {{ nh4out24 }}
                        </div>
                        <div class="col">
                            mmol/24h
                        </div>
                    </div>
                </template>
            </Card>
        </div>
		
        
	</Panel>
	<Card class="mt-2">
		<template #title>Calculations</template>
		<template #content>
        <p>
			The urine osmolal gap (U<sub>Osmolal gap</sub>), is calculated as the 
			difference between the measured osmolality and the calculated osmolarity.
			The calculated osmolarity is given by 2x(U<sub>Na</sub> + U<sub>K</sub>)
			+ Urea + Glucose, with all parameters reported in mmol/L [1].
		</p><p>	
			Urine osmolal gap provides an indirect estimate of ammonium 
			excretion in patients with hyperchloridaemic (normal anion gap) metabolic acidosis [1].
			It may be a better indirect test of ammonium excretion than the urine anion gap.
		</p><p>
			The calculation of 2x(U<sub>Na</sub> + U<sub>K</sub>) tends to overestimate the 
			number of osmoles in urine because some of the anion (e.g.,
			SO<sub>4</sub><sup>2+</sup>, citrate<sup>2+</sup>, and perhaps some other organic 
			anions) are not monovalent. On the other hand, the calculation of the urine 
			osmolarity underestimates the actual number of urine osmoles because it does not 
			include calcium and magnesium and their accompanying anions.
        </p><p>
            The U<sub>Osmolal gap</sub> detects NH4 in the urine regardless
            of its accompanying anion. The U<sub>Osmolal gap</sub> is
            unreliable to assess the rate of NH4 excretion if other
            osmoles (e.g., ethanol, methanol, ethylene glycol,
            mannitol) are present in the urine.
        </p><p>
            The concentration of NH4 in the urine can be estimated by dividing the 
            urine osmolal gap by 2, and the rate of NH4 excretion can be calculated by 
            multiplying the U<sub>NH4</sub>/U<sub>Creatinine</sub> by the estimated rate 
            of excretion of creatinine in the patient. An estimated rate of NH4 excretion 
            >50 mmol/d suggests that RTA is not likely to be the cause of the
            hyperchloraemic metabolic acidosis.
        </p>
            <h3>References</h3>
            <ol>
                <li>Kamel KS, Halperin ML. Use of Urine Electrolytes and Urine Osmolality in the
                Clinical Diagnosis of Fluid, Electrolytes, and Acid-Base Disorders. Kidney Int Rep.
                2021 Feb 13;6(5):1211-1224. <a href="https://pubmed.ncbi.nlm.nih.gov/34013099/">
                PMID: 34013099</a></li>
            </ol>
		</template>
	</Card>
</template>