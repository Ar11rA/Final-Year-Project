function olaPromise(autocompl1, autocompl2) {
  let data = {
    autocomplete1: autocompl1.value,
    autocomplete2: autocompl2.value
  }
  return fetch('/readOla', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
function uberPromise(autocompl1, autocompl2){
  let data = {
    autocomplete1: autocompl1.value,
    autocomplete2: autocompl2.value
  }
  return fetch('/readUber', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}