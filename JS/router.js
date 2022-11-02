 export  class Router {
  routes = {}

  add(routeName, page) {
    this.routes [routeName] = page
  }

    route(event) {
    event = event || window.event
    event.preventDefault()
     
    window.history.pushState({}, "", event.target.href)
   
  
    this.handle()
  }

  handle() {
    
    const { pathname } = window.location
    const route = this.routes[pathname]
    
    //fetch(vai buscar) // then(quando concluir) // depois, prometo que eu vou executar uma função
    //assicrono só começa quando o atual é concluido  
    fetch(route)
    .then(data => data.text())
    .then(html => {
     document.querySelector('#app').innerHTML = html
    })
    
    //sicrono é quando rola uma sequencia, como se fosse uma fila
  }
}
