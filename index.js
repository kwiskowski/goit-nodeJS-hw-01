// console.log("Hello World");
// console.log(process.platform);

//Async callbacks

// const { readFile, readFileSync } = require("fs");
// const txt = readFileSync("./hello.txt", "utf-8");

// readFile("./hello.txt", "utf-8", (err, txt) => {
//   console.log(txt);
// });
// console.log("write it first");

//(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )

//Async callbacks 2

// const { readFile } = require("fs").promises;

// async function hello() {
//   const file = await readFile("./hello.txt", "utf-8");
// }

// console.log(hello());

//(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )

//Moduły
// const { request } = require("http");
// const myModule = require("./my-module");
// console.log(myModule);

// const express = require("express");
// const { readFile } = require("fs");
// const app = express();

//(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )

// APP Get

// app.get("/", (request, response) => {
//   readFile("./home.html", "utf-8", (err, html) => {
//     if (err) {
//       response.status(500).send("sorry, no coockies for ya");
//     }
//     response.send(html);
//   });
// });

// APP Get by promises

// app.get("/", async (request, response) => {
//   response.send(await readFile("./home.html", "utf-8"));
// });

//(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )

//APP Listen

// app.listen(process.env.PORT || 3000, () =>
//   console.log(`App avaliable on ${"http://localhost:3000"}`)
// );

//(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )(◐ω◑ )

const myModule = require("./my-module");
console.log(myModule);
