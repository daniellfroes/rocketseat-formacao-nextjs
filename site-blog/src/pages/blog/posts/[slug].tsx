import { useRouter } from "next/router";

export default function PostsPage() {
  const router = useRouter();

  console.log(router.query.slug);

  return (
    <>
      <div>
        <h2>Post identifier: {router.query.slug}</h2>
      </div>
    </>
  );
}
