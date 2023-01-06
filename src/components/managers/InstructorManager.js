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

export const getMyInstructor = (studentId) => {
  return fetch(`http://localhost:8000/instructors?student=${studentId}`, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    }
  })
    .then(res => res.json())
}


export const updateInstructor = (instructor) => {
  return fetch(`http://localhost:8000/instructors/${instructor.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    },
    body: JSON.stringify(instructor)
  })
    .then(res => res.json())
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