console.log('Fetching data...');

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log('Fetched data:', data);
});

fetch('https://jsonplaceholder.typicode.com/nonexistent')
.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    console.log('Fetched data:', data);
})
.catch((error) => {
    console.error('Error:', error);
})