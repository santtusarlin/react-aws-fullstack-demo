export interface Post {
  id?: string
  title: string
  comment: string
  imgSrc: string
}

export interface PostProps extends Post {
  children?: string
}
