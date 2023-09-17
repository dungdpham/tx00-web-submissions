
const apiUrl = 'http://localhost:3001/api/blogs/';

const blogId="650183e169624d2ed63d9982"

//v1
const deleteBlog = async (blogId) => {
        const response = await fetch(`${apiUrl}/${blogId}`, {
            method: 'DELETE',
        });
        const blog = await response.json();
        console.log('Blog deleted successfully');
        console.log(blog);
};

deleteBlog(blogId)


//v2

// const deleteBlog = async (blogId) => {
//     try {
//         const response = await fetch(`${apiUrl}/${blogId}`, {
//             method: 'DELETE',
//         });

//         if (!response.ok) {
//             throw new Error('Failed to delete the blog');
//         }

//         const blog = await response.json(); 
//         console.log('Blog deleted successfully');
//         console.log(blog);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };


// deleteBlog(blogId)