<template>
  <v-main>
    <h3>{{ playerName }} last played in {{ lastYearPlayed }}</h3>
    <v-data-table
      :items="getPlayerStats"
      :headers="headers"
      class="elevation-1"
    >
    </v-data-table>
  </v-main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  //PLAYERID	YEARID	TEAMID	LGID	W	L	SO	ERA	WHIP
  data() {
    return {
      headers: [
        {
          text: "PLAYERID",
          value: "playerID",
          align: "start",
        },
        {
          text: "YEARID",
          value: "yearID",
        },
        {
          text: "TEAMID",
          value: "teamID",
        },
        {
          text: "LGID",
          value: "lgID",
        },
        {
          text: "W",
          value: "W",
        },
        {
          text: "L",
          value: "L",
        },
        {
          text: "SO",
          value: "SO",
        },
        {
          text: "ERA",
          value: "ERA",
        },
        {
          text: "WHIP",
          value: "WHIP",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getPlayerStats"]),
    playerName() {
      return (
        this.getPlayerStats[0]["nameFirst"] +
        " " +
        this.getPlayerStats[0]["nameLast"]
      );
    },
    lastYearPlayed() {
      return this.getPlayerStats[this.getPlayerStats.length - 1]["yearID"];
    },
  },
  created() {
    this.$store.dispatch("fetchPlayer", {
      formValues: {
        firstName: this.$route.query.firstName,
        lastName: this.$route.query.lastName,
      },
      player: "pitching",
    });
  },
};
</script>

<style scoped></style>
