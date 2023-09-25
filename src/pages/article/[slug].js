import { useRouter } from "next/router";
import Data from "../../app/components/data";

export default function Article() {
  const router = useRouter();

  const articleData = Data.find((art) => art.id === router.query.slug);
  console.log({ articleData });
  return (
    <main>
      <h1>Article</h1>
      <p>testing: {router.query.slug}</p>
    </main>
  );
}
