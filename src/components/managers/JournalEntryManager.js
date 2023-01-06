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

export const updateJournalEntry = (journalEntry) => {
  console.log(journalEntry);
  return fetch(`http://localhost:8000/journalEntries/${journalEntry.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    },
    body: JSON.stringify(journalEntry)
  })
}

export const deleteJournalEntry = (id) => {
  return fetch(`http://localhost:8000/journalEntries/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Token ${localStorage.getItem("pj_token")}`
    }
  })
}