async function getUser(id: any) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data;
}

export default async function UserDetail({params}: any) {
  const user = await getUser(params.id)
  console.log(user)
  return (
    // <div>
    //   <h1>User Detail</h1>
    //   <div>
    //     <img src={user.avatar} alt={user.email}/>
    //     <div>
    //       <h3>{user.id} {user.first_name} {user.last_name}</h3>
    //       <p>{user.email}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={user.avatar} alt={user.email}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">#{user.id} {user.first_name} {user.last_name}</div>
          <p className="text-gray-700 text-base">
            {user.email}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
    </div>

  )
}