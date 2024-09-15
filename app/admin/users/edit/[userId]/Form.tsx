import React, { useState } from 'react'
interface IEditForm {
    name: string;
    setName: any;
    email: string;
    setEmail: any
}
const Form = ({ data }) => {
    const [name, setName] = useState(data.name);
    const [email, setEmail] = useState(data.email);
    return (
        <form>
            <div className="space-y-12 px-5">
                <div className="border-b border-gray-900/10 pb-12">

                    <h2 className="text-base font-semibold leading-7 text-gray-900">Edit User Information</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"

                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input type="text"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    name="email" id="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </div>
        </form>
    )
}

export default Form
