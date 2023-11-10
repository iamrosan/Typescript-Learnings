interface User {
    readonly userId:number,
    email: string,
    fname:string,
    lname:string,
    // startTrail : ()=> string
    startTrail():string
    applyCoupon(couponID:string):boolean
}

// Re-opening of the interface
interface User {
    address:string
}

// inheritance
interface Admin extends User{
    role : "admin" | "github actionst"
}


const myDetails:User={
    email: '',
    userId:12,
    fname:"Roshan",
    lname:"Roshan",
    address:"ktm",
    startTrail:()=>{
        return "HEllo world"
    },
    applyCoupon:(name:"BCARYD")=>{
        return true
    }
}



