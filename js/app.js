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
    },
    {
        message: "message 4",
        username: "user 1",
        created_at: "02-28-2020",
        age:27
    },
    {
        message: "message 5",
        username: "user 2",
        created_at: "02-28-2020",
        age:14
    },
    {
        message: "message 6",
        username: "user 3",
        created_at: "02-28-2020",
        age:22
    },
    {
        message: "message 7",
        username: "user 4",
        created_at: "02-28-2020",
        age:12
    },
    {
        message: "message 8",
        username: "user 5",
        created_at: "02-28-2020",
        age:10
    },
    {
        message: "message 9",
        username: "user 6",
        created_at: "02-28-2020",
        age:19
    },
    {
        message: "message 10",
        username: "user 7",
        created_at: "02-28-2020",
        age:13
    },

];


var adultsTweets = adults_tweets()

console.log(adultsTweets);

function checkAdult(tweet) {

    return (tweet["age"] >= 18);

}

function adults_tweets() {
   return tweets.filter(checkAdult);
}
