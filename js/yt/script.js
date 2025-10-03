class Instagram {
    constructor(id, username , city ) {
        this.id = id,
        this.username= username,
        this.city =  city,
        this.role =  "user"
    }

    write(text){
        let h1 = document.createElement("h1")
        h1.textContent = `${this.username} : ${
        text}`
        document.body.appendChild(h1)
    }
    
}

class  User extends Instagram{
    constructor(id, username , city ){
        super(id, username , city )
        this.role = "admin"
    }

    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove()
        })
    }
}

let p1 = new Instagram(26, "neetesh" , "bhopal")
let user1 = new User(129, "admin" , "admin.gmail.com")