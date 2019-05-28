<template>
<div class="container">
<Layout style="background:none;">
        <Header style="background:none;">
        <Row>
        <Col span="6" class="logo" style="margin-left: 5%;">ROSECLÉR</Col>
        <Col span="12" class="nav_list_right">
         <Col class="nav_list" span="6">PERFECTING SERUMS</Col>
         <Col class="nav_list" span="6">SPECIALIST CREAMS</Col>
         <Col class="nav_list" span="6">OUR INGREDIENTS</Col>
         <Col class="nav_list" span="5" style="margin-left:-33px;">OUR STORY</Col>
         <Col class="nav_list icon">
         <i class="iconfont iconbag" style="font-size:26px;color:rgba(255,255,255,1);;font-weight:600;display:inline;padding:10px"></i>
         <i class="iconfont iconavatar" style="font-size:26px;color:rgba(255,255,255,1);font-weight:600;display:inline;"></i>
         </Col>        
        </Col>      
        </Row>
        </Header>
        <Content>
        <div class="center">
        <h1 class="title" >CREATE NEW ACCOUNT</h1><br><br>
        <Form ref="loginForm" :model="formData" :rules="rules">

        <FormItem prop="name">
          <input class="input" v-model="formData.name" :rules="rules" placeholder="FIRST NAME" style="width: 360px;background:border-box;"/><br><br>
        </FormItem>

        <FormItem prop="email">
          <input class="input"  v-model="formData.email" :rules="rules" placeholder="EMAIL ADDRESS" style="width: 360px;"/><br><br>
        </FormItem>
        <FormItem v-if="visible">
          <input class="input" type="password" v-model="formData.password" placeholder="PASSWORD" style="width:360px;"/>
        </FormItem>
        <FormItem v-else>
          <input class="input" type="text" v-model="password" placeholder="PASSWORD" style="width:360px;"/>
        </FormItem>
        </Form>
       <p class="white_word_up">forget password ?</p>
        <Button style="background-color:#101010;color:white;" @click="register_success">CREATE ACCOUNT</Button><br>
        <p class="white_word_center">OR</p>
        <Button  style="background-color:#4167B1;color:white;"><i class="iconfont iconfacebook"></i>SIGN WITH FACEBOOK</Button><br><br>
        <Button  type="success" ><i class="iconfont iconwechat"></i>SIGN WITH WECHAT</Button><br><br>
        <p class="word">By clicking  "Continue with Facebook", or by <br>
        clicking "Continue with Wechat", or by signing in <br>
        an account you agree to be bound by the <br>
        Rosecler Terms and Conditions and Privacy policy</p>
        <h1 class="bottom_title">Already a member ?</h1><br><br>
        <h1 class="sign_in"> <router-link to="/login" style="color:rgba(0,0,0,1)">SIGN IN</router-link>  </h1>
        </div>
        
        </Content>
    </Layout>
</div>
</template>
<script>
    export default {
        data() {
            return {
                formData:{
                    email:'',
                    password:'',
                },
               // password:'',
                visible: true ,   
                rules:{
                     
                     }
            }
        },
        methods: {
            register_success(){
                this.$router.push({path:'/login/account/register_success'})
                this.$Message.success('Register Success!')
            }
        },
    }
</script>

<style scoped>
.ivu-col-span-6[data-v-6aa3b082] {
    display: block;
    width: 28%;
    margin-right: -17px;
    margin-left: -17px;
}
.icon[data-v-6aa3b082] {
    float: right;
    margin-top: -5px;
    margin-right: 14%;
    /* margin-right: -579px; */
}
.container{
    background-image: url('../../../assets/account.png');
    width:100%;
   }
   .input{
    display: inline-block;
    width: 100%;
    height: 46px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 2px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
   }
        .input::-webkit-input-placeholder{
            color:white;
        }
        .input::-moz-placeholder{   
            color:red;
        }
        .input:-moz-placeholder{    
            color:red;
        }
        .input:-ms-input-placeholder{  
            color:red;
        }
   .container{
       margin-left:auto;
       margin-right:auto;
   }
