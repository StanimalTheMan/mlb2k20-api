<template>
  <v-app-bar app flat class="toolbar">
    <v-app-bar-title>
      <router-link to="/">
        <h1>MLB2K20API</h1>
      </router-link>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn text>
      <router-link to="/batting">
        <h3>Batters</h3>
      </router-link>
    </v-btn>

    <v-btn text>
      <router-link to="/pitching">
        <h3>Pitchers</h3>
      </router-link>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.toolbar {
  background: linear-gradient(
    90deg,
    rgba(36, 35, 0, 1) 0%,
    rgba(121, 9, 12, 1) 0%,
    rgba(0, 53, 255, 1) 100%
  );
}

h1,
h3 {
  color: "FFFFFF";
}
</style>
