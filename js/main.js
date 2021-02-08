const getContent = document.getElementById('content');
const api = "https://type.fit/api/quotes";
const nextQuote = document.getElementById('nextQuote').addEventListener('click', next);

let allData = [];

async function fetchAsync() {
    
    const response = await fetch(api);
    const data = await response.json();
    const r = await Math.floor(Math.random() * data.length);
    getContent.innerHTML = await data[r].text + ' -' + data[r].author;

    allData = data;

}
fetchAsync();

function next() {
    const r = Math.floor(Math.random() * allData.length);
    getContent.innerHTML = allData[r].text + ' -' + allData[r].author;

}