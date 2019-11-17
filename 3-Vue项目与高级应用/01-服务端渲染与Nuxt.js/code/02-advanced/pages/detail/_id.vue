<template>
	<div>
		detail
		<img :src="filminfo.poster"/>
		<h2>{{filminfo.name}}</h2>
	</div>
</template>


<script type="text/javascript">
	// ES6 解构赋值
	// var {a,b}  = {a:{},b:{}}
	import axios from 'axios'
	export default{
		//mouted 可以发ajax ,但是mounted 是再浏览器中执行， seo差
		asyncData({params,from}){
			
			console.log(params);//


			return axios({
				url:`https://m.maizuo.com/gateway?filmId=${params.id}&k=449808`,
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"154277371928424093566579"}',
					'X-Host': 'mall.film-ticket.film.info'
				}
			}).then(res=>{
				console.log(res.data)
				return {
					filminfo:res.data.data.film
				}
			})
		},

		layout:"detailtemplate" //指定模板是谁
	}
</script>