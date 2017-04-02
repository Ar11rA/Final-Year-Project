document.getElementById('btn-ola').addEventListener('click',CalcOla)
document.getElementById('btn-review').addEventListener('click',getReview)
function CalcOla() {
  let autocompl1 = document.getElementById('autocomplete1')
  let autocompl2 = document.getElementById('autocomplete2')
  console.log(autocompl2.value)
  let olaFetch = olaPromise(autocompl1,autocompl2)
  olaFetch.then((result)=>{
    return result.json()
  })
  .then((data)=>{
    console.log(data)
    let resOla=''
    data.forEach((element) => {
      resOla += (`${element.type}  ${element.cost}<br>`)
    })
    document.getElementById('ola').innerHTML=resOla
  })
  .catch((err)=>console.log(err))
  
  let uberFetch = uberPromise(autocompl1,autocompl2)
  uberFetch.then((result)=>{
    return result.json()
  })
  .then((data)=>{
    console.log(data)
    let resUber=''
    data.forEach((element) => {
      resUber += (`${element.type}  ${element.cost}<br>`)
    })
    document.getElementById('uber').innerHTML=resUber
  })
  .catch((err)=>console.log(err))
  autocompl1.innerHTML=''
  autocompl2.innerHTML=''
}
function getReview(){
  window.location.href = '/review.html'
}