const updateForm = document.getElementById("update-form");
const post = document.getElementById("post");
const deleteBtn = document.getElementById("delete");

const deletePost = async (event) => {
    event.preventDefault();

    const id = post.getAttribute("data-postID");

    const response = await fetch(`/dashboard/${id}`, {
        method: "DELETE"
    })

    if(response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Post not deleted");
    }
}

const updatePost = async (event) => {
    event.preventDefault();

    const contentEl = document.getElementById("content-text");
    const titleEl = document.getElementById("title-text");
    const content = contentEl.value;
    const title = titleEl.value;
    const id = post.getAttribute("data-postId");

    const response = await fetch(`/dashboard/singlepost/${id}`, {
        method: "PUT",
        body: JSON.stringify({title, content}),
        headers: {'Content-Type': 'application/json'}
    })

    if(response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Post not updated")
    }
}

deleteBtn.addEventListener("click", deletePost);
updateForm.addEventListener("submit", updatePost);