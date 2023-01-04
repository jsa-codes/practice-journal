export const getAllJournalEntries = () => {
  return fetch("http://localhost:8000/journalEntries", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    }
  })
    .then(res => res.json())
}

export const getJournalEntryById = (id) => {
  return fetch(`http://localhost:8000/journalEntries/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    }
  })
    .then(res => res.json())
}

export const getJournalEntryByUserId = (userId) => {
  return fetch(`http://localhost:8000/journalEntries?user=${userId}`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    }
  })
    .then(res => res.json())
}

export const createJournalEntry = (journalentry) => {
  return fetch("http://localhost:8000/journalEntries", {
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
  return fetch(`http://localhost:8000/journalEntries/${journalentry.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    },
    body: JSON.stringify(journalentry)
  })
}