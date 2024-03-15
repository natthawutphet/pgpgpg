import Head from 'next/head'
import { useState } from 'react' // ลบ useEffect ออกเนื่องจากไม่ได้ใช้งาน
import Layout from '../components/Layout'



type Props = {
  posts: Post[]
}

type Post = {
  _id: string
  title: string
  content: string
}

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:3000/api/getPosts")
    const posts = await response.json()

    return {
      props: { posts }
    }
  } catch (error) {
    console.error(error)
    return {
      props: { posts: [] }
    }
  }
}

export default function Home({ posts: initialPosts }: Props) {
  const [posts, setPosts] = useState<Post[]>(initialPosts)

  const handleDeletePost = async (postId: string) => {
    try {
      const response = await fetch(`/api/deletePost?id=${postId}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        setPosts(posts.filter((post) => post._id !== postId))
      } else {
        console.error("Failed to delete the post.")
      }
    } catch (error) {
      console.error("An error occurred while deleting the post:", error)
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className='posts-body'>
          <h1 className='posts-body-heading'>Top 20 posts</h1>
          {posts.length > 0 ? (
            <ul className='posts-list'>
              {posts.map((post) => (
                <li key={post._id} className="post-item">
                  <div className='post-item-details'>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                  </div>
                  <div className='post-item-actions'>
               
                    <button onClick={() => handleDeletePost(post._id)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <h2 className='posts-body-heading'>Oops! No posts...</h2>
          )}
        </div>
      </Layout>

      {/* ส่วนของ footer และ styles คงที่จากตัวอย่างของคุณ */}

    </div>
  )
}
