function makeChai (type:string, cups:number){
    console.log(`making ${type} chai in ${cups} cups`)
}

makeChai("Masala", 2)

// return type of the function 

function makeChai2 (type:string, cups:number):string{
    return `making ${type} chai in ${cups} cups`
}

console.log(makeChai2("Masala", 2))

// Logger function

function logInfo(message:string):void{
    console.log(message)
}

logInfo("This is a log message")

