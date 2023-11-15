import { Flex } from "antd"
import { getPosts } from "../services/posts.service"
import { Post } from "../components/post-card"
import "./posts-list.css"
import { NewPost } from "../components/new-post-modal"

const posts = getPosts()

const PostsPage = () => {
  return (
    <div>
      <h1>Posts</h1>
      <NewPost />
      <div>
        <Flex gap="middle" wrap="wrap" className="posts-flex-container">
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                title={post.title}
                comment={post.comment}
                imgSrc={post.imgSrc}
              />
            )
          })}
        </Flex>
      </div>
    </div>
  )
}

export default PostsPage
