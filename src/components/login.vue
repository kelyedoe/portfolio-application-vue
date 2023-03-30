<script>
  import { ref } from 'vue';
  
  const username = ref('')
  const email = ref('')
  const checked = ref('')
</script>
<template>
    <main id="app">
    <div class="card">
      <!-- <div class="form--image">
     <img src="" alt="Logo" class="logo"> s
    </div> -->
    <h3 class="form--title">Login</h3>
      
      <form action="" class="form--element">
        <div>
          <!-- <label class="form--label" for="username">{{ username }}</label> -->
          <input class="form--element__input" v-model="username" type="text" placeholder="Nom d'utilisateur" required/>
        </div>

        <div>
          <!-- <label class="form--label" for="email">{{ email }}</label> -->
          <input class="form--element__input" v-model="email" type="email" placeholder="Email" required />
        </div>

        <div>
          <label for="password"></label>
          <input class="form--element__input" name="password" type="password" placeholder="Mot de passe" required />
        </div>

        <div class="checkbox">
          <input class="form--element__box" type="checkbox" id="checkbox" v-model="checked">
          <label for="checkbox">Remember me</label>
        </div>

        <div class="submit">
          <input class="submit--button" type="submit" value="submit" />
        </div>
        
      </form>

      <div class="forgot--password">
        <p>Forgotten password ?</p>
      </div>
        
    </div>   
  </main>
</template>