/* eslint-disable prettier/prettier */
import { api } from "./axios";
import { ApiEndPoint } from "./ApiEndPoint";
// import VueCookies from 'vue-cookies'
import jwt_decode from "jwt-decode";
import { useMainStore } from "@/stores/main";

// import { ref } from '@vue/runtime-core';
export class RequestApi {
  constructor() {
    this.clientId = 0; // VueCookies.get('id');
    this.number = 0; //VueCookies.get('phone');
    this.ApiEndPoint = new ApiEndPoint();
  }

  /**
   *
   * @param {*} data   les donnees de l'utilisateur pour se connecter
   * @returns
   */
  logIn = async (data) => {
    // //console.log('sdddsd');
    let dataRes = { status: true };

    const mainStore = useMainStore();
    api.defaults.headers.common["Authorization"] = null;
    await api
      .post(this.ApiEndPoint.login, data)
      .then(async (response) => {
        let id = jwt_decode(String(response.data.token)).id;
        // let keySecret = jwt_decode(String(response.data.token)).keySecret;
        console.log(response.data);
        mainStore.setUser(response.data);

        dataRes = {
          status: true,
          id: id,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };

  /**
   *
   *
   * Start  Mission
   *
   *
   */
  /**
   *
   * @param {*}
   * @returns
   */
  NewMission = async (data) => {
    // //console.log('sdddsd');
    let dataRes = { status: true };

    await api
      .post(this.ApiEndPoint.missions, data)
      .then(async (response) => {
        if (response.status == 201 || response.status == 200) {
          dataRes = {
            status: true,
          };
        } else {
          dataRes = {
            status: false,
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };

  /**
   *
   * @param {*}
   * @returns
   */
  ListMission = async (data) => {
    let dataRes = { status: true };

    await api
      .get(this.ApiEndPoint.missions, data)
      .then(async (response) => {
        if (response.status == 201 || response.status == 200) {
          dataRes = {
            status: true,
            data: response.data.data,
          };
        } else {
          dataRes = {
            status: false,
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  /**
   *
   *
   * Start controller de bureau
   *
   *
   */
  /**
   *
   * @param {*}
   * @returns
   */
  SetCTerrain = async (data) => {
    // //console.log('sdddsd');
    let dataRes = { status: true };

    await api
      .post(this.ApiEndPoint.cbureau + "/set-cterrain", data)
      .then(async (response) => {
        if (response.status == 201 || response.status == 200) {
          dataRes = {
            status: true,
          };
        } else {
          dataRes = {
            status: false,
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  /**
   *
   * @param {*}
   * @returns
   */
  ActivateBiker = async (data) => {
    // //console.log('sdddsd');
    let dataRes = { status: true };

    await api
      .post(this.ApiEndPoint.cbureau + "/activate-biker", data)
      .then(async (response) => {
        if (response.status == 201 || response.status == 200) {
          dataRes = {
            status: true,
          };
        } else {
          dataRes = {
            status: false,
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };

  /**
   *
   * @param {*}
   * @returns
   */
  AffectBikerToMission = async (data) => {
    // //console.log('sdddsd');
    let dataRes = { status: true };

    await api
      .post(this.ApiEndPoint.cbureau + "/affect-biker", data)
      .then(async (response) => {
        if (response.status == 201 || response.status == 200) {
          dataRes = {
            status: true,
          };
        } else {
          dataRes = {
            status: false,
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };

  /**
   *
   * @param {*}
   * @returns
   */
  UnAffectBikerToMission = async (data) => {
    // //console.log('sdddsd');
    let dataRes = { status: true };

    await api
      .post(this.ApiEndPoint.cbureau + "/unaffect-biker", data)
      .then(async (response) => {
        if (response.status == 201 || response.status == 200) {
          dataRes = {
            status: true,
          };
        } else {
          dataRes = {
            status: false,
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  /**
   *
   * @param {*}
   * @returns
   */
  NewControlBiker = async (data) => {
    // //console.log('sdddsd');
    let dataRes = { status: true };

    await api
      .post(this.ApiEndPoint.cbureau + "/new-control", data)
      .then(async (response) => {
        if (response.status == 201 || response.status == 200) {
          dataRes = {
            status: true,
          };
        } else {
          dataRes = {
            status: false,
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  /**
   *
   * @param {*}
   * @returns
   */
  AnnulControlBiker = async (data) => {
    // //console.log('sdddsd');
    let dataRes = { status: true };

    await api
      .post(this.ApiEndPoint.cbureau + "/annul-control", data)
      .then(async (response) => {
        if (response.status == 201 || response.status == 200) {
          dataRes = {
            status: true,
          };
        } else {
          dataRes = {
            status: false,
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  /**
   *
   * @param {*}
   * @returns
   */
  ActiveControlBiker = async (data) => {
    // //console.log('sdddsd');
    let dataRes = { status: true };

    await api
      .post(this.ApiEndPoint.cbureau + "/active-control", data)
      .then(async (response) => {
        if (response.status == 201 || response.status == 200) {
          dataRes = {
            status: true,
          };
        } else {
          dataRes = {
            status: false,
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };
  /**
   *
   * @param {*}
   * @returns
   */
  ListMissionCBureau = async (data) => {
    // //console.log('sdddsd');
    let dataRes = { status: true };

    await api
      .get(this.ApiEndPoint.cbureau + "/list-control", data)
      .then(async (response) => {
        if (response.status == 201 || response.status == 200) {
          dataRes = {
            status: true,
            data: response.data.data,
          };
        } else {
          dataRes = {
            status: false,
          };
        }
      })
      .catch(() => {
        dataRes = {
          status: false,
        };
      });
    return dataRes;
  };

  /////

  /**
   *
   * @param {*} livraisons
   * @returns retourne les  livraisons en attente
   */
  getLivraisonsAwaiting = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get(this.ApiEndPoint.livraisons + "/awaiting")
      .then(async (response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });

    return dataRes;
  };
  /**
   *
   * @returns retourne les  biker
   */
  getListBiker = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get("/biker/read")
      .then(async (response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });

    return dataRes;
  };
  /**
   *
   * @returns retourne les  cTerrain
   */
  getListCTerrain = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get("/cTerrain/read")
      .then(async (response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });

    return dataRes;
  };
  /**
   *
   
   * @returns retourne les  cBureau
   */
  getListCBureau = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get("/cBureau/read")
      .then(async (response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });

    return dataRes;
  };
  /**
   *
   
   * @returns retourne les  admin
   */
  getListAdmin = async () => {
    let dataRes = { status: true, data: [] };

    await api
      .get("/admin/read")
      .then(async (response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });

    return dataRes;
  };
  /**
   *
   * @param {*}  data les informations du affectLivreur
   * @returns  les informations actualisees
   */
  affectLivreur = async (data) => {
    let dataRes = { status: true, data: [] };

    await api
      .patch(this.ApiEndPoint.livraisons + "/affect_livreur", data)
      .then(async (response) => {
        dataRes = {
          status: true,
          data: response.data.data,
        };
      })
      .catch(() => {
        dataRes = {
          status: false,
          data: [],
        };
      });
    //console.log(dataRes)
    return dataRes;
  };
}
