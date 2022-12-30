export const getComments = () => {
    return fetch("http://localhost:8000/comments", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("pj_token")}`
        }
    })
        .then(res => res.json())
}

export const getCommentById = (id) => {
    return fetch(`http://localhost:8000/comments/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("pj_token")}`
        }
    })
        .then(res => res.json())
}

export const getCommentsByJournalEntryId = (journalEntryId) => {
    return fetch(`http://localhost:8000/comments?journalEntries=${journalEntryId}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("pj_token")}`
        }
    })
        .then(res => res.json())

}

export const createComment = (comment) => {
    return fetch("http://localhost:8000/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("pj_token")}`
        },
        body: JSON.stringify(comment)
    })
        .then(res => res.json())
}

export const editCurrentComment = (comment) => {
    return fetch(`http://localhost:8000/comments/${comment.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("pj_token")}`
        }
    })
        .then(res => res.json())
}

export const deleteComment = (commentId) => {
    return fetch(`http://localhost:8000/comments/${commentId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("pj_token")}`
        }
    })
}