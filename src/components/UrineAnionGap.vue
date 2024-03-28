<script setup>
	import { ref, computed } from 'vue';
	const sodium = ref(40);
	const potassium = ref(20);
	const chloride = ref(40);

	const anionGap = computed(() => {
		return sodium.value + potassium.value - chloride.value;
	});
</script>
<template>
	<Panel header="Urine Anion Gap">
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
            <label class="col-fixed" style="width: 150px;">Chloride</label>
            <div class="col-fixed" style="width: 120px">
                <InputText type="text" class="inputfield numericfield" v-model.number="chloride" />
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Anion Gap</label>
            <div class="col-fixed" style="width: 120px">
                {{ anionGap }}
            </div>
            <div class="col">
                mmol/L
            </div>
        </div>
	</Panel>
	<Card class="mt-2">
		<template #title>Calculations</template>
		<template #content>
        <p>
			The urine anion gap (U<sub>Anion gap</sub>), calculated as (U<sub>Na</sub> +
			U<sub>K</sub> - U<sub>Cl</sub>), has been used to assess the rate of NH4
			excretion in patients with hyperchloridaemic (normal anion gap) metabolic acidosis [1]. 
            The rationale behind this calculation is that if 
			the rate of NH4 excretion is high and NH4 is excreted with Cl (as is the case in
			patients with gastrointestinal loss of HCO3, U<sub>Cl</sub> will exceed (U<sub>Na</sub>
            + U<sub>K</sub>) (a negative value of the U<sub>Anion gap</sub>). In contrast, if there 
            is a defect in NH4 excretion, (U<sub>Na</sub> + U<sub>K</sub>) will 
            exceed U<sub>Cl</sub>
            (a positive value of the U<sub>Anion gap</sub>). There are 2 issues with using the 
            U<sub>Anion gap</sub> that should be noted.
        </p><p>
            First, the equation that describes the relationship between the rate of NH4 excretion
            and the urine anion gap, which was based on measurements from 24-hour urine collections,
            had a constant of 82.
            </p><p>
            NH<sub>4</sub><sup>+</sup> excretion = -0.8(urine anion gap) + 82 [2]
        </p><p>
            This constant represents the difference between the
            rates of excretion of other unmeasured anions and
            other unmeasured cations in the urine in individuals
            described as consuming a “normal” diet. Therefore, if
            U<sub>Cl</sub> exceeds (U<sub>Na</sub> + U<sub>K</sub>), one assumes that NH4
            excretion is >82 mmol/d, and hence, RTA is not the
            cause of the metabolic acidosis. The validity of this
            assumption is rather questionable, because the rate of
            excretion of unmeasured anions in the urine may vary
            considerably depending on dietary intake
        </p><p>
            The second issue is that the urine anion gap detects NH4
            only if it is excreted with chloride. Hence, if NH4 is
            excreted with another anion (e.g., hippurate, b-hydroxy butyrate, 
            D-lactate), the urine anion gap will fail to
            detect a high rate of NH4 excretion, and these patients
            may be misdiagnosed as RTA
        </p>
            <h3>References</h3>
            <ol>
                <li>Kamel KS, Halperin ML. Use of Urine Electrolytes and Urine Osmolality in the
                Clinical Diagnosis of Fluid, Electrolytes, and Acid-Base Disorders. Kidney Int Rep.
                2021 Feb 13;6(5):1211-1224. <a href="https://pubmed.ncbi.nlm.nih.gov/34013099/">
                PMID: 34013099</a></li>
                <li>Kamel KS, Halperin ML. Interpretation of electrolytes and acid base 
                    parameters in blood and urine. In: Skorecki K, Chertow GM, Marsden PA, et al.,
                    eds. Brenner and Rector’s The Kidney. 11th ed. Philadelphia, PA: Elsevier;
                    2019:758–795.</li>
            </ol>
		</template>
	</Card>
</template>