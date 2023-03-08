const postBody = document.querySelector(".posts");


async function getPosts() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function getComments() {
    let url = 'https://jsonplaceholder.typicode.com/comments';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderPosts() {
    let posts = await getPosts()
    let comments = await getComments()
    let html = '';
    console.log(posts.slice(0, 5));
    console.log(comments.slice(0, 1))
    posts.slice(0, 5).forEach(post => {
        let htmlSegment = `<div class="post">
                                <h2>${post.title}</h2>
                                <div class="post_body">${post.body}</div>
                                <div class="comment">
                                    <h5>Comments</h5>
                                    <h3 class="comment_email">${comments[0].email}</h3>
                                    <span class="comment_body">${comments[0].body}</span>
                                </div>
                           </div>`;
        html += htmlSegment;
    });
    postBody.innerHTML = html;

}

renderPosts();


    





