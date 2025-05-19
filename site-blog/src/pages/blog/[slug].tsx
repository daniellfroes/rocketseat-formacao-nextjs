import { GetStaticPaths, GetStaticProps } from "next";

import { allPosts } from "contentlayer/generated";
import { PostPage as Post, PostPageProps } from "@/templates/blog";

export const getStaticPaths = (async () => {
  // Posso buscar todos os posts direto, mas estou ordenando para pré gerar apenas os mais recentes
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Pego apenas os 6 mais recentes para não pré gerar todos os posts do array
  const recentPosts = sortedPosts.slice(0, 6);

  const paths = recentPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: "blocking",
    // Caso hajam mais posts que os 6 recentes que defini, e for chamado a pagina pra um que estava fora dos pré gerados
    // o blocking fará o build dessa em especifico, caso contrário outros posts fora do recente não serão acessíveis
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { slug } = context.params as { slug: string };
  const post = allPosts.find((post) => post.slug === slug);
  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
}) satisfies GetStaticProps;

export default function PostPage({ post }: PostPageProps) {
  return <Post post={post} />;
}
