<template>
  <div class="login">
    <h3>Login</h3>
    <form action="">
      <div class="input_item" >
        <input type="text" placeholder="write email" v-model="formData.email" class="form-control" :class="{'is-invalid': v$.email.$error}">
        <span v-for="error in v$.email.$errors" :key="error"  class="error">{{ error.$message }}</span>
      </div>
     <div class="input_item"  >
      <input type="password" placeholder="write password" v-model="formData.password" class="form-control" :class="{'is-invalid': v$.password.$error}">
      <span v-for="error in v$.password.$errors" :key="error" class="error">{{ error.$message }}</span>
     </div>
        
        <button type="submit" @click.prevent="login">Login</button>
        <router-link to="/register" class="text-center mt-2 d-block">you want create an account?</router-link>
    </form>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { reactive } from 'vue' // "from '@vue/composition-api'" if you are using Vue <2.7
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'

export default {
  name: "loginView",
  setup() {
    const store = useStore()

    const formData = reactive({
      email: '',
      password: ''
    })

    const rules = {
      email: { required, email }, 
      password: {required, minLength: minLength(10), maxLength: maxLength(20)}
    }

    const login = async () => {
      const validate = await v$.value.$validate()

      if (validate) {
        store.dispatch("login", formData)
      }
    }

    const v$ = useVuelidate(rules, formData)


    return{formData, login, v$ }
  }
};
</script>

<style scoped>
.login {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

form {
    max-width: 500px;
}

form .input_item {
  margin-bottom: 20px;
}

form input {
  width: 100%;
  min-width: 350px;
  border: 1px solid rgb(199, 198, 198);
  border-radius: 6px;
  padding: 5px;
}

form button {
    padding: 5px;
    width: 100%;
    background-color: #43B983;
    color: white;
    border: none;
    border-radius: 7px;
}

.error {
  font-size: 14px;
  color: red;
}
</style>
