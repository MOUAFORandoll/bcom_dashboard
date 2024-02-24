<script setup>
import { computed, ref, onMounted } from "vue";
import { useMainStore } from "@/stores/main";
import {
  mdiAccountMultiple,
  mdiCheckDecagram,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiMonitorCellphone,
  mdiPauseBox,
  mdiReload,
  mdiChartPie,
} from "@mdi/js";
import * as chartConfig from "@/components/Charts/chart.config.js";
import LineChart from "@/components/Charts/LineChart.vue";
import SectionMain from "@/components/SectionMain.vue";
import CardBoxWidgetSecond from "@/components/CardBoxWidgetSecond.vue";
import ModalLoading from "@/components/ModalLoading.vue";
import CardBox from "@/components/CardBox.vue";
import TableSampleClients from "@/components/TableSampleClients.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBoxTransaction from "@/components/CardBoxTransaction.vue";
import CardBoxClient from "@/components/CardBoxClient.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import { RequestApi } from "@/boot/RequestApi";
let request = new RequestApi();
import router from "@/router";

const chartData = ref(null);
const dashData = ref({ nbr_Missions: 0, nbr_commandes: 0, nbr_livraisons: 0 });

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData();
};

const mainStore = useMainStore();

const clientBarItems = computed(() => mainStore.clients.slice(0, 4));

onMounted(async () => {
  await getDashBoard();
  fillChartData();
});

async function getDashBoard() {
  await request.getListAllTransaction();
  dashData.value = {
    nbr_Missions: mainStore.listProjet.length,
    nbr_Livraisons: mainStore.listLivraisons.length,
  };
}
let loading = ref(false);
async function actionAgregateur(id) {
  console.log(id);
  loading.value = true;

  const response = await request.changestatusAgregateur(id);
  if (response.status) {
    loading.value = false;
    await request.getListAgregateur();
  } else {
    toast.error("Une erreur est survenue !", {
      autoClose: 2000,
    });
    loading.value = false;
  }
}
</script>

<template>
  <!-- <ModalLoading  :isModalProjetActive="loading"></ModalLoading> -->
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiChartTimelineVariant"
        title="Agregateur"
        main
      >
        <BaseButton
          :loading="loading"
          label="All"
          color="contrast"
          rounded-full
          small
        />
      </SectionTitleLineWithButton>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <CardBoxWidgetSecond
          v-for="item in mainStore.listAgregator"
          trend-type="up"
          color="text-emerald-500"
          :icon="item['status'] == 'Actif' ? mdiCheckDecagram : mdiPauseBox"
          :label="item['agregateur']"
          :btntitle="item['status'] == 'Actif' ? 'Desactiver' : 'Activer'"
          :navigate="projet"
          :btnTap="actionAgregateur"
          :id="item['id']"
        />
      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>
