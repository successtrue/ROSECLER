<template>
	<div class="main container-fluid">
		<!-- 头部 -->
		<div class="header">
			<!-- 视频背景 -->
			<video muted autoplay poster="../assets/home/123.jpg">
				<source src="../assets/home/header.mp4" type="video/mp4">
			</video>
			<!-- 背景图 -->
			<div class="backImg">
				<div class="navigation container">
					<div class="row">
						<div class="logo col-md-3">
							ROSECLÉR
						</div>
						<!-- 右边 -->
						<div class="backImgRight col-md-9">
							<nav class="navbar navbar-right">
								<ul style="list-style: none;">
									<li class="navbar-brand">PERFECTING SERUMS</li>
									<li class="navbar-brand" href="#">SPECIALIST CREAMS</li>
									<li class="navbar-brand" href="#">OUR INGREDIENTS</li>
									<li class="navbar-brand" href="#">OUR STORY</li>
									<li class="navbar-brand" href="#">
										<img src="../assets/home/shopping.png" alt="shopping"/>
									</li>
									<li class="navbar-brand" href="#">
										<img src="../assets/home/landing.png" alt="landing"/>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<!-- 中间文本 -->
					<div class="middle-text row">
						<div class="col-md-6 col-md-offset-3">
						</div>
					</div>
				</div>
				<!-- 底部按钮 -->
				<div class="bottomBtn row">
					<div class="col-md-4 col-md-offset-4">
						<p>Premium Extracts & Award-Winning Active Ingredients Achieve Desired Beauty Effortlessly </p>
						<button>DISCOVER</button>
					</div>
				</div>
			</div>
		</div>
		<!-- 主体中间部分 -->
		<div class="two">
			<div class="content">
				<div class="first">
					PREMIUM . GENTLE POWERFUL
				</div>
				<div class="second">
					<div v-for="item in 4" :key="item">
						<p>Paraben</p>
						<p></p>
						<p>Free</p>
					</div>
				</div>
				<div class="thrid">
					<div v-for="item in 3" :key="item">
						<p>Paraben</p>
						<p></p>
						<p>Free</p>
					</div>
				</div>
				<div class="fourth">
					<p>We are committed to meet the world’s best</p>
					<p>and strictest practices of product</p>
					<p>excellence set out by EU, USA & Japan.</p>
				</div>
			</div>
		</div>
		<!-- 底部轮播部分 -->
		<!-- <div class="last" style="position: relative;"> -->
		<div class="end swiper-no-swiping">
			<div class="swiper-wrapper">
				<div class="swiper-slide" style="background-image:url(../static/home/one.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(../static/home/two.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(../static/home/three.png)"></div>
			</div>
			<div class="swiper-button-prev1 swiper-button-white" @click="prev" ></div>
			<div class="swiper-button-next1 swiper-button-white" @click="next" ></div>
		</div>
		<!-- 中间轮播 -->
		<div class="swiper-container swiper-no-swiping">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div><img src="../../static/home/prodOne.png" alt="" /></div>		
					<div style="height: 395px;margin-top: 65px;width: 45%;">
						<h3>ALLURA</h3>
						<p  class="pOne">Age-Defy Eye Perfecting Serum</p>
						<p class="pTwo">Award Winning Viper Venom Line &<br /> Wrinkle Corrective Eye Area Treatment</p>
						<p class="pThree">USD &nbsp;&nbsp; 95.00</p>
						<h4 class="pFour">
							<span class="glyphicon glyphicon-star"></span>
							<span class="glyphicon glyphicon-star"></span>
							<span class="glyphicon glyphicon-star"></span>
							<span class="glyphicon glyphicon-star"></span>
							<span class="glyphicon glyphicon-star"></span>
						</h4>
						<div class="pFive">
							<button>LEARN MORE</button>
							<button>SHOP NOW</button>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div><img src="../../static/home/prodTwo.png" alt="" /></div>		
					<div style="height: 395px;margin-top: 65px;width: 45%;">
						<h3>ALLURA</h3>
						<p  class="pOne">Age-Defy Eye Perfecting Serum</p>
						<p class="pTwo">Award Winning Viper Venom Line &<br /> Wrinkle Corrective Eye Area Treatment</p>
						<p class="pThree">USD &nbsp;&nbsp; 95.00</p>
						<h4 class="pFour">
							<span class="glyphicon glyphicon-star"></span>
							<span class="glyphicon glyphicon-star"></span>
							<span class="glyphicon glyphicon-star"></span>
							<span class="glyphicon glyphicon-star"></span>
							<span class="glyphicon glyphicon-star"></span>
						</h4>
						<div class="pFive">
							<button>LEARN MORE</button>
							<button>SHOP NOW</button>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div><img src="../../static/home/prodThree.png" alt="" /></div>		
					<div style="height: 395px;margin-top: 65px;width: 45%;">
						<h3>ALLURA</h3>
						<p  class="pOne">Age-Defy Eye Perfecting Serum</p>
						<p class="pTwo">Award Winning Viper Venom Line &<br /> Wrinkle Corrective Eye Area Treatment</p>
						<p class="pThree">USD &nbsp;&nbsp; 95.00</p>
						<h4 class="pFour">
							<span class="glyphicon glyphicon-star"></span>
							<span class="glyphicon glyphicon-star"></span>
							<span class="glyphicon glyphicon-star"></span>
							<span class="glyphicon glyphicon-star"></span>
							<span class="glyphicon glyphicon-star"></span>
						</h4>
						<div class="pFive">
							<button>LEARN MORE</button>
							<button>SHOP NOW</button>
						</div>
					</div>
				</div>
			</div>
			<!-- Add Arrows -->
			<div class="swiper-button-prev swiper-button-white"></div>
			<div class="swiper-button-next swiper-button-white"></div>	
		</div>
		<!-- </div> -->
	</div>
