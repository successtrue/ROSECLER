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
        
        <div class="center" style="height:245px;">
        <h1 class="empty">-   EMPTY   -</h1>
        <div class="back_top"><h1 class="">BACK TO SHOP</h1></div>
        </div>
        <hr class="line"></hr>
        <div class="center" style="height:18px;margin-top:87px;margin-bottom:43px;">
        <h1 class="may_like">YOU May Also Like</h1>
        </div>
        <!-- start:add -->
        <div class="add">
         <div class="left">
          <div class="image"><img src="../../../assets/shopping_bag/left.png" style="margin-top:43px;"></div>
          <div class="describe">
          <p>
           ORGANIQUE<br>
           Firming<br>
           Eye Cream <br>
           USD 65.00
           </p>
           </div>
          <div class="add_to_bag">
           <div class="add_button" style="background-color:rgba(0,0,0,1);width:118px;height:20px;margin-bottom:auto;color:white;">ADD TO BAG</div>
          </div>
        </div>
         <div class="bag_center">
          <div class="image"><img src="../../../assets/shopping_bag/center.png"></div>
          <div class="describe">
           <p>AQUABLISS<br>
           Hydrating Glow<br>
           Perfecting Serum <br>
           USD 95.00</p>
          </div>
          <div class="add_to_bag">
           <div class="add_button" style="background-color:rgba(0,0,0,1);width:118px;height:20px;margin-bottom:auto;color:white;">ADD TO BAG</div>
          </div>
        </div>
        <div class="right">
          <div class="image"><img src="../../../assets/shopping_bag/right.png"></div>
          <div class="describe">
           <p>
            ORGANIQUE<br>
            Soft Hand <br>
            Cream <br>
            USD 35.00
           </p>
          </div>
          <div class="add_to_bag">
            <div class="add_button" style="background-color:rgba(0,0,0,1);width:118px;height:20px;margin-bottom:auto;color:white;">ADD TO BAG</div>
          </div>
        </div>
        </div>
        <!-- end:add -->
        <div class="center" style="height:18px;margin-top:14px;">
        <!-- <p class="word">Thank you for shopping at Roseclér.<br>
                    You will receive an email of your order<br> 
                    summary and shipment information. <br></p> -->
        <!-- <Button class="shopping" style="width:320px;">CONTINUE SHOPPING</Button><br> -->
        <Button type="success" style="background-color:rgba(0,0,0,1);width:168px;border-style:none;border-radius:0;margin-top:42px;">CHECK OUT</Button><br><br>
        
        </div>
        
        </Content>
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
@import './bag.css'
</style>