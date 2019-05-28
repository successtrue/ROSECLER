<template>
<div class="container" style="">
<Layout style="background:none;">
        <Header style="background:white;">
        <Row>
        <Col span="6" class="logo" style="margin-left: 5%;">ROSECLÉR</Col>
        <Col span="12" class="nav_list_right">
         <Col class="nav_list" span="6">PERFECTING SERUMS</Col>
         <Col class="nav_list" span="6">SPECIALIST CREAMS</Col>
         <Col class="nav_list" span="6">OUR INGREDIENTS</Col>
         <Col class="nav_list" span="5" style="margin-left:-33px;">OUR STORY</Col>
         <Col class="nav_list icon">
         <i class="iconfont iconbag" style="font-size:26px;color:rgba(0,0,0,1);font-weight:600;display:inline;padding:10px"></i>
         <i class="iconfont iconavatar" style="font-size:26px;color:rgba(0,0,0,1);font-weight:600;display:inline;"></i>
         </Col>        
        </Col>      
        </Row>
        </Header>
    </Layout>
</div>
</template>
<script>
    export default {
        data() {
            return {
        
            }
        },
        methods: {
        },
    }
</script>

<style scoped>
.ivu-col-span-6[data-v-6353881f] {
    display: block;
    width: 28%;
    margin-right: -17px;
    margin-left: -17px;
}
.icon[data-v-6353881f   ] {
    float: right;
    margin-top: -5px;
    margin-right: 14%;
    /* margin-right: -579px; */
}
.shopping{
    width:320px;
height:22px;
font-size:18px;
font-family:Century Gothic;
font-weight:400;
line-height:22px;
color:rgba(0,0,0,1);
margin-bottom:18px;
margin-right:21px;
margin-left:21px;
}
</style>

<style scoped>
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
   .container{
       margin-left:auto;
       margin-right:auto;
   }
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
       color:black;
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
       color:black;
       opacity:1;
   }
   .icon{
       float: right;
    margin-top: -5px;
    margin-right:-6%;
    color:rgba(0,0,0,1);
       /* margin-right: -579px; */
   }
   .story{
       margin-left:12px;
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
</style>