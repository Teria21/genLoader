// SERVER
import express from 'express'
const app = express()

app.get('/', function (req, res) {
    res.sendFile("./index.html");
})

app.get('/dummyData', function (req, res) {
    const n = Math.floor(Math.random() * 100);
    setTimeout(() => res.send(Array(n).fill("Asd").join("")), n * 10);
})

app.listen(3000);

// // CLIENT
// import fetch from 'node-fetch';
// async function* genLoader(url, passes = 5) {
//     let iCurrentPass = Math.max(passes, 0);
//     let oPayload;
//     while (iCurrentPass--) {
//         oPayload = await fetch(url + (url.includes("?") ? "&" : "?") + `compr=${iCurrentPass}`);
//         yield oPayload;
//     }
//     return oPayload;
// }

// async function loadImg(targetElementId, url, passes) {
//     const targetElement = document.getElementById(targetElementId);
//     if (!targetElement)
//         return;
//     const placeResultIntoTarget = (fetchValue, targetElement) => targetElement.innerHTML = fetchValue.text();
//     const imgLoader = genLoader(url);
//     let result = imgLoader.next();
//     while (!result.done) {
//         placeResultIntoTarget(await result.value, targetElement);
//         result = imgLoader.next();
//     }
//     placeResultIntoTarget(await result.value, targetElement);
// }

// loadImg("myImg", "http://localhost:3000/myImage.jpg");