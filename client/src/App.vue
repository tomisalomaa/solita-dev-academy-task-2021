<!-- Base template from https://vuetifyjs.com/en/getting-started/wireframes/#examples  -->
<!-- Nav list from https://vuetifyjs.com/en/components/lists/#dense -->
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Solita Dev-Akatemia apply
          </v-list-item-title>
          <v-list-item-subtitle>
            Tomi Salomaa
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
      <v-list-item-group>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Vaccination Data Central</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view>

      </router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { text: 'Main', link: "/" },
        { text: 'Vaccinations', link: "/vaccinations" },
        { text: 'Antiqua', link: "/antiqua" },
        { text: 'Solar Buddhica', link: "/solarbuddhica" },
        { text: 'Zerpfy', link: "/zerpfy" }
      ],
    }),
  }
</script>