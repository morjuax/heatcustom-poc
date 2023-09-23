
async function getUser(id: any) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data;
}
export default async function UserDetail({params}: any) {
  const user = await getUser(params.id)
  return (
    <div>
      <h1>User Detail</h1>
      <div>
        <img src={user.avatar} alt={user.email}/>
        <div>
          <h3>{user.id} {user.first_name} {user.last_name}</h3>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  )
}