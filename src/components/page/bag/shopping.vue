<template>
<div class="container" style="width:100%;">
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
        <Header class="shopping_bag" style="width:100%;height:58px;margin-top:auto;margin-bottom:auto;">SHOPPING BAG</Header>
        <Content>
          <Layout style="background:none;">
            <Content style="background:none;">
            <div style="width:100%;height:100px;background-color:white;"></div>
            <!-- start:left -->
             <div class="left">
             <!-- start -->
              <div class="scrum">
               <div class="image_left"><img src="../../../assets/shopping_bag/center.png"/></div>
               <div class="desc">
                <p>
                 AQUABLISS<br>
                 Perfecting Serum<br>
                 30 mL<br>
                 Unit Price : USD  95.00<br>
                </p>
               </div>
               <div class="sum">
                <ul id="car" style="width:100%;">
                <li><Button class="button" style="border-right:0px; border-color:;"  v-on:click="subtract()">-</Button></li>
                <li><input  style="border:1px solid rgba(112,112,112,1);" class="number" type="text" value="0" size="1" v-model="count" /></li>
                <li><Button class="button" v-on:click="add()" style="border-left:0px;">+</Button></li>
                </ul>
               </div>
               <div class="total"><p>Total: USD 950.00 remove</p></div>
              </div>
              <!-- end -->
               <!-- start -->
              <div class="scrum">
               <div class="image_left"><img src="../../../assets/shopping_bag/center.png"/></div>
               <div class="desc">
                <p>
                 AQUABLISS<br>
                 Perfecting Serum<br>
                 30 mL<br>
                 Unit Price : USD  95.00<br>
                </p>
               </div>
               <div class="sum">
                <ul id="car" style="width:100%;">
                <li><Button class="button" style="border-right:0px; border-color:;"  v-on:click="subtract()">-</Button></li>
                <li><input  style="border:1px solid rgba(112,112,112,1);" class="number" type="text" value="0" size="1" v-model="count" /></li>
                <li><Button class="button" v-on:click="add()" style="border-left:0px;">+</Button></li>
                </ul>
               </div>
               <div class="total"><p>Total: USD 950.00 remove</p></div>
              </div>
              <!-- end -->
               <!-- start -->
              <div class="scrum">
               <div class="image_left"><img src="../../../assets/shopping_bag/center.png"/></div>
               <div class="desc">
                <p>
                 AQUABLISS<br>
                 Perfecting Serum<br>
                 30 mL<br>
                 Unit Price : USD  95.00<br>
                </p>
               </div>
               <div class="sum">
                <ul id="car" style="width:100%;">
                <li><Button class="button" style="border-right:0px; border-color:;"  v-on:click="subtract()">-</Button></li>
                <li><input  style="border:1px solid rgba(112,112,112,1);" class="number" type="text" value="0" size="1" v-model="count" /></li>
                <li><Button class="button" v-on:click="add()" style="border-left:0px;">+</Button></li>
                </ul>
               </div>
               <div class="total"><p>Total: USD 950.00 remove</p></div>
              </div>
              <!-- end -->
               <!-- start -->
              <div class="scrum">
               <div class="image_left"><img src="../../../assets/shopping_bag/center.png"/></div>
               <div class="desc">
                <p>
                 AQUABLISS<br>
                 Perfecting Serum<br>
                 30 mL<br>
                 Unit Price : USD  95.00<br>
                </p>
               </div>
               <div class="sum">
                <ul id="car" style="width:100%;">
                <li><Button class="button" style="border-right:0px; border-color:;"  v-on:click="subtract()">-</Button></li>
                <li><input  style="border:1px solid rgba(112,112,112,1);" class="number" type="text" value="0" size="1" v-model="count" /></li>
                <li><Button class="button" v-on:click="add()" style="border-left:0px;">+</Button></li>
                </ul>
               </div>
               <div class="total"><p>Total: USD 950.00 remove</p></div>
              </div>
              <!-- end -->
             </div>
             <!-- end:left -->
             <!-- start:right -->
              <div class="right_order" style="float:right;">
               <div class="up">
                <div style="height:12px;"></div>
                <p>ORDER SUMMARY</p>
                <p><span>0 ITEMS</span>USD $ 1,230</p>
                <p><span>SHIPPING COST</span><span>USD $ 0</span></p>
                <p><span>TOTAL</span><span>USD $ 1,230</span></p>
               </div>
               <div class="center_checkout" style="background-color:;">
                <Button class="center_checkout_button" style="border-radius:0;">CHECKOUT</Button>
               </div>
               <div class="down">
                <Button class="center_checkout_button" style="border-radius:0;background-color:white;color:black;">CONTINUE SHOPPING</Button>
               </div>
              </div>
             <!-- end:right -->
            </Content>
          </Layout>
        </Content>
    </Layout>