</template>
<script>
	import Swiper from "swiper";
	var backgroundImage = ["url('../static/home/one.jpg')","url('../static/home/two.jpg')","url('../static/home/three.png')"]
export default {
	name: 'Home',
	mounted() {
		//设置背景视频的播放速度
		document.querySelector("video").playbackRate = 0.7;
		//轮播图
		var swiperback = new Swiper(".end", {
			spaceBetween: 30,
			speed: 600,
			effect: 'fade',
		　　navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},　　　　 
		});
		
		var swiper = new Swiper(".swiper-container", {
			speed: 500,
　　　　　　 navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
　　　　});
		
	},
	data(){
		return {
			backgroundImage,
			imgflag: 0,
		}
	},
	methods:{
		next(){
				if(this.imgflag < 2) this.imgflag ++;
				else this.imgflag = 0;
				this.$refs.end.style.backgroundImage = this.backgroundImage[this.imgflag];
			},
		prev(){
			console.log("123")
			if(this.imgflag > 0) this.imgflag --;
			else this.imgflag = 2;
			this.$refs.end.style.backgroundImage = this.backgroundImage[this.imgflag];
		}
	},
		
}
</script>

<style scoped>
	@import url("../assets/style/home/home.css");
	/* *{ border: 1px solid red;} */
	.main{ padding: 0;}
	/* 头部 */
	.header{
		position: relative;
	}
	
	video{ 
          width: 100%;
		  height: 1080px;
		  /* display: block; */
          /* height: 100%; */
		  object-fit: fill
	}
	
	.backImg{ 
		width: 100%;
		height: 1080px;
		background: url(../assets/home/header.png) no-repeat;
		background-position: center;
		background-size: 100% 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		font-family: "Iskoola Pota";
		font-size: 100px;
	}
	
	.backImg .logo{
		font-size:30px;
		font-family:Iskoola Pota;
		font-weight:400;
		line-height:58px;
		height: 58px;
		color:rgba(255,255,255);
	}
	
	.backImgRight{ 
		font-family:'Century Gothic';
		font-weight:400;
		line-height:38px;
	}
	
	.backImgRight .navbar-brand{ font-size: 12px; color:rgba(255,255,255);}
	
	.backImgRight .navbar-brand:hover{ color: rgba(220,220,220);cursor: pointer;}
	
	/* 中部文本 */
	.middle-text { height: 290px;margin-top: 84px;}
	.middle-text > div{
		height: 167px;
		background: url(../assets/home/middle-text.png) no-repeat;
		background-position: center;
	}
	
	.bottomBtn > div{ height: 124px;position: absolute; bottom: 29px;}
	
	.bottomBtn > div > p{ 
		height:50px;
		font-size:18px;
		font-family:'PingFang HK';
		font-weight:400;
		line-height:25px;
		color:rgba(255,255,255,0.7);
		text-align: center;
		margin: 0 auto;
		margin-bottom: 20px;
		width: 512px;
		/* padding-bottom: 0; */
	}
	
	.bottomBtn > div > button{
		width:270px;
		height:48px;
		font-size:18px;
		font-family:PingFang HK;
		font-weight:500;
		line-height:25px;
		color:rgba(255,255,255);
		border:2px solid rgba(255,255,255,1);
		display: block;
		margin: 0 auto;
		outline: none;
		background: transparent;
	}
	
	.bottomBtn > div > button:hover{ background: rgba(0,0,0,0.1);cursor: pointer;}
	
</style>
