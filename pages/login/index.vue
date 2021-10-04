<template>
  <div class="container d-flex flex-column align-center justify-center">
    <v-card class="pa-16" raised>
      <div class="d-flex justify-center mb-10">
        <img
          src="../../assets/images/Zardus_logo.png"
          alt="logo"
          width="200"
        />
      </div>
      <center><h3 style="color: #0c2334">Iniciar Sesion</h3></center>
      <v-form
        ref="form"
        v-model="isFormValid"
        style="width: 100%"
        @submit.prevent="userLogin"
      >
        <div class="field">
          <v-text-field
            v-model="login.username"
            label="Correo electrónico"
          ></v-text-field>
        </div>

        <div class="field">
          <v-text-field
            v-model="login.password"
            label="Contraseña"
            type="password"
          ></v-text-field>
        </div>

        <div class="field d-flex justify-center mt-8 mb-8">
          <v-btn
            type="submit"
            color="primary"
            rounded
            :disabled="!isFormValid || wasSubmitted"
            :loading="wasSubmitted"
          >
            INGRESAR
          </v-btn>
        </div>
        <div class="d-flex justify-center mt-5">
          <v-btn color="primary" @click="sendForgotPasswordEmail()" text
            >Olvide mi Contraseña</v-btn
          >
        </div>
      </v-form>
      <shared-forgot-password-modal
        :email="login.username"
        v-model="openModal"
      />
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  
  layout: "empty",
  data() {
    return {
      isFormValid: true,
      login: {
        username: "",
        password: "",
      },
      wasSubmitted: false,
      openModal: false,
    };
  },
  methods: {
    async userLogin() {
      try {
        this.wasSubmitted = true;
        await this.$auth.loginWith("local", {
          data: this.login,
        });
        await this.$router.push({ path: "/distributionCenter" });
      } catch (e) {
        this.wasSubmitted = false;
        this.$store.commit("setError", "Credenciales incorrectos");
      }
    },
    async sendForgotPasswordEmail() {
      try {
        await this.$axios.$post("/identity/reset-password-token", {emailAddress: this.login.username});
        this.$store.commit("setSuccess", "El correo fue enviado a " + this.login.username);
        this.openModal = true;
      } catch (e) {
        console.log(e);
        this.$store.commit("setError", "Por favor, coloque una dirección email válida");
      }
    },
    register() {
      this.$router.push("registro");
    },
  },
});
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
}

.field {
  width: 100%;
}
</style>

