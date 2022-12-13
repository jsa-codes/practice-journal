export const getAllJournalEntries = () => {
  return fetch("http://localhost:8000/journalentries", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
    .then(res => res.json())
}

export const getJournalEntryById = (id) => {
  return fetch(`http://localhost:8000/journalentries/${id}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
    .then(res => res.json())
}

export const getJournalEntryByUserId = (token) => {
  return fetch(`http://localhost:8000/journalentries?user=${token}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    }
  })
    .then(res => res.json())
}

export const createJournalEntry = journalentry => {
  return fetch("http://localhost:8000/journalentries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
    body: JSON.stringify(journalentry)

  }).then(res => res.json())
}

export const updateJournalEntry = journalentry => {
  return fetch(`http://localhost:8000/posts/${journalentry.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${localStorage.getItem("auth_token")}`
    },
    body: JSON.stringify(journalentry)
  })
}