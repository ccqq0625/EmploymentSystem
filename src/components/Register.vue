<template>
    <div>
        <div><img src="../assets/logo.png" alt=""></div>
        <el-divider></el-divider>
    <el-row type="flex" justify="center">
      <el-form ref="formData" :model="formData" :rules="rules" label-width="80px" @keyup.enter.native="register()">
        <el-form-item prop="userName" label="手机号"><el-input v-model="formData.userName" placeholder="请输入手机号" prefix-icon="icon-login_user" clearable></el-input></el-form-item>
        <el-form-item prop="password" label="密码"><el-input v-model="formData.password" placeholder="请输入密码" type="password" prefix-icon="icon-login_pwd" clearable></el-input></el-form-item>
        <el-form-item prop="cheackPassword" label="确认密码"><el-input v-model="formData.cheackPassword" placeholder="再次输入密码" type="password" prefix-icon="icon-login_pwd" clearable></el-input></el-form-item>
        <el-form-item>
            <el-button type="primary" @click="register('formData')" icon="el-icon-upload">注册</el-button>
            <el-button @click="resetForm('formData')">重置</el-button></el-form-item>
         <router-link to="Login">已有密码？登录</router-link>
      </el-form>
    </el-row>
    <foot class="footer">
        <el-divider></el-divider>
            <div class="txt textWarp w1190">       
			<ul>
				<li><a href="#">关于澳猫海淘</a></li>
				<li><a href="#">商家入驻</a></li>
				<li><a href="#">网站合作</a></li>
				<li><a href="#">友情链接</a></li>
				<li><a href="#">澳猫公益</a></li>
				<li><a href="#">法律声明</a></li>
				<li><a href="#">诚聘英才</a></li>
				<li><a href="#">联系我们</a></li>
				<li><a href="#">网站地图</a></li>
			</ul>
			<p>
				澳大利亚Health more - 河南康多多贸易有限公司 - 河南澳蜜电子商务有限公司 版权所有<br>
				Copyright © 20015-2018  澳猫aumalls.com 版权所有, 豫ICP备15030837号-1
			</p>
			<div class="ALLN"></div>
		    </div>
        </foot>
    </div>

</template>
<script>
export default {
  data() {
      var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'));
			} else if (value !== this.formData.password) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};
 
    return {
      formData: {
        userName: '',
        password: '',
        cheackPassword:''
      },
      rules: {
        userName: [{ required: true, message: '手机号不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
        cheackPassword: [{ required: true, validator: validatePass, trigger: 'blur' }]
 
      }
    };
  },
  methods: {
    register(formName) {
      this.$refs[formName].validate(valid => {
				if (valid) {
					this.$message({
						type: 'success',
						message: '注册成功'
                    });
                     this.$router.push({name:'Login'});
				} else {
					console.log('error submit!!');
					return false;
				}
			});
    },
    resetForm(formName) {
			this.$refs[formName].resetFields();
		}
 
  }
};
</script>

<style>
body{
    background: url("../assets/bg.png");
    background-size: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position-x: 300px;
    background-position-y: center;
}
.el-row{
    position: absolute;
    left: 100px;
    top: 250px;
}
.footer{
    position: absolute;
    bottom: 0;
    left: 480px;
    margin-bottom: 0;
	height: 96px;
	text-align: center;
	padding-top:20px;
}
.footer txt{
	position: relative;
}
.footer p{
	padding-top: 5px;
	font: 12px/20px "å¾®è½¯é›…é»‘";
	color: #999;
}
.footer a,.footer a:hover,.footer span{
	color: #000;
}
.footer ul{
	padding:5px;
}
.footer li{
	display: inline-block;
	margin-right: 5px;
}
.footer ALLN{
	height: 20px;
	width: 20px;
	position: absolute;
	bottom: 0;
	right: 30%;
}
</style>