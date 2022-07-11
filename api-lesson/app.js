// URL

/* 
    Uniform
    Resource
    Locator
    (or Identifier URI)


    http://www.apple.com:443/path/to/file.html?key1=value&key2=value#anchorInDocument

        * http:// => scheme or protocol
        * www.apple.com => domain name (domain and/or subdomain ex: online.uprighted), and top level domain (.com, .eu etc..)
        * :443 => port on which we access our resource
        * domain (IP once it goes thru DNS servers)+ port == socket
        * ? => divider into the beginning of parameters
        * key=value => pairs of params and their values
        * & => divides multiple key/value pairs
        * # => Anchor sends up somewhere on the page
*/

/* 

let params = new URLSearchParams(document.location.search);
    * URLSearchParams is an INTERFACE
let name = params.get("name");

*/


// * API

/* 
    *Application Programming Interface

    A way for a client to communicate with the server.

    Allows for the http request and response lifecycle.
*/


// FetchAPI

//Fetch with resolvers
/*
    1 Fetch your resource which returns a promise
    2 use a .then resolver to catch fetch's return and assign to a parameter.
    3 Use .json() on response to finish reading entire ReadableStream
    4 chain another .then resolver to catch read
*/

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data.title))
    .catch(error => console.log(error))


// Top Level Await 
// This is like not always working

// let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
// console.log(response);

async function getData() {
    
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let data = await response.json()
    console.log(data);
}

getData()


