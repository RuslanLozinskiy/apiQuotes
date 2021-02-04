const getContent = document.getElementById('content');
const api = "https://type.fit/api/quotes";
const nextQuote = document.getElementById('nextQuote').addEventListener('click', next);

let allData = [];

async function fetchAsync() {
    const r = Math.floor(Math.random() * 1643);
    const response = await fetch(api);
    const data = await response.json();
    getContent.innerHTML = await data[r].text + ' -' + data[r].author;

    allData = data;

}
fetchAsync();

function next() {
    const r = Math.floor(Math.random() * 1643);
    getContent.innerHTML = allData[r].text + ' -' + allData[r].author;

}