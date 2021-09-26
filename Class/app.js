class User {
    constructor({ name, lastName, email, password }){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    sayHello(){
        console.log(`Hello my name is ${this.name}`);
    }
    getProfile(){
        console.log(`${this.name} ${this.email} ${this.password}`);
    }
    updatePassword(newPassword, currentPassword){
        if(currentPassword === this.password){
            this.password = newPassword;
        } else {
            console.log("Can't change password.");
        }
    }
}

const user = new User({
    name : "Selah",
    lastName : "Ivan",
    email : "tft0720@gmail.com",
    password : "123456"
}); 


class Admin extends User {
    constructor({ name, lastName, email, password, superAdmin, isActive }){
        super({name, lastName, email, password});

        this.superAdmin = superAdmin;
        this.isActive = isActive;
    }
    deleteWebsite(){
        console.log("Deleting the whole website..");
    }
}

const admin = new Admin({
    name : "Selah",
    lastName : "Ivan",
    email : "tft0720@gmail.com",
    password : "123456",
    superAdmin : true,
    isActive: false,
}); 

console.log(admin.email);


class Control {
    constructor({counterId, plusId, minusId}){
        this.meCount = 0;
        this.count = document.getElementById(counterId);
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.addEventListeners();
    };
    addEventListeners = () => {
        this.plusBtn.addEventListener("click", this.up);
        this.minusBtn.addEventListener("click", this.down);
    };
    up = () =>  {
        this.meCount = this.meCount + 1;
        this.set();
    };
    down = () =>  {
        this.meCount = this.meCount - 1;
        this.set();
    }
    set = () =>  {
        this.count.innerText = this.meCount;
    };
}


new Control({counterId : "count", plusId : "add", minusId : "minus"});