let subs :number | string = 10
subs = "10"
let subs2 :any = 10

// we can define type as our requirements
let apiresponse : "pending" | "success" | "error" = "pending"
apiresponse = "success"
apiresponse = "error"

const orders = ['12' , '20', '28', '42']

let currentOrder:string | undefined;

for (let order of orders){
    if(order === '28'){
        currentOrder = order
        break
    }
}
console.log(currentOrder);