/* .container{
    background-image: url('../../assets/login.png');
   } */
   .logo{
       text-align:center;
       margin-top:12px;
       /* margin-left:360px; */
       width:40%;
       height:34px;
       font-size:30px;
       font-family:Iskoola Pota;
       font-weight:400;
       line-height:34px;
       color:rgba(255,255,255,1);
   }
   .nav_list_right{
           margin-left: 50%;
    margin-top: -49px;
   }
   .nav_list{
       padding: 0;
       margin-top:12px;
       height:0;
       /* height:15px; */
       font-size:12px;
       font-family:Century Gothic;
       font-weight:400;
       line-height:38px;
       color:rgba(255,255,255,1);;
       opacity:1;
   }
   .icon{
       float: right;
    margin-top: -5px;
    margin-right:-6%;
    color:rgba(0,0,0,1);
       /* margin-right: -579px; */
   }
   /* .iconfont{
       font-size:26px;
       color:black;
       font-weight:600;
       display:inline;"
   } */
   .story{
       margin-left:12px;
   }
   .center Input{
           height: 46px;
    background: border-box;
    border: 1px solid white;
   }
   .center Button{
       border:0;
   }
   .center .title{
    width:600px;
    height:32px;
    font-size:28px;
    font-family:Iskoola Pota;
    font-weight:400;
    line-height:32px;
    color:rgba(255,255,255,1);;
    /* letter-spacing:100px; */
    opacity:1;
    margin-right:auto;
    margin-left:auto;
    }

    .center{
        text-align:center;
        margin-top:241px;
    }
    .center Input{
        height:46px;
    }
    .center Button{
        width:360px;
        height:46px;
    }
    Button i{
        margin-right:21px;
    }
    .xym4 {
    position: relative;
    margin-top: -3.5%;
    margin-left: 61%;
    width: 20px;
}
    .white_word_up{
        margin:25px auto 12px;
        height:15px;
        font-size:12px;
        font-family:Century Gothic;
        font-weight:400;
        line-height:15px;
        color:rgba(255,255,255,1);
        opacity:1;
    }
    .white_word_center{
        margin:24px auto;
        height:18px;
        font-size:16px;
        font-family:Iskoola Pota;
        font-weight:400;
        line-height:18px;
        color:rgba(255,255,255,1);
        opacity:1;
    }
    .word{
        height:70px;
        font-size:12px;
        font-family:Century Gothic;
        font-weight:400;
        line-height:15px;
        color:rgba(255,255,255,1);
    }
    .bottom_title{
        width:164px;
height:17px;
font-size:14px;
font-family:Century Gothic;
font-weight:400;
line-height:17px;
color:rgba(0,0,0,1);
text-align:center;
margin-right:auto;
margin-left:auto;
    }
    .ivu-form-item-content {
        position: relative;
        line-height: 0px;
        font-size: 12px;
    }
    .ivu-form-item {
        margin-bottom: 12px;
        vertical-align: top;
        zoom: 1;
    }
    .ivu-form-item-error-tip {
    /* position: absolute; */
    top: 100%;
    left: 0;
    line-height: 1;
    /* padding-top: 6px; */
    color: #ed4014;
}
.ivu-form-item-error-tip {
    position:inherit;
    top: 100%;
    left: 0;
    line-height: 1;
    padding-top: 6px;
    color: #ed4014;
}
.ivu-input-prefix i, .ivu-input-suffix i {
    font-size: 16px;
    line-height: 46px;
    color: #808695;
}
.ivu-col-span-6 {
    display: block;
    width: 28%;
}
.sign_in{
    text-align:center;
    margin-right:auto;
    margin-left:auto;
    width:102px;
height:27px;
font-size:24px;
font-family:Iskoola Pota;
font-weight:400;
line-height:27px;
color:rgba(0,0,0,1);
text-decoration:underline;
}
</style>