export const getStudents = () => {
    return fetch("http://localhost:8000/students", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("pj_token")}`
        }
    })
        .then(res => res.json())
}

export const getStudentById = (id) => {

}

export const updateStudent = () => {

}

export const deleteStudent = () => {

}