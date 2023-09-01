import axios from "axios";
import prisma from "./utils/prisma";

const handler = async (req, res) => {
  const genre_ = await prisma.genres.findMany({});
  res.status(200);
};
export default handler;
