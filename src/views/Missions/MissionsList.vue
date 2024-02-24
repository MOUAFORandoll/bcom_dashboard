<script setup>
import { mdiHomeGroup, mdiReload, mdiEye, mdiAxis } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";

import CardBoxModal from "@/components/CardBoxModal.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
// import UserAvatar from "@/components/UserAvatar.vue";

import { onMounted, computed, ref } from "vue";
import { RequestApi } from "@/boot/RequestApi";
let request = new RequestApi();

const isModalActive = ref(false);

const perPage = ref(5);

const currentPage = ref(0);
let listMissions = ref([]);
let loading = ref(true);
let reloading = ref(true);
let loadingUpdate = ref(false);
let mission = ref({ id: "" });
let keySecretBabana = ref("");

const itemsPaginated = computed(() =>
  listMissions.value.slice(
    perPage.value * currentPage.value,
    perPage.value * (currentPage.value + 1)
  )
);

const numPages = computed(() =>
  Math.ceil(listMissions.value.length / perPage.value)
);

const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
  const pagesList = [];

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i);
  }

  return pagesList;
});

onMounted(async () => {
  await getMissionsList();
});

async function getMissionsList() {
  const response = await request.ListMission();
  if (response.status) {
    reloading.value = false;
    loading.value = false;
    listMissions.value = response.data;
  } else {
    reloading.value = false;
    loading.value = false;
  }
}
async function actualiser() {
  reloading.value = true;

  await getMissionsList();
}
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiHomeGroup"
        title="Liste des missions"
        main
      >
        <BaseButton
          :loading="reloading"
          target="_blank"
          :icon="mdiReload"
          label="Actualise"
          color="contrast"
          rounded-full
          small
          @click="actualiser()"
        />
      </SectionTitleLineWithButton>

      <Loader v-if="loading" />
      <CardBox v-else class="mb-2" has-table>
        <table>
          <thead>
            <tr>
              <th>Titre de la mission</th>
              <th>Description de la mission</th>
              <th>Nombre de point de la mission</th>
              <th>Date de Creation de la mission</th>

              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mission in itemsPaginated" :key="mission.id">
              <td data-label="libelle">
                {{ mission.libelle }}
              </td>
              <td data-label="description">
                {{ mission.description }}
              </td>
              <td data-label="nbre_point">
                {{ mission.nbre_point }}
              </td>

              <td data-label="dateCreated">
                {{ mission.date_created }}
              </td>
              <td data-label="Status">
                {{ mission.status == true ? "En Cours" : "Terminee" }}
              </td>
              <td class="before:hidden lg:w-1 whitespace-nowrap">
                <BaseButtons type="justify-start lg:justify-end" no-wrap>
                  <BaseButton
                    class="mx-1"
                    :loading="loadingUpdate"
                    color="info"
                    :icon="mdiReload"
                    small
                  />
                </BaseButtons>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
          <BaseLevel>
            <BaseButtons>
              <BaseButton
                v-for="page in pagesList"
                :key="page"
                :active="page === currentPage"
                :label="page + 1"
                :color="page === currentPage ? ' lightDark' : 'whiteDark'"
                small
                @click="currentPage = page"
              />
            </BaseButtons>
            <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
          </BaseLevel>
        </div>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
