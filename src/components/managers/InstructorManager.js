export const getInstructors = () => {
  return fetch("http://localhost:8000/instructors", {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    }
  })
    .then(res => res.json())
}

export const getSingleInstructor = (id) => {
  return fetch(`http://localhost:8000/instructors/${id}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    }
  })
    .then(res => res.json())
}

export const addInstructor = instructor => {
  return fetch("http://localhost:8000/instructors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`

    },
    body: JSON.stringify(instructor)
  })
}

export const updateInstructor = instructor => {
  return fetch(`http://localhost:8000/instructors/${instructor.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    },
    body: JSON.stringify(instructor)
  })
}

export const deleteInstructor = (id) => {
  return fetch(`http://localhost:8000/instructors/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    }
  })
}