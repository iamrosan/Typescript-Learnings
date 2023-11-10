interface User {
    readonly userId:number,
    email: string,
    fname:string,
    lname:string,
    // startTrail : ()=> string
    startTrail():string
    applyCoupon(couponID:string):boolean
}

const myDetails:User={
    email: '',
    userId:12,
    fname:"Roshan",
    lname:"Roshan",
    startTrail:()=>{
        return "HEllo world"
    },
    applyCoupon:(name:"BCARYD")=>{
        return true
    }
}