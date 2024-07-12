function getUserData(id,callback){
    setTimeout(()=>{
        const user = {
            id : id,
            name : "chetan",
            email : "chetancdi077@gmail.com"
        };

      callback(user);
    },2000);
}

function displayuser(user){
    console.log(displayuser)
    console.log(user)

}

getUserData(7,displayuser)


