var tweets = [ 
    { 
        message: "happy birthday!!!",
        username: "khaled",
        created_at: "05-25-2020",
        age:17

    }, 
    { 
        message: "let's have a party!!!",
        username: "alex",
        created_at: "09-25-2020",
        age:29
    },
    {
        message: "innotech college is offering web development program in 2020",
        username: "jose",
        created_at: "01-28-2020",
        age:34
    }

];


tweets.forEach(function (tweet){
    console.log("message : " + tweet["message"]);
    console.log("username : " + tweet["username"]);
    console.log("created_at: " + tweet["created_at"]);
    console.log("age: " + tweet["age"]);
    console.log("________________________");

});