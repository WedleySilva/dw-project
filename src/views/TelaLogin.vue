<script>
export default {};
</script>
<template>
  <div class="center">
    <h1>Login</h1>
    <form method="post">
      <div class="txt_field">
        <input type="email" required />
        <span></span>
        <label>Email</label>
      </div>
      <div class="txt_field">
        <input type="password" required />
        <span></span>
        <label>Senha</label>
      </div>
      <div class="pass">Esqueçeu a Senha?</div>
      <input type="submit" value="login" />
      <div class="signup_link">
        Não possui Conta? <a href="#">Tenha uma Conta</a>
      </div>
    </form>
  </div>
</template>
