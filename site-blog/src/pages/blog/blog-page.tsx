import { GetStaticProps } from "next";
import { allPosts } from "contentlayer/generated";

import { BlogList, BlogListProps } from "@/templates/blog";

export const getStaticProps = (async () => {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
}) satisfies GetStaticProps<BlogListProps>;

export default function BlogPage({ posts }: BlogListProps) {
  return <BlogList posts={posts} />;
}
