'use client'
import { GetServerSideProps } from 'next';
import React from 'react'
import clientPromise from "../../lib/mongodb";
import useSWR from 'swr';
import Link from 'next/link';


interface Movie {
    _id: string;
    title: string;
    metacritic: number;
    plot: string;
    poster: string
}
interface MoviesProps {
    movies: Movie[];
}

const Page = () => {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error } = useSWR('/api/movies', fetcher);
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Movies</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {data.map((movie: Movie) => (
                            <div key={movie._id} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        alt={movie.title}
                                        src={movie.poster}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <Link key={movie._id} href={`/movies/${movie._id}`}>
                                        <span className="absolute inset-0" />
                                        {movie.title}
                                    </Link>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{movie.plot}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page

