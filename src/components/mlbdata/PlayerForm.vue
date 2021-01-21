<template>
  <div>
    <v-card>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="firstName"
          :rules="nameRules"
          label="First Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="lastName"
          :rules="nameRules"
          label="Last Name"
          required
        ></v-text-field>

        <v-btn :disabled="!valid" class="mr-4" @click="handleSubmit">
          Submit
        </v-btn>

        <!-- following buttons are probably not good for user experience -->
        <v-btn class="mr-4" @click="reset">Reset Form</v-btn>

        <v-btn @click="resetValidation">
          Reset Validation
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "PlayerForm",
  data() {
    return {
      valid: true,
      firstName: "",
      lastName: "",
      nameRules: [(name) => !!name || "Name is required"],
    };
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        this.$emit("handleSubmit", {
          firstName: this.firstName,
          lastName: this.lastName,
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style></style>
