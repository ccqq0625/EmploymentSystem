<template>
  <div class="login">
      <h1 class="login-text">Login Form</h1>
		<div class="app-location">
			<h2>Welcome</h2>
			<div class="line"><span></span></div>
			<div class="location">
				<!-- <img src="../.././assets/img/location.png" class="img-responsive" alt="" /> -->
			</div>
			<form>
				<input type="text" class="text" value="E-mail address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'E-mail address';}" >
				<input type="password" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}">
				<div class="submit"><input type="submit" onclick="myFunction()" value="Sign in" ></div>
				<div class="clear"></div>
				<div class="new">
					<h3><a href="#">Forgot password ?</a></h3>
					<h4 @click="toRegister"><a>New here ? Sign Up</a></h4>
					<div class="clear"></div>
				</div>
			</form>
		</div>
  </div>
</template>

<script>
export default {
	name:"Login",
	methods:{
		toRegister(){
			this.$router.replace("/register");
		}
	}
}
</script>

<style scoped>
@import url('../.././assets/css/style.css');
.login-text{
	padding: 5px;
}
</style>