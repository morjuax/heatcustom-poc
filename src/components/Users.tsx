"use client"

import {useRouter} from "next/navigation";

export default function Users({users}: any) {
  const router = useRouter()
  return (
    <ul>
      {
        users.map((user: any) => (
          <li className="shadow-sm border-solid border-2 rounded mb-3 flex justify-between items-center p-3 hover:bg-gray-50" key={user.id} onClick={() =>
              router.push(`/users/${user.id}`)
            }>
            <div>
              <h5 className="h-5">{user.id} {user.first_name} {user.last_name}</h5>
              <p>{user.email}</p>
            </div>
            <img className="rounded-full" src={user.avatar} alt={user.email}/>
          </li>
        ))
      }
    </ul>
  )
}