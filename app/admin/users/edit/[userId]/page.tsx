"use client";
import React, { useState } from 'react'
import useSWR from "swr";
import Form from './Form';
const EditUser = ({ params }: { params: { userId: string } }) => {

    const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());
    const { data, error } = useSWR(`/api/users/edit/${params.userId}`, fetcher);


    if (!data) return <div>Loading...</div>;
    if (error) return <div>Failed to load</div>
    // https://stackoverflow.com/a/60510217/1386780

    return (
        <>
            <div className="container mx-auto">

                {data && <Form data={data} />}
            </div>
        </>
    );
}

export default EditUser
