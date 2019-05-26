<template>
	<div class="main container-fluid">
		<!-- 头部 -->
		<div class="header">
			<!-- 视频背景 -->
			<video muted autoplay poster="../assets/home/videoPoster.jpg">
				<source src="../assets/home/header.mp4" type="video/mp4">
			</video>
			<!-- 背景图 -->
			<div class="backImg">
				<div class="navigation container">
					<div class="row" style="position: relative;">
						<div class="logo col-md-3">
							ROSECLÉR
						</div>
						<!-- 右边 -->
						<div class="backImgRight col-md-9">
							<!-- <nav class="navbar navbar-right">
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
							</nav> -->
							<nav class="navbar navbar-right" role="navigation">
								<div class="container-fluid"> 
									<div class="navbar-header">
										<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
											<span class="icon-bar"></span>
											<span class="icon-bar"></span>
											<span class="icon-bar"></span>
										</button>
									</div>
									<div class="collapse navbar-collapse" id="example-navbar-collapse" style="padding-right: 0px;">
										<ul class="nav navbar-nav">
											<li class="navbar-brand">
												PERFECTING SERUMS
												<ul class="ul1">
													<li style="background: url(../../static/home/nav/one1.png)">
														<div>
															<h3>LUMINIS</h3>
															<p>AGE-DEFY EYE PERFECTING SERUM</p>
														</div>
													</li>
													<li style="background: url(../../static/home/nav/one2.png)">
														<div>
															<h3>ETERNA</h3>
															<p>INFINITY YOUNG PERFECTING SERUM</p>
														</div>
													</li>
													<li style="background: url(../../static/home/nav/one3.png)">
														<div>
															<h3>AQUABLISS</h3>
															<p>HYDRATING GLOW PERFECTING SERUM</p>
														</div>
													</li>
												</ul>
											</li>
											<li class="navbar-brand">
												SPECIALIST CREAMS
												<ul class="ul2">
													<li style="background: url(../../static/home/nav/one1.png);">
														<div>
															<h3>LUMINIS</h3>
															<p>AGE-DEFY EYE PERFECTING SERUM</p>
														</div>
													</li>
													<li style="background: url(../../static/home/nav/one2.png)">
														<div>
															<h3>ETERNA</h3>
															<p>INFINITY YOUNG PERFECTING SERUM</p>
														</div>
													</li>
													<li style="background: url(../../static/home/nav/one3.png) ">
														<div>
															<h3>AQUABLISS</h3>
															<p>HYDRATING GLOW PERFECTING SERUM</p>
														</div>
													</li>
												</ul>
											</li>
											<li class="navbar-brand">
												OUR INGREDIENTS
												<ul class="ul3">
													<li style="background: url(../../static/home/nav/one4.png)">
														<div>
															<h3>ALLURA</h3>
															<p>FIRMING EYE CREAM</p>
														</div>
													</li>
													<li style="background: url(../../static/home/nav/one5.png)">
														<div>
															<h3>MERA</h3>
															<p>MOISTURE SOFT DAY CREAM</p>
														</div>
													</li>
													<li style="background: url(../../static/home/nav/one6.png)">
														<div>
															<h3>MERA</h3>
															<p>ENERGY RENEW NIGHT CREAM</p>
														</div>
													</li>
													<li style="background: url(../../static/home/nav/one7.png)">
														<div>
															<h3>RADIANCE</h3>
															<p>SOFT HAND CREAM</p>
														</div>
													</li>
												</ul>
											</li>
											<li class="navbar-brand">
												OUR STORY
												<ul class="ul4">
													<li style="background: url(../../static/home/nav/one4.png)">
														<div>
															<h3>ALLURA</h3>
															<p>FIRMING EYE CREAM</p>
														</div>
													</li>
													<li style="background: url(../../static/home/nav/one5.png)">
														<div>
															<h3>MERA</h3>
															<p>MOISTURE SOFT DAY CREAM</p>
														</div>
													</li>
													<li style="background: url(../../static/home/nav/one6.png)">
														<div>
															<h3>MERA</h3>
															<p>ENERGY RENEW NIGHT CREAM</p>
														</div>
													</li>
													<li style="background: url(../../static/home/nav/one7.png)">
														<div>
															<h3>RADIANCE</h3>
															<p>SOFT HAND CREAM</p>
														</div>
													</li>
												</ul>
											</li>
											<li class="navbar-brand">
												<img src="../assets/home/shopping.png" alt="shopping"/>
											</li>
											<li class="navbar-brand">
												<img src="../assets/home/landing.png" alt="landing"/>
											</li>
										</ul>
										<!-- <span class="navbar-brand"><img src="../assets/home/shopping.png" alt="shopping"/></span>
										<span class="navbar-brand"><img src="../assets/home/shopping.png" alt="shopping"/></span> -->
									
									</div>
								</div>
							</nav>
						</div>
					</div>
					<!-- 导航栏 -->
					<!-- <div class="row navShow" v-for="index in 4">
						<ul>
							<li>123</li>
							<li>123</li>
							<li>123</li>
						</ul>
					</div> -->
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
		<div class="centerSwiper">
		<div class="end swiper-no-swiping">
			<div class="swiper-wrapper">
				<div class="swiper-slide" style="background-image:url(../../static/home/one.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(../../static/home/two.jpg)"></div>
				<div class="swiper-slide" style="background-image:url(../../static/home/three.png)"></div>
				<div class="swiper-slide" style="background-image:url(../../static/home/four.png)"></div>
				<div class="swiper-slide" style="background-image:url(../../static/home/five.png)"></div>
				<div class="swiper-slide" style="background-image:url(../../static/home/six.png)"></div>
				<div class="swiper-slide" style="background-image:url(../../static/home/seven.png)"></div>
			</div>
		</div>
		<!-- 中间轮播 -->
		<div class="swiper-container swiper-no-swiping">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div><img src="../../static/home/prodOne.png" alt="" /></div>		
					<div>
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
					<div>
						<h3>ETERNA</h3>
						<p  class="pOne">Infinity Young Perfecting Serum</p>
						<p class="pTwo">Premium White Caviar Collagen & Elastin<br /> Intensive Cellular Rejuvination Treatment</p>
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
					<div>
						<h3>AQUABLISS</h3>
						<p  class="pOne">Hydrating Glow Perfecting Serum </p>
						<p class="pTwo">North Atlantic Giant Kelp Bio-Active<br /> Deep-Hydration Healing Treatment</p>
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
					<div><img src="../../static/home/prodFour.png" alt="" class="same" /></div>		
					<div>
						<h3>ALLURA</h3>
						<p  class="pOne">Firming Eye Cream</p>
						<p class="pTwo">Reduce Appearance of Lines & Puffiness,<br /> Hydrate with a Satin Glow to Eye Area</p>
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
					<div><img src="../../static/home/prodFive.png" alt="" class="same" /></div>		
					<div>
						<h3>MERA</h3>
						<p  class="pOne">Moisture Soft Day Cream</p>
						<p class="pTwo">Deep Hydration With Moisture-lock,<br />Keeps Skin Firm yet Supple All Day Long</p>
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
					<div><img src="../../static/home/prodSix.png" alt="" class="same" /></div>		
					<div>
						<h3>MERA</h3>
						<p  class="pOne">Energy Renew Night Cream</p>
						<p class="pTwo">Overnight Moisturizer with Rich Texture,<br /> Energized Cellular Growth & Repair</p>
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
					<div><img src="../../static/home/prodSeven.png" alt="" /></div>		
					<div>
						<h3>RADIANCE</h3>
						<p  class="pOne">Soft Hand Cream</p>
						<p class="pTwo">Moisturize Hands, Nails & Cuticles,<br />  Exquisite Silky Smooth Hand Treatment</p>
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
		</div>
		<!-- 页脚 -->
		<div class="footer">
			<div class="first">
				<div class="first1">OUR STORY</div>
				<div class="first2"><p>OUR<br />INGREDIENTS</p> </div>
				<div class="first3">
					<div>
						<h1># MyRosecler</h1>
						<p>
							Discover the marvelous rejuvenating powers of <br />
							Roseclér. Share your happiness with our community of <br />
							beauty lovers at #myrosecler, mention @rosecler for <br />
							a chance to be featured and win fantastic prizes.
						</p>
					</div>
				</div>
				<div class="first4">
					<div v-for="(item,index) in footerImg" :key="index">
						<img :src="'../../static/home/footer/' + footerImg[index] + '.png'" />
					</div>
				</div>
				<div class="first5">
					<span style="margin-right: 80px;">ADD PHOTO</span> 
					<span>ADD PHOTO</span>
				</div>
				<div class="first6">
					<div>
						<h3>FOLLOW US</h3>
						<div>
							<div><img src="../../static/home/footer/f.png"/></div>
							<div><img src="../../static/home/footer/bird.png"/></div>
							<div><img src="../../static/home/footer/rect.png"/></div>
							<div><img src="../../static/home/footer/video.png"/></div>
							<div><img src="../../static/home/footer/wx.png"/></div>
						</div>
					</div>
				</div>
			</div>
			<div class="second">
				<div>
						<div class="first">
							<!-- 第一块 -->
							<div class="top">
								<div>OUR STORY</div>
								<div>OUR INGREDIENTS</div>
								<div>
									SHOP COLLECTION
									<ul>
										<li>
											LUMINIS Eye Perfecting Serum
										</li>
										<li>ETERNA Perfecting Serum</li>
										<li>AQUABLISS Perfecting Serum</li>
										<li>ALLURA Firming Eye Cream</li>
										<li>MERA Day Cream</li>
										<li>MERA Night Cream</li>
										<li>RADIANCE Soft Hand Cream</li>
									</ul>
								</div>
								<div>
									CORPORATE
									<ul>
										<li>
											Authenticity
										</li>
										<li>Terms & Conditions</li>
										<li>Customer Services Policy</li>
										<li>Privacy Policy</li>
										<li>Cookie Policy</li>
										<li>Customer Service</li>
										<li>Shipment Tracking</li>
									</ul>
								</div>
								<div>FAQ</div>
								<div>
									NEWSLETTER
									<input type="email" placeholder="EMALL" />
									<span>Sign Up For Special Offers!</span>
									<div><div class="selectValue" style="float: left;margin-left: 55px;">Hong &nbsp;Kong (EN)</div><span style="cursor: pointer;" @click="select" class="glyphicon glyphicon-menu-down"></span></div>
									<ul class="selectUl" ref="selectUl">
										<li>Hong &nbsp;Kong (EN)</li>
										<li>美国</li>
									</ul>
								</div>
							</div>
							<!-- 第二块 -->
							<div class="btm">
								<img src="../../static/home/footer/logo.png" />
								<br />© Roseclér 2018 - All Rights Reserved
							</div>
						</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Swiper from "swiper";
	// var backgroundImage = ["url('../static/home/one.jpg')","url('../static/home/two.jpg')","url('../static/home/three.png')"]
	$(".selectUl > li").click(function (){
		// $(".selectValue").text() = $(this).text();
		document.querySelector(".selectValue").innerText = $(this).text();
		// parset.select()
	})
export default {
	name: 'Home',
	mounted() {
		this.init()
	},
	data(){
		return {
			// backgroundImage,
			imgflag: 0,
			//页脚中间的8张图片
			footerImg: ["three","four","five","six","seven","eight","nine","ten"],
		}
	},
	methods:{
		//选择框
		select(){
			var e = document.querySelector(".glyphicon-menu-down");
			$(this.$refs.selectUl).slideToggle(300);
			e.style["transform"] == ""? e.style["transform"] = "rotate(180deg)":e.style["transform"] = ""
		},
		//初始化
		init(){
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
			//选择框
			var parset = this;
			$(".selectUl > li").click(function (){
				document.querySelector(".selectValue").innerText = $(this).text();
				parset.select()
			})
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
	
	.backImgRight .navbar-brand:hover > ul > li > div{ color: white;}
	/* 导航栏折叠 */
	.navbar-toggle{ float: left;}
	.icon-bar{ background: white;width: 18px;height: 1px;}
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
	
	.bottomBtn > div > button:hover{ background: rgba(0,0,0,0.2);cursor: pointer;}
	
</style>
