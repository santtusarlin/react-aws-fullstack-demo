import { Post } from "../models/post.model"

const posts: Post[] = [
  {
    id: "1",
    title: "Title 1",
    comment: "This is no. 1 post.",
    imgSrc: "https://picsum.photos/200",
  },
  {
    id: "2",
    title: "Title 2",
    comment: "This is no. 2 post.",
    imgSrc: "https://picsum.photos/200",
  },
  {
    id: "3",
    title: "Title 3",
    comment: "This is no. 3 post.",
    imgSrc: "https://picsum.photos/200",
  },
  {
    id: "4",
    title: "Title 4",
    comment: "This is no. 4 post.",
    imgSrc: "https://picsum.photos/200",
  },
  {
    id: "5",
    title: "Title 5",
    comment: "This is no. 5 post.",
    imgSrc: "https://picsum.photos/200",
  },
  {
    id: "6",
    title: "Title 6",
    comment: "This is no. 6 post.",
    imgSrc: "https://picsum.photos/200",
  },
  {
    id: "7",
    title: "Title 7",
    comment: "This is no. 7 post.",
    imgSrc: "https://picsum.photos/200",
  },
]

export const getPosts = () => {
  return posts
}
