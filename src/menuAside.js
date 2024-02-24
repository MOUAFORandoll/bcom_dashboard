import {
  mdiAccountCircle,
  mdiMonitor,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiAccountSwitch,
  mdiBell,
  mdiHomeGroup,
  mdiCommentProcessing,
  mdiPhoneSettings,
} from "@mdi/js";

export default [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
  {
    to: "",

    label: "Missions",
    icon: mdiHomeGroup,
    menu: [
      {
        to: "/mission/new",
        label: "Nouvelle Missiom",
      },
      {
        to: "/mission/list",
        label: "Liste des Missions",
      },
    ],
  },
 
  {
    to: "/utilisateurs",
    label: "Utilisateurs",
    icon: mdiAccountSwitch,
  },
  {
    to: "/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    to: "/ui",
    label: "UI",
    icon: mdiTelevisionGuide,
  },
  {
    to: "/politique-de-confidentialite",
    label: "politique-de-confidentialite",
    icon: mdiTelevisionGuide,
  },
];
