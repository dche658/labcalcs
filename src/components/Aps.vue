<template>
    <div class="flex justify-content-between flex-wrap">
        <div class="flex "><h5>Measurands</h5></div>
        <div class="flex mb-1">
            <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
        </div>
    </div>
    <div class="card">
        <DataTable :value="measurands" :loading="loading" 
            :paginator="true" :rows="20"
            ref="dt" stripedRows="true" 
            class="p-datatable-sm" 
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
            v-model:filters="filters1"
            dataKey="measurandId" :globalFilterFields="['description','shortName']">
            <template #header>
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters1['global'].value" placeholder="Keyword Search" />
                    </span>
            </template>
            <template #empty>
                No records found.
            </template>
            <template #loading>
                Loading records. Please wait.
            </template>
            <Column field="description" header="Description"></Column>
            <Column field="sampleType.name" header="SampleType"></Column>
            <Column field="units" header="Units"></Column>
            <Column field="cvi" header="CVi">
                <template #body="slotProps">
                    {{ asPercent(slotProps.data.cvi)}}
                </template>
            </Column>
            <Column field="cvg" header="CVg">
                <template #body="slotProps">
                    {{ asPercent(slotProps.data.cvg)}}
                </template>
            </Column>
            <Column field="halfLife" header="Half Life (h)"></Column>
            <Column field="doseInterval" header="Dose Int (h)"></Column>
            <Column field="maxBiasMonitoring" header="Max Bias Monitoring">
                <template #body="slotProps">
                    {{ asPercent(slotProps.data.maxBiasMonitoring)}}
                </template>
            </Column>
            <Column field="biasDesirable" header="Max Bias Desirable">
                <template #body="slotProps">
                    {{ asPercent(slotProps.data.biasDesirable)}}
                </template>
            </Column>
            <Column field="maxBiasTDM" header="Max Bias TDM">
                <template #body="slotProps">
                    {{ asPercent(slotProps.data.maxBiasTDM)}}
                </template>
            </Column>
            <Column field="biasOptimal" header="Max Bias Optimal">
                <template #body="slotProps">
                    {{ asPercent(slotProps.data.biasOptimal)}}
                </template>
            </Column>
            <Column field="imprecisionOptimal" header="Imprecision Optimal">
                <template #body="slotProps">
                    {{ asPercent(slotProps.data.imprecisionOptimal)}}
                </template>
            </Column>
            <Column field="imprecisionDesirable" header="Imprecision Desirable">
                <template #body="slotProps">
                    {{ asPercent(slotProps.data.imprecisionDesirable)}}
                </template>
            </Column>
            <Column field="imprecisionMinimal" header="Imprecision Minimal">
                <template #body="slotProps">
                    {{ asPercent(slotProps.data.imprecisionMinimal)}}
                </template>
            </Column>
            <Column field="maxImprecisionTDM" header="Imprecision TDM">
                <template #body="slotProps">
                    {{ asPercent(slotProps.data.maxImprecisionTDM)}}
                </template>
            </Column>
            <Column field="apsRel" header="APS Rel">
                <template #body="slotProps">
                    {{ asPercent(slotProps.data.apsRel)}}
                </template>
            </Column>
            <Column field="apsAbs" header="APS Abs"></Column>
            <Column field="apsCut" header="APS Cut"></Column>
            <Column field="totalErrorDesirable" header="Total Error Desirable">
                <template #body="slotProps">
                    {{ asPercent(slotProps.data.totalErrorDesirable)}}
                </template>
            </Column>
            <Column field="apsSrc" header="APS Source"></Column>
            <Column field="enabled" header="Enabled"></Column>
        </DataTable>
    </div>
</template>

<script type="text/javascript">
import KoiosDataService from "../services/KoiosDataService";
import {FilterMatchMode,FilterOperator} from 'primevue/api';
export default {
    data() {
        return {
            measurands: [],
            currentIndex: -1,
            filters1: null,
            loading1: true
        }
    },
    created() {
        this.initFilters1();
    },
    mounted() {
        this.retrieveMeasurands();
    },
    methods: {
        retrieveMeasurands() {
            KoiosDataService.getAllMeasurands()
                .then(response => {
                    this.measurands = response.data;
                    //console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                })
        },
        exportCSV() {
            this.$refs.dt.exportCSV();
        },
        initFilters1() {
            this.filters1 = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'description': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'shortName': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]}
            }
        }
    },
    computed: {
        asPercent() {
            return (v) => {
                if (!v) return '';
                var option = {
                    style: 'percent',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                };
                var formatter = new Intl.NumberFormat("en-AU",option);
                return formatter.format(v);    
            }
            
        }
    }
}
</script>