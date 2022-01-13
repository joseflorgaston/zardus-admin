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
            v-model="login.userName"
            label="Usuario"
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
            @click="userLogin()"
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
      
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  data() {
    return {
      isFormValid: true,
      login: {
        userName: "",
        password: "",
      },
      wasSubmitted: false,
      openModal: false,
    };
  },
  layout: 'empty',
  methods: {
    async userLogin() {
      try {
        this.wasSubmitted = true;
        console.log(this.$auth);
        let res = await this.$auth.loginWith("local", {
          data: this.login,
        });
        console.log(res);
        this.$auth.setUser(res.data)
        this.$store.commit('setUser', res.data);
        await this.$router.push({ path: "/" });
      } catch (e) {
        console.log(e);
        this.wasSubmitted = false;
        this.$store.commit("setError", "Credenciales incorrectos");
      }
    },
    async sendForgotPasswordEmail() {
      try {
        await this.$axios.$post("/identity/reset-password-token", {emailAddress: this.login.userName});
        this.$store.commit("setSuccess", "El correo fue enviado a " + this.login.userName);
        this.openModal = true;
      } catch (e) {
        console.log(e);
        this.$store.commit("setError", e.toString());
      }
    },
    register() {
      this.$router.push("registro");
    },
  },
};
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

