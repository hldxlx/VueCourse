const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const app = new Vue({
    data:{
        name:"kerwin",
        age:100,
        list:["111","2222","5555"]
      },
     template: `<div>Hello World--{{name}}--{{age}}

        <ul>
          <li v-for="data in list">
            {{data}}
          </li>
        </ul>
     </div>`
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(8088)

