import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // Use Prisma's findMany with orderBy and take to get the top 5 posts by ViewCount
    const posts = await prisma.post.findMany({
      orderBy: {
        views: "desc",
      },
      take: 5,
    });

    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
