import { useRouter } from "next/router";
import "../../app/globals.css";
import Data from "../../app/components/data";
import styles from "./article.module.css";

export default function Article() {
  const router = useRouter();
  const slug = router.query.slug;

  const articleData = Data.find((val) => val.id === slug);

  if (!articleData) return null;

  return (
    <main>
      <div className={styles.articleHeader}>
        <div className={styles.articleWrapper}>
          <h1>{articleData.title}</h1>
          <p>{new Date(articleData.publishedDate).toDateString()}</p>
          <p className={styles.articleHeaderBlurb}>{articleData.blurb}</p>
        </div>
      </div>
      <div className={styles.articleBody}>
        <div className={styles.articleWrapper}>
          {articleData.articleText.map((textChunk) => (
            <p>{textChunk.data}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
