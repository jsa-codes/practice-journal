export const getAllUsers = () => {
  return fetch("http://localhost:8000/users", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    }
  })
    .then(res => res.json())
}

export const getUserById = (id) => {
  return fetch(`http://localhost:8000/users/${id}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    }
  })
    .then(res => res.json())
}

export const addUser = user => {
  return fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    },
    body: JSON.stringify(user)
  })
}

export const updateUser = user => {
  return fetch(`http://localhost:8000/users/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    },
    body: JSON.stringify(user)
  })
}

export const deleteUser = (userId) => {
  return fetch(`http://localhost:8000/users/${userId}`, {
    method: "DELETE",
    "Authorization": `Token ${localStorage.getItem("pj_token")}`
  })
}