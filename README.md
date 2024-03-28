# labcalcs

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Install vuejs

npm install vue@next 

## install primevue, primeicons, primeflex
npm install primevue --save
npm install primeicons --save
npm install primeflex --save

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Upgrade to latest packages

Install npm-check-updates if it has not already been installed.

```sh
npm install -g npm-check-updates
ncu
ncu -u
```

### Change Log

28/3/2024 Version 4.6.1; Doug Chesher\
Add urine osmolal gap

25/3/2024 Version 4.6; Doug Chesher\
Add urine anion gap

1/3/2024 Version 4.5; Doug Chesher\
Update reference interval for TmP/GFR

3/11/2023 Version 4.4; Doug Chesher\
Update equation for calculated osmolality to include ethanol. Change format to use Menubar
component. Update to latest packages for vue, vue-router, primevue, primeicons.

26/5/2023 Version 4.3; Doug Chesher\
Add Toast for user messages

21/5/2023 Version 4.2; Doug Chesher\
Fix error thrown in eGFR calculation if age less than 18 years of age. Updates to styling.

10/1/2023 Version 4.1; Doug Chesher\
Update transferrin molecular mass for transferrin saturation calculation

15/3/2022 Version 4.0; Doug Chesher\
Migrate to Vite with VueJS 3

1/12/2021 Version 3.2; Doug Chesher\
Fixed error in CKD-EPI calculation and add ability to use the 2021 equation

28/10/2021 Version 3.1; Doug Chesher\
Add menu item and page for APS downloads

10/10/2021 Version 3.0; Doug Chesher\
Add units conversion

19/7/2021 Version 2.0; Doug Chesher\
Rewritten for Vue JS

19/7/2021 Version 1.4; Doug Chesher\
Fix error in calculation for fractional excretion of calcium

27/1/2021 Version 1.3; Doug Chesher\
Add equation for adjusted phenytoin

23/11/2020 Version 1.2; Doug Chesher\
Add equation for anion gap

30/10/2020 Version 1.1; Doug Chesher\
Add equation for transferrin saturation

29/10/2020 Version 1.0; Doug Chesher\
Add equations for Adjusted Calcium, Fractional Excretion of Calcium, Creatinine 
Clearnace, Estimated GFR (CKD-EPI equation), Urine Nitrogen