</div>
</template>
<style scoped>
.up{
    background:rgba(241,241,241,1);
    width:67%;
    margin-right:auto;
    margin-left:auto;
    height:70%;
    margin-top:-21%;
}
.up p{
    margin-top:15px;
}
.right_order{
    text-align:center;
}
</style>
<style scoped>
.right_order{

    float:right;
    height:222px;
    margin-top:70px;
    margin-right:7%;
    width:346px;
    font-size:14px;
    font-family:Century Gothic;
    font-weight:400;    
    line-height:17px;
    color:rgba(0,0,0,1);
    opacity:1;
}
/* .center_checkout{
    width:346px;
    height:50px;
    background:rgba(16,16,16,1);
    font-size:20px;
    font-family:Century Gothic;
    font-weight:400;
    line-height:24px;
    color:white;
    background-color:black;
    opacity:1;
} */
.center_checkout_button{
    width:67%;
    height:50px;
    background-color:black;
    color:white;
    font-size:20px;
    font-family:Century Gothic;
    font-weight:400;
    line-height:24px;
    color:rgba(255,255,255,1);
    opacity:1;
    margin-top: 22px;
}
</style>
<style scoped>
.image_left{
    float:left;
}
.desc{
    float:left;
}
.desc p{
    width:180px;
    height:20px;
    font-size:18px;
    font-family:Iskoola Pota;
    font-weight:400;
    line-height:28px;
    color:rgba(0,0,0,1);
    opacity:1;
    margin-left:63px;
    text-align:left;
}
#car{
    width: 136px;
    margin-top: 53px;
    margin-left: 36%;
}
.scrum{
    margin-top:22px;
    width:617%;
    border-bottom: 1px solid rgba(224,224,224,1);
    height:130px;
    margin-left: 180%
    }
.sum{
    float:left;
    margin-right:70px;
}
.total{
    float:left;
}
.total p{
        margin-top: 59px;
    margin-left: 22px;
    width:100%;
    height:18px;
    font-size:16px;
    font-family:Iskoola Pota;
    font-weight:400;
    line-height:18px;
    color:rgba(0,0,0,1);
    opacity:1;
}
.sum ul li{
    float:left;
}
.number{
    width:88px;
    height:28px;
}
.button{
     background-color: white;
     width: 24px;
     height:28px;
     border-style: solid;
     border-color: #FF707070;
     border: 1px solid rgba(112,112,112,1);
}
</style>
<script>
    export default {
        data() {
            return {
                count:0,
            }
        },
        methods: {
            add:function(count){
            this.count++;
        },
        subtract:function(count){
          if (this.count<=0){
            // alert('can not subtract')
            this.count=0;
          }else {
            this.count-=1;
          }
        },
        }
    }
</script>
<style scoped>
.button{
    border-radius:0;
}
    ul,li{
      list-style: none;
    }
    li{
      float: left;
    }
    input{
      text-align: center;
    }
</style>
<style scoped>
.ivu-col-span-6[data-v-1ed82faf] {
    display: block;
    width: 28%;
    margin-right: -17px;
    margin-left: -17px;
}
.icon[data-v-1ed82faf] {
    float: right;
    margin-top: -5px;
    margin-right: 14%;
    /* margin-right: -579px; */
}
  .add{
      margin-right:auto;
      margin-left:auto;
      text-align:center;
      width:500px;
  }  
  .left{
      float:left;
      width:118px;
      height:222px;
      margin-right:3%;
  }
  .bag_center{
      width:118px;
      height:222px;
      float:left;
      margin-right:72px;
  }
  .right{
      width:118px;
      height:222px;
      float:left;
  }
  .image{

  }
  .describe{
      /* width:80px;
      height:59px; */
      font-size:12px;
      font-family:Iskoola Pota;
      font-weight:400;
      line-height:15px;
      color:rgba(0,0,0,1);
      /* letter-spacing:80px; */
      opacity:1;
  }
  .describe p{
      margin-top:18px;
  }
  .add_to_bag{

  }
  .add_button{
      margin-top:19px;
      margin-bottom:42px;
  }
</style>
<style scoped>
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
.shopping_bag{
height:58px;
background-color:black;
/* filter:blur(10px); */
opacity:1;
text-align:center;
margin-right:auto;
margin-left:auto;
width:224px;
height:32px;
font-size:26px;
font-family:Century Gothic;
font-weight:400;
/* line-height:32px; */
color:rgba(255,255,255,1);
letter-spacing:;
opacity:1;
}
.empty{
    width:182px;
    height:23px;
    font-size:20px;
    font-family:Iskoola Pota;
    font-weight:400;
    line-height:23px;
    color:rgba(0,0,0,1);
/* letter-spacing:300px; */
opacity:1;
text-align:center;
margin-right:auto;
margin-left:auto;
margin-bottom:49px;
}
.back_top{
    width:280px;
height:46px;
border:1px solid rgba(0,0,0,1);
opacity:1;      
margin-right:auto;
margin-left:auto;
}
.back_top h1{
    width:150px;
height:22px;
font-size:18px;
font-family:Century Gothic;
font-weight:400;
line-height:22px;
color:rgba(0,0,0,1);
margin-right:auto;
margin-left:auto;
margin-top:12px;
margin-bottom:auto;
opacity:1;
}
.line{
    margin-right:auto;
    margin-left:auto;
    text-align:center;
    height:0px; 
    width:1200px;
    border-bottom: 1px solid rgba(224,224,224,1);

}
.may_like{
    width:159px;
height:18px;
font-size:16px;
font-family:Iskoola Pota;
font-weight:400;
line-height:18px;
color:rgba(0,0,0,1);
/* letter-spacing:90px; */
opacity:1;
margin-right:auto;
margin-left: auto;
margin-top: 87px;
margin-bottom: 42px;
}
</style>
<style scoped>
/* .container{
    background-image: url('../../../assets/register_success.png');
    width:100%;
    padding:0;
   } */
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
       padding:0;
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
        margin-left:auto;
        margin-right:auto;
        width:362px;
        height:555px;
        background:linear-gradient(1deg,rgba(255,255,255,0.87) 0%,rgba(255,255,255,0.21) 100%);
        opacity:1;
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
    .word{
        height:70px;
        font-size:12px;
        font-family:Century Gothic;
        font-weight:400;
        line-height:15px;
        color:rgba(255,255,255,1);
        margin-bottom:123px;
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
</style>