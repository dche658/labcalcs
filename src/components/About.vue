<script setup>
  import {ref} from 'vue';
  const version = ref('Calculations Version '.concat(APP_VERSION));
</script>
<template>
  <Panel>
    <template #header>{{version}}</template>
    <div>
      <p>
        These pages are a collection of simple calculations used in chemical pathology laboratories.
      </p>
      <p>
        The calculations have been made available as an independent check on calculations 
        performed in the laboratory information systems.
      </p>
      <h4>Disclaimer</h4>
      This application is made available in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
      GNU General Public License for more details.
      <p></p>
    </div>
  </Panel>
</template>

