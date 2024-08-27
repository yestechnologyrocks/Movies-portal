import React from 'react'

interface User {
    id: number
    name: string
    email: string
}
const UsersPage = async () => {
    // Always fetch in server component
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        // Caching behavior only available in fetch
        // cache: 'no-cache' signifies no cache to happen meaning every 
        // changing operation like new Date() will render the exact time which
        //  is not the case if we select normal cache in prod build

        // next: { revalidate: 10 }


    })
    const users: User[] = await res.json();
    return (
        <>
            <h1>Users</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user => <tr key={user.id}>
                            <td></td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>))}
                    </tbody>
                </table></div>

        </>
    )
}

export default UsersPage
