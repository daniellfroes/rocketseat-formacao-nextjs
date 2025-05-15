import { useRouter } from "next/router";

export default function UserSegmentsPage() {
  const router = useRouter();

  const segments = router.query.slug as string[];

  return (
    <>
      <div>
        <h2>Users filters: {segments?.join(", ")}</h2>
      </div>
    </>
  );
}
