const posts = [{
    id: 1,
    title: "Dummy 1",
    contents: "Content for Dummy 1",
    created_at: "2023-09-07T03:15:17.821Z",
    updated_at: "2023-09-07T03:15:17.821Z"
    }, {
    id: 2,
    title: "Dummy 2",
    contents: "Content for Dummy 2",
    created_at: "2023-09-07T03:16:58.992Z",
    updated_at: "2023-09-07T03:16:58.992Z"
}];

const comments = [{
    text: 'Dummy comment for post',
    post_id: 1,
    created_at: "2023-09-07T03:53:38.839Z",
    updated_at: "2023-09-07T03:53:38.839Z"
}];

module.exports = {posts, comments};