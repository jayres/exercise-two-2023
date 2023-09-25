import Data from "../app/components/data";
import ArticleCard from "../app/components/ArticleCard";
import styles from "../app/page.module.css";

export default function Home() {
  const projectName = "Exercise Two";

  return (
    <main className={styles.page}>
      <h1>{projectName}</h1>
      {Data.map((article) => (
        <ArticleCard
          key={article.id}
          date={new Date(article.publishedDate).toDateString()}
          description={article.blurb}
          imageAlt={article.image.alt}
          imageSrc={article.image.url}
          title={article.title}
        />
      ))}
    </main>
  );
}

{
  /* <ArticleCard
date="August 22, 2003"
description="Cool description"
title="Cool Title"
/> */
}
