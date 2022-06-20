import Head from "next/head";
import styles from "./styles.module.scss";
import { createClient } from '../../../prismicio'
import { RichText } from "prismic-dom";

type Post = {
  slug: string,
  title: string,
  excerpt: string,
  updateAt: string,
}
interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>Posts | Ignews</Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <a key={post.slug} href="#">
              <time>{post.updateAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}


export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getAllByType("publication", {
    pageSize: 100
  })

  const posts = page.map(post => {
    console.log();
    
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === "paragraph")?.text ?? "",
      updateAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    props: { posts }, // Will be passed to the page component as props
  }
}