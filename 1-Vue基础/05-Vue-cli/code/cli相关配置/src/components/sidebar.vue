<template>
	<div>
		我是sidebar
		<ul>
         <li v-for="data in datalist">
             <img :src="data.poster"/>
             <h3>{{data.name}}</h3>
             <p>{{data.synopsis}}</p>

             <ul>
                 <li v-for="item in data.actors">
                     <img :src="item.avatarAddress"/>
                     <h4>{{item.name}}</h4>
                 </li>
             </ul>
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

  	mounted () {
  	  console.log("mounted","访问dom,setInterval,window.onscroll, 监听事件 ajax")
  	  axios({
  	    url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1384809",
  	    headers:{
  	      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"154277371928424093566579"}',
  	      'X-Host': 'mall.film-ticket.film.list'
  	    }
  	  }).then(res=>{
  	    console.log(res.data);
  	    this.datalist= res.data.data.films
  	  })


      axios.get("/ajax/mostExpected?ci=55&limit=10&offset=0&token=").then(res=>{
        console.log(res.data);
      })

      axios.get("http://localhost:3000/movieList").then(res=>{
        console.log(res.data);
      })

  	},
  }
</script>

<style lang="scss" scoped>
  ul{
    li{
      list-style: none;
      background: red;
    }
  }
</style>
