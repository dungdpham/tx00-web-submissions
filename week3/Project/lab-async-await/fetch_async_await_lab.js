async function fetchData() {
    console.log('Fetching data...');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    };

    const data = await response.json();
    console.log('Fetched data:', data);
};

fetchData();

async function fetchData2() {
    console.log('Fetching data2...');
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/nonexistent');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        };

        const data = await response.json();
        console.log('Fetched data2:', data);
    } catch (error) {
        console.error('Error:', error);
    }
};

fetchData2();