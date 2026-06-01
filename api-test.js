require('dotenv').config()

const key = process.env.TEST_API_KEY

async function fetchCompanyData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
  const data = await response.json()
  
  console.log("Status:", response.status)
  console.log("Company:", data.company.name)
  console.log("API Key loaded:", key)
}

fetchCompanyData()