<template>
    <Panel header="Convert Units">
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;" for="analytemass">Analyte</label>
            <div class="col-fixed" style="width: 200px">
                <Dropdown v-model="analyte" :options="analytes" optionLabel="name" optionValue="name"/>
            </div>
            <div class="col">
                <InputText type="text" class="inputfield" v-model.number="analyteMass" size="6" disabled id="analytemass" />
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;" for="concentration">Concentration</label>
            <div class="col-fixed" style="width: 200px">
                <InputText type="text" class="inputfield numericfield" v-model.number="concentration" 
                id="concentration"/>
            </div>
            <div class="col">
                <Dropdown v-model="fromNumerator" :options="fromNumeratorUnit" optionLabel="name" optionValue="name"/>/<Dropdown v-model="fromDenominator" :options="denominatorUnit" optionLabel="name" optionValue="name"/>
            </div>
        </div>
        <div class="field grid">
            <label class="col-fixed" style="width: 150px;">Conversion</label>
            <div class="col-fixed" style="width: 200px">
                {{ convertUnits }}
            </div>
            <div class="col">
                <Dropdown v-model="toNumerator" :options="toNumeratorUnit" optionLabel="name" optionValue="name"/>/<Dropdown v-model="toDenominator" :options="denominatorUnit" optionLabel="name" optionValue="name"/>
            </div>
        </div>
    </Panel>
</template>

<script type="text/javascript">
    const unitMap = new Map();
    unitMap.set("g",1);
    unitMap.set("mg",Math.pow(10,-3));
    unitMap.set("ug",Math.pow(10,-6));
    unitMap.set("ng",Math.pow(10,-9));
    unitMap.set("pg",Math.pow(10,-12));
    unitMap.set("mol",1);
    unitMap.set("mmol",Math.pow(10,-3));
    unitMap.set("umol",Math.pow(10,-6));
    unitMap.set("nmol",Math.pow(10,-9));
    unitMap.set("pmol",Math.pow(10,-12));
    unitMap.set("L",1);
    unitMap.set("dL",Math.pow(10,-1));
    unitMap.set("mL",Math.pow(10,-3));
    const analyteMap = new Map();
    analyteMap.set("Aluminium",26.98154);
    analyteMap.set("Amikacin",585.6);
    analyteMap.set("Amitryptyline",277.40);
    analyteMap.set("Ammonia",17.031);
    analyteMap.set("Antimony",  121.75);
    analyteMap.set("Arsenic",74.9216);
    analyteMap.set("Bilirubin",584.66);
    analyteMap.set("Bismuth",208.9804);
    analyteMap.set("Cadmium",112.41);
    analyteMap.set("Caffeine",194.19);
    analyteMap.set("Calcium",40.08);
    analyteMap.set("Carbamazepine",236.269);
    analyteMap.set("Cholesterol", 386.65);
    analyteMap.set("Chromium",51.996);
    analyteMap.set("Cobalt",58.9332);
    analyteMap.set("Copper",63.546);
    analyteMap.set("Creatinine", 113.12);
    analyteMap.set("Digoxin",780.938);
    analyteMap.set("Ethanol",46.07);
    analyteMap.set("Gentamicin",477.596);
    analyteMap.set("Glucose", 180.156);
    analyteMap.set("Gold",196.9665);
    analyteMap.set("Iodine",126.9045);
    analyteMap.set("Iron",55.847);
    analyteMap.set("Lactate",90.08);
    analyteMap.set("Lead",207.2);
    analyteMap.set("Lignocaine",234.3373);
    analyteMap.set("Magnesium",24.305);
    analyteMap.set("Manganese",54.9380);
    analyteMap.set("Mercury",200.59);
    analyteMap.set("Molybdenum",95.95);
    analyteMap.set("Nickel",58.6934);
    analyteMap.set("NT-proBNP",8457);
    analyteMap.set("Paracetamol",151.163);
    analyteMap.set("Phenobarbitone",232.235);
    analyteMap.set("Phenytoin",252.268);
    analyteMap.set("Phosphorus",30.9737);
    analyteMap.set("Platinum",195.084);
    analyteMap.set("Salicylate",138.121);
    analyteMap.set("Selenium",78.96);
    analyteMap.set("Silver",107.8682);
    analyteMap.set("Strontium",87.62);
    analyteMap.set("Thallium",204.3833);
    analyteMap.set("Theophylline",180.164);
    analyteMap.set("Tin",118.71);
    analyteMap.set("Titanium",47.867);
    analyteMap.set("Tobramycin",467.515);
    analyteMap.set("Triglyceride",885.4);
    analyteMap.set("Urate",168.1103);
    analyteMap.set("Urea",60.06);
    analyteMap.set("Urea Nitrogen",28.01);
    analyteMap.set("Valproate",144.211);
    analyteMap.set("Vanadium",50.9415);
    analyteMap.set("Vancomycin",1,449.3);
    analyteMap.set("Zinc",65.38);
    

    var analyteArray = [];
    //console.log(analyteMap);
    analyteMap.forEach((value,key) => {
        analyteArray.push({name: key});
        //console.log(key);
    });
    //console.log(analyteArray)
    export default {
        data() {
            return {
                analyte: "Aluminium",
                concentration: null,
                fromNumerator: "mg",     //mg
                fromDenominator: "dL",   //dL
                toNumerator: "mmol",       //mmol
                toDenominator: "L",                   //L
                fromNumeratorUnit: [
                    {name: "g"},
                    {name: "mg"},
                    {name: "ug"},
                    {name: "ng"},
                    {name: "pg"},
                    {name: "mol"},
                    {name: "mmol"},
                    {name: "umol"},
                    {name: "nmol"},
                    {name: "pmol"}
                ],
                toNumeratorUnit: [
                    {name: "mol"},
                    {name: "mmol"},
                    {name: "umol"},
                    {name: "nmol"},
                    {name: "pmol"},
                    {name: "g"},
                    {name: "mg"},
                    {name: "ug"},
                    {name: "ng"},
                    {name: "pg"}
                ],
                denominatorUnit: [
                    {name: "L"},
                    {name: "dL"},
                    {name: "mL"}
                ],
                analytes: analyteArray,
            }
        },
        computed: {
            convertUnits() {
                var size = this.fromNumerator.length;
                var fromUnit = this.fromNumerator.substring(size-1,size);
                size = this.toNumerator.length;
                var toUnit = this.toNumerator.substring(size-1,size);
                var mass = analyteMap.get(this.analyte);
                var conv;
                if (fromUnit == toUnit) { //both in grams or both in moles
                    conv = this.concentration * unitMap.get(this.fromNumerator) / unitMap.get(this.toNumerator) * unitMap.get(this.toDenominator) / unitMap.get(this.fromDenominator)
                } else if (fromUnit=="g" && toUnit=="l") { //convert from grams to moles
                    conv = this.concentration/mass * unitMap.get(this.fromNumerator) / unitMap.get(this.toNumerator) * unitMap.get(this.toDenominator) / unitMap.get(this.fromDenominator)
                } else { //fromUnit=="l" && toUnit=="g" convert from moles to grams
                    conv = this.concentration * mass * unitMap.get(this.fromNumerator) / unitMap.get(this.toNumerator) * unitMap.get(this.toDenominator) / unitMap.get(this.fromDenominator)
                }
                return conv;
            },
            analyteMass() {
                return analyteMap.get(this.analyte);
            }
        }
    }
</script>