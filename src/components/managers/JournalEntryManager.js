export const getAllJournalEntries = () => {
  return fetch("http://localhost:8000/journalentries", {
    headers: {
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    }
  })
    .then(res => res.json())
}

export const getJournalEntryById = (id) => {
  return fetch(`http://localhost:8000/journalentries/${id}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    }
  })
    .then(res => res.json())
}

export const getJournalEntryByUserId = (userId) => {
  return fetch(`http://localhost:8000/journalentries?user=${userId}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    }
  })
    .then(res => res.json())
}

export const createJournalEntry = (journalentry) => {
  return fetch("http://localhost:8000/journalentries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    },
    body: JSON.stringify(journalentry)

  }).then(res => res.json())
}

export const updateJournalEntry = (journalentry) => {
  return fetch(`http://localhost:8000/posts/${journalentry.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    },
    body: JSON.stringify(journalentry)
  })
}