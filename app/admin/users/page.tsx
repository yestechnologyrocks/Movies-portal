"use client";
import { Metadata } from "next"
import Link from "next/link";
import useSWR from "swr";

interface Users {
    _id: string;
    name: string;
    email: string;
}

const UsersComponent = () => {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error } = useSWR('/api/users', fetcher);
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <div className="container mx-auto">
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user: Users, index: number) => (
                                <tr key={user._id} >
                                    <td>{index + 1}</td>
                                    <td> {user.name}</td>
                                    <td> {user.email}</td>
                                    <td>
                                        <Link href={`/admin/users/edit/${user._id}`}><button className="btn btn-sm btn-accent mr-1">Edit</button></Link>
                                        <button className="btn btn-sm btn-neutral">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div></div>
    );
}
export default UsersComponent