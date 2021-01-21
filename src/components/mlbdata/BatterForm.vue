<template>
  <div>
    <h3>Enter a batter's name</h3>
    <PlayerForm @handleSubmit="handleSubmit($event)" />
  </div>
</template>

<script>
import PlayerForm from "./PlayerForm";
export default {
  name: "BatterForm",
  components: {
    PlayerForm,
  },
  methods: {
    handleSubmit: function(formValues) {
      this.$store
        .dispatch("fetchPlayer", {
          formValues,
          router: this.$router,
          player: "batting",
        })
        .then((promiseObject) => {
          this.$router.push({
            path: "/batting/player",
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
