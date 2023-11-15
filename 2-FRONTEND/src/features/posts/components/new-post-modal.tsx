import { Button, Modal } from "antd"
import { useState } from "react"

import { Form, Input, Upload } from "antd"
import { PlusOutlined } from "@ant-design/icons"

export const PostForm = () => {
  const { TextArea } = Input

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }

  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log(values)
  }

  const onReset = () => {
    form.resetFields()
  }

  const onFormValuesChange = (values: any) => {
    console.log(values)
  }

  return (
    <Form
      id="new-post-form"
      layout="vertical"
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      onValuesChange={onFormValuesChange}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="comment"
        label="Comment"
        rules={[
          { required: true },
          {
            pattern: /^.{0,255}$/,
            message: "Max amount of 255 characters exceeded",
          },
        ]}
      >
        <TextArea rows={4} showCount />
      </Form.Item>

      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true }]}
      >
        <Upload listType="picture-card" maxCount={1}>
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>
    </Form>
  )
}

export const NewPost = () => {
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
  }

  const handleOk = () => {
    console.log("Clicked OK")
    setOpen(false)
  }

  const handleCancel = () => {
    console.log("Clicked cancel button")
    setOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="New post"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <PostForm />
      </Modal>
    </>
  )
}
