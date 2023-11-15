import { Card } from "antd"
import { PostProps } from "../models/post.model"

export function Post(props: PostProps) {
  return (
    <Card
      className="post-card"
      title={props.title}
      cover={<img alt="example" src={props.imgSrc} />}
    >
      <p>{props.comment}</p>
    </Card>
  )
}
