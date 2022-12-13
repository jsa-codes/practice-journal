export const getAllInstructors = () => {
  return fetch("http://localhost:8000/practicejournalusers", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
    .then(res => res.json())
}

export const getInstructorById = (id) => {
  return fetch(`http://localhost:8000/instructors/${id}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
    .then(res => res.json())
}

export const addInstructor = instructor => {
  return fetch("http://localhost:8000/instructors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(instructor)
  })
}

export const updateInstructor = instructor => {
  return fetch(`http://localhost:8000/instructors/${instructor.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
    body: JSON.stringify(instructor)
  })
}

export const deleteInstructor = (instructorId) => {
  return fetch(`http://localhost:8000/instructors/${instructorId}`, {
    method: "DELETE",
  })
}