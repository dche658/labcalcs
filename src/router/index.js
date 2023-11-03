import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/anion-gap",
      name: "anion-gap",
      component: () => import("../components/AnionGap.vue")
    },
    {
      path: "/adjusted-calcium",
      name: "adjusted-calcium",
      component: () => import("../components/AdjustedCalcium.vue")
    },
    {
      path:"/fe-calcium",
      name: "fe-calcium",
      component: () => import("../components/FECalcium.vue")
    },
    {
      path:"/tmp-gfr",
      name: "tmp-gfr",
      component: () => import("../components/TmpGfr.vue")
    },
    {
      path:"/creatclearance",
      name:"creatclearance",
      component: () => import("../components/CreatinineClearance.vue")
    },
    {
      path:"/cgcreatclearance",
      name:"cgcreatclearance",
      component: () => import("../components/EstCreatClearCG.vue")
    },
    {
      path:"/ckdepi",
      name:"ckdepi",
      component: () => import("../components/EgfrCkdEpi.vue")
    },
    {
      path:"/ldlc",
      name:"ldlc",
      component: () => import("../components/LDL.vue")
    },
    {
      path:"/nhdlc",
      name:"nhdlc",
      component: () => import("../components/NonHDLC.vue")
    },
    {
      path:"/calcosmo",
      name:"calcosmo",
      component: () => import("../components/CalcOsmo.vue")
    },
    {
      path:"/urr",
      name:"urr",
      component: () => import("../components/UreaReductionRatio.vue")
    },
    {
      path:"/adjustedphenytoin",
      name:"adjustedphenytoin",
      component: () => import("../components/AdjustedPhenytoin.vue")
    },
    {
      path:"/urinenitrogen",
      name:"urinenitrogen",
      component: () => import("../components/UrineNitrogen.vue")
    },
    {
      path:"/transferrinsaturation",
      name:"transferrinsaturation",
      component: () => import("../components/TransferrinSaturation.vue")
    },
    {
      path:"/",
      alias: "/unitsconversion",
      name:"unitsconversion",
      component: () => import("../components/UnitsConversion.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../components/About.vue")
    },
    {
      path: "/aps",
      name: "aps",
      component: () => import("../components/Aps.vue")
    }
  ]
})

export default router
