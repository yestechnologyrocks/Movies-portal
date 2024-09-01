

import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { movieId } = req.query
        const client = await clientPromise;
        const db = client.db("sample_mflix");
        const movies = await db
            .collection("movies")
            .findOne({ "_id": new ObjectId(movieId?.toString()) })
        res.json(movies);
    } catch (e) {
        console.error(e);
    }
};