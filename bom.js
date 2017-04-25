window.$ = function () {
  var array = []
  return array
}

$.bom = {
  openAtCenter: function (width, height, url) {
    window.open(url, '_blank', `width=${width}px,height=${height}px,
    screenX=${screen.width / 2 - width / 2}px,screenY=${screen.height / 2 - width / 2}`)
  },

}

$.bom.search =  function (name, value) {
  if (value === undefined) {
    return window.location.search
  }
}