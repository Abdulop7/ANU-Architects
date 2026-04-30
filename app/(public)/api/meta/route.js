import { NextResponse } from "next/server";

const PAGE_ID = "102369609131014";
const ACCESS_TOKEN = "EAATCd12aucIBRbKdKDWGkTGEZCUXZCRW863vEW0pXzOYKxXVOz5CZCGWypUszL4BxFlafkkcblK9UiTHJFRSZA02ZArk0epmiKTPSveTVzuIEYXjxhvnpppPADrBCZBWMlTPPjQt8y7hz6W61Av3YFc2hAaqEJDaAzZCM87QeRikBqy6AMXBjnLQIUTIwiT8GoRuMSandPYm7gAZAKAG0D0C6sZA7P3wK1Mh6bxw4JQHgn2fLILXNzrCz";

export async function GET() {
    try {
        // 🔹 Fetch Posts
        const postsRes = await fetch(
            `https://graph.facebook.com/v25.0/${PAGE_ID}/posts?fields=message,created_time,full_picture,permalink_url,likes.summary(true),comments.summary(true)&access_token=${ACCESS_TOKEN}`
        );

        const postsData = await postsRes.json();

        // 🔹 Fetch Page Info (followers, likes, etc.)
        const pageRes = await fetch(
            `https://graph.facebook.com/v25.0/${PAGE_ID}?fields=name,fan_count,followers_count,engagement&access_token=${ACCESS_TOKEN}`
        );
        // console.log(pageRes);


        const pageData = await pageRes.json();

        // 🔹 Format Posts
        const formattedPosts = postsData.data?.map((post) => ({
            id: post.id,
            caption: post.message || "",
            image: post.full_picture || null,
            createdAt: post.created_time,
            permalink: post.permalink_url,
            likes: post.likes?.summary?.total_count || 0,
            comments: post.comments?.summary?.total_count || 0,
        }));

        return NextResponse.json({
            success: true,
            page: {
                name: pageData.name,
                followers: pageData.followers_count,
                fans: pageData.fan_count,
            },
            posts: formattedPosts,
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error.message,
            },
            { status: 500 }
        );
    }
}