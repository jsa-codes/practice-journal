export const getAllStudents = () => {
    return fetch(`http://localhost:8000/students`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("pj_token")}`
        }
    })
        .then(res => res.json())
}

export const getStudentById = (id) => {
    return fetch(`http://localhost:8000/students/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("pj_token")}`
        }
    })
        .then(res => res.json())
}

export const updateStudent = (student) => {
    return fetch(`http://localhost:8000/students/${student.id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("pj_token")}`
        },
        body: JSON.stringify(student)
    })
}

export const deleteStudent = (id) => {
    return fetch(`http://localhost:8000/students/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("pj_token")}`
        }
    })
}