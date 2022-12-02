import type { NextApiRequest, NextApiResponse } from "next";
import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      const letters: any = await fauna.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection("letters"))),
          q.Lambda((data) => q.Get(data))
        )
      );

      res.status(200).json(letters?.data);
    } catch (error: any) {
      res.status(500).json(error);
    }
  } else {
    res.setHeader("Allow", "Get");
    res.status(405).end({ message: "Metthod not allowed" });
  }
}
