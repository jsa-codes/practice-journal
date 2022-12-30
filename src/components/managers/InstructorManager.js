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

export const getInstructorById = (id) => {
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
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    },
    body: JSON.stringify(instructor)
  })
}

export const deleteInstructor = (instructorId) => {
  return fetch(`http://localhost:8000/instructors/${instructorId}`, {
    method: "DELETE",
  })
}