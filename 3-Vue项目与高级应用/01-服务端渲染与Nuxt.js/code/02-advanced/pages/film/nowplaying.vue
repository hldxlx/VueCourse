<template>
	<div>
		nowplaying
		<ul>
			<li v-for="data in datalist" @click="handleClick(data.filmId)">
				<img :src="data.poster"/>
				<h3>{{data.name}}</h3>
			</li>
		</ul>
	</div>
</template>



<script type="text/javascript">
	import axios from 'axios'
	export default {
		data () {
			return {
				datalist:[]
			}
		},

		asyncData(){
			//第一次服务端就能执行， 然后 请求数据， 服务端组装数据， 渲染页面。
			//之后可以再浏览器端执行 拿数据， 用户体验好。
			

			//返回的是promise对象
			return axios({
				url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7247647",
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"154277371928424093566579"}',
					'X-Host': 'mall.film-ticket.film.list'

				}
			}).then(res=>{
				// this.datalist = res.data.data.films
				
				return {
					datalist:res.data.data.films
				}

			})
		},

		// this.asyncData().then(res=>{
			//渲染数据 --prosmie
		// })

		methods :{
			handleClick(id){
				this.$router.push(`/detail/${id}`); //编程式导航
			}
		}
	}
</script>