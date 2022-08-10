const newPostForm = document.getElementById("new-post");

const newPost = async (event) => {
    event.preventDefault();

    const titleEl = document.getElementById("post-title");
    const contentEl = document.getElementById("post-title");
    const title = titleEl.value
    const content = contentEl.value

    if(!title || !content) {
        alert("You must enter a title/text for your post")
    } else {
        const response = await fetch("/dashboard",
        {
            method: "POST",
            body: JSON.stringify({title, content}),
            headers: {"Content-Type": "application/json"}
        })

        if(response.ok) {
            location.reload()
        } else {
            alert("New post not created")
        }
    }
}

newPostForm.addEventListener("submit", newPost);