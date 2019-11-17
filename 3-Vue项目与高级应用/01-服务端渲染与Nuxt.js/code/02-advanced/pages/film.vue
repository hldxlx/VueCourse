<template>
	<div>
		<el-carousel trigger="click" height="150px">
			    <el-carousel-item v-for="item in datalist" :key="item.bannerId">
			      <img :src="item.imgUrl" class="item"/>
			    </el-carousel-item>
		  </el-carousel>
		<nuxt-child></nuxt-child>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'

	export default {
		asyncData(){
			return axios({
				url:"https://m.maizuo.com/gateway?type=2&cityId=110100&k=9408665",
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"154277371928424093566579"}',
					'X-Host': 'mall.cfg.common-banner'

				}
			}).then(res=>{
				// this.datalist = res.data.data.films
				
				return {
					datalist:res.data.data
				}

			})
		}
	}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .item{
  	width: 100%;
  }
</style>
