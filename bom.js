window.$ = function () {
  var array = []
  return array
}

$.bom = {
  openAtCenter: function (width, height, url) {
    window.open(url, '_blank', `width=${width}px,height=${height}px,
    screenX=${screen.width / 2 - width / 2}px,screenY=${screen.height / 2 - width / 2}px`)
  },
  search: function (name, value) {
  	let result = {}
    if (value === undefined) {
      let search = window.location.search
      if(search[0] === "?"){
      	search = search.slice(1)
      }
      let searchArray = search.split('&')
			for(var i = 0;i<searchArray.length;i++){
				let am = searchArray[i].split('=')
				result[am[0]] = am[1]
			}
      return decodeURIComponent(result[name])
    }
  }
}   