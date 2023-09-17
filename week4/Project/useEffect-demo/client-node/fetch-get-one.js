
const apiUrl = 'http://localhost:3001/api/blogs/';



let id="65001a604cebab2845261918"
const fetchBlog = async () => {
    const response = await fetch(`${apiUrl}/${id}`)
    console.log(`${apiUrl}/${id}`);
    const data = await response.json()

    console.log(data);
}

fetchBlog()

