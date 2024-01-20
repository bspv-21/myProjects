//JSON --> JavaScript Object Notation.

//www.json.org --> know more about JSON in this website

//JSON is a response which will be given by API in a certain format.

//there ara 2 formats. (1) XML (Extensible Markup Language) --> old version
//                     (2) JSON

//API testing tools --> (1) hoppscotch.io
//                      (2) postman


/* Accessing Data from JSON

    --> JSON.parse(data) Method TO parse a string data into a JavaScript Object.

    --> JSON.stringify(json) Method To parse a JavaScript Object data into JSON.

*/


let jsonRes = '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';

let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

let stu = {
    name : "Bspv",
    marks : 98
};

console.log(JSON.stringify(stu));


//Ajax --> Asynchronous JavaScript and XML(JSON). (xml is not being used now a days. Instead of it,JSON is being used now).

/*Status Codes --> Examples : 
                            (1) 200 -> OK
                            (2) 404 -> Not Found
                            (3) 400 -> Bad Request
                            (4) 500 -> Internal Server Error 

                                etc.
                    Search for status codes in mdn
*/

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
// console.log(fetch(url));

// fetch(url)         //fetch() actually returns a promise object
//     .then((response) => {
//         console.log(response);
//         // console.log(response.json()); //to parse the response in to readable format , we use response.json() method and this method also returns a 'promise object' and now we can see the 'promise object'
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data); //actual proper JSON data will be logged to the console
//         console.log(data.fact);
//     })
//     .catch((err) => {
//         console.log("Error -", err);
//     });


// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);
//         console.log(data.fact);
//     }
//     catch(e) {
//         console.log("error - ", e)
//     }

//     console.log("Bye..!");
// }

// getFacts();

// console.log("I'm happy");


//Axios --> Library to make HTTP requests (it internally calls fetch() only)

async function getFacts() {
    try{
        let res = await axios.get(url);
        console.log(res);
        //let data = await res.json();
        //console.log(data);
        //console.log(data.fact);
        console.log(res.data);
        // console.log(res.data.fact);
        return res.data.fact;
    }
    catch(e) {
        console.log("error - ", e);
        return "No Fact Found";
    }
}

async function getImages() {
    try{
        let res = await axios.get(url2);
        console.log(res);
        console.log(res.data);
        return res.data.message;
    }
    catch(e) {
        console.log("error - ", e);
        return "No Image Found";
    }
}


let btn = document.querySelector("#cat");
btn.addEventListener("click", async () => {
    let facts = await getFacts();
    let fact = document.querySelector("#fact");
    fact.innerText = facts;
});

let btn2 = document.querySelector("#dog");
btn2.addEventListener("click", async () => {
    let link = await getImages();
    let img = document.querySelector("img");
    img.setAttribute("src", link);
});



//Axios --> Sending (passing) 'Headers'

const url3 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try{
        const config = { headers: {Accept: "application/json"}};
        let res = await axios.get(url3, config);
        console.log(res);
        console.log(res.data); // without passing headers (here config) to axios , data was in the HTML format, to convert it into JSON format ,we pass the headers in axios.
    }
    catch(er) {
        console.log("Error - ", er);
    }
}

getJokes();


//Axios --> Updating Queries

let url4 = "http://universities.hipolabs.com/search?name=";

let btn3 = document.querySelector("#search");

// let check = true;

 async function getColleges(country) {
    try {
        let res = await axios.get(url4 + country);
        return res.data;

    } catch(errr) {
        console.log("Error - ", errr);
        return "List Not Found";
    }
}

function show(clgs) {

    let list = document.querySelector("#list");
    list.innerHTML = "";

    for(clg of clgs) {
        console.log(clg.name);

        let li = document.createElement("li");
        li.innerText = clg.name + " - " + clg.country;
        list.appendChild(li);
    }
    // check = false;

}


btn3.addEventListener("click", async () => {
    // if( (check == true) && (document.querySelector("input").value !== "") ) {
    // }

    if(document.querySelector("input").value !== "") {
        let country = document.querySelector("input").value;
        let clgs = await getColleges(country);
        show(clgs);
    }
});


// document.querySelector("input").addEventListener("keypress", () =>{
//     if(document.querySelector("input").value == "") {
//         document.querySelector("#list").innerHTML = "";
//         check = false;
//     }
// });