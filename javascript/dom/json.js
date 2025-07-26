let arr = [
    {
        name:"tonny kakkar",
        like:120,
        Comment:54,
        share:89,
        followersGained:10
    },
    {
        name:"goa",
        like:40,
        Comment:40,
        share:33,
        followersGained:8
    },
    {
        name:"manali",
        like:20,
        Comment:2,
        share:4,
        followersGained:-9
    },
    {
        name:"mumbai",
        like:5,
        Comment:60,
        share:2,
        followersGained:-8
    },
    {
        name:"banglore",
        like:1,
        Comment:9,
        share:51,
        followersGained:-33
    },
    
]
let count =0 
arr.forEach((elem)=>{
    count += elem.like
})
console.log("total likes is : ",count);
