import type { NextApiRequest, NextApiResponse } from "next";
import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";
import { getSession } from "next-auth/react";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { description } = req.body;

    try {
      const session: any = await getSession({ req });
      const userNames = session?.user.name.split(" ");

      await fauna.query(
        q.Create(q.Collection("letters"), {
          data: {
            description,
            author: {
              ...session?.user,
              name: `${userNames[0]} ${userNames[userNames.length - 1] || ""}`,
            },
          },
        })
      );

      res.status(200).end();
    } catch (error: any) {
      res.status(500).end({
        message: "An unexpected error occurred please try again later",
      });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end({ message: "Metthod not allowed" });
  }
}
