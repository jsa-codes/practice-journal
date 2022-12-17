export const getStudents = () => {
    return fetch("http://localhost:8000/students", {
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
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("pj_token")}`
        },
        body: JSON.stringify()
    })
        .then(res => res.json())
}

export const updateStudent = () => {

}

export const deleteStudent = () => {

}