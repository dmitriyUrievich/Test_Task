export const users = [{
  name:'Участник1',
  nalichie:'-',
  srok:80,
  gatanty:24,
  payment: 30,
  cost:['3.700000',' -25.000', '3.675000']
},
  {
    name:'Участник2',
    nalichie:'-',
    srok:75,
    gatanty:24,
    payment: 100,
    cost:['3.200000',' -25.000', '3.175000']
  },
  {
    name:'Участник3',
    nalichie:'-',
    srok:120,
    gatanty:24,
    payment: 30,
    cost:['3.700000',' -25.000', '3.675000']
  },
  {
    name:'Участник4',
    nalichie:'-',
    srok:80,
    gatanty:24,
    payment: 30,
    cost:['3.500000',' -25.000', '3.475000']
  },
  {
    name:'Участник5',
    nalichie:'-',
    srok:80,
    gatanty:24,
    payment: 30,
    cost:['3.700.000',' -25.000', '3.675000']
  }
]
//  export const users = []
export let userIdx = users.length===0? -1:0
export let timer = 3
  setInterval(()=>{
    timer--
    if(timer <= 0) {
      timer = 3
      if(users.length-1 >= userIdx){
        userIdx++
      }
      if(userIdx >= users.length){
        userIdx = 0
      }if(users.length === 0){
        userIdx = -1
      }
    }
  },1000)


