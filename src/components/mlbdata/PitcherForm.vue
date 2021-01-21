<template>
  <div>
    <h3>Enter a pitcher's name</h3>
    <PlayerForm @handleSubmit="handleSubmit($event)" />
  </div>
</template>

<script>
import PlayerForm from "./PlayerForm";
export default {
  name: "PitcherForm",
  components: {
    PlayerForm,
  },
  methods: {
    handleSubmit: function(formValues) {
      // this.$store.dispatch("fetchPlayer", { formValues, router: this.$router, player: "pitching" });
      this.$store
        .dispatch("fetchPlayer", { formValues, player: "pitching" })
        .then((promiseObject) => {
          this.$router.push({
            // name: 'PitcherData',
            path: "pitching/player",
            query: {
              firstName: promiseObject.firstName,
              lastName: promiseObject.lastName,
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
