let nums=[10,3,7,20,13,2]
let squares = nums.map(n=>n*n)
let primes = nums.filter(num=>{
    if(num<2) return false
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0) return false
    }
    return true
})
let sum = nums.reduce((acc,curr)=>acc+curr,0)
let descending = nums.slice().sort((a,b)=>b-a)

console.log("Squares : ", squares)
console.log("Primes : ",primes)
console.log("sum : ",sum)
console.log("Descendong :",descending)
