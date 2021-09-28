class UserClass{
    constructor(first,last,email,phone,city){
        this.first = first;
        this.last = last;
        this.email = email;
        this.phone = phone;
        this.city = city;
    }
    fullName(){
        return this.first+" "+this.last
    }
    get contact(){
        return "email:"+this.email +  "phone:"+ this.phone
    }
}
export default UserClass;

// const user1 =  new UserClass("Harry","Potter","harry@email.com",123456,"Hogwarts")