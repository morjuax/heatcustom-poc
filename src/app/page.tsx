import React from 'react'
import Users from "@/components/Users";

async function fetchUsers() {
  const res = await  fetch('https://reqres.in/api/users')
  const data = await res.json();
  return data.data
}

 export default async function IndexPage() {
  const users = await fetchUsers()
  return (
    <div>
      <Users users={users}></Users>
    </div>
  )
}