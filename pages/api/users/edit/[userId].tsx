
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

const User = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { userId } = req.query
        const client = await clientPromise;
        console.log(userId)
        const db = client.db("sample_mflix");
        const user = await db
            .collection("users")
            .findOne({ "_id": new ObjectId(userId?.toString()) })
        res.json(user);
    } catch (e) {
        console.error(e);
    }
};
export default User