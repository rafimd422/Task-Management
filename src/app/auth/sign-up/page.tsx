"use client"
import React from "react";
import { Button, Form, Grid, Input, Typography, message } from "antd";
import { signUpStyles } from "../auth.styles";


const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

interface FormValues {
  name: string;
  url: string;
  email: string;
  password: string;
}

const SignUp:React.FC = () => {

  const screens = useBreakpoint();
  const styles = signUpStyles(screens);

  // It is use for form control
  const onFinish = (values: FormValues) => {
console.log(values)
    message.success("Account Created Successfully");
  };

  const onFinishFailed = () => {
    message.error('Failed to create account!');
  };


  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.464294" width="24" height="24" rx="4.8" fill="#1890FF" />
            <path
              d="M14.8643 3.6001H20.8643V9.6001H14.8643V3.6001Z"
              fill="white"
            />
            <path
              d="M10.0643 9.6001H14.8643V14.4001H10.0643V9.6001Z"
              fill="white"
            />
            <path
              d="M4.06427 13.2001H11.2643V20.4001H4.06427V13.2001Z"
              fill="white"
            />
          </svg>
          <Title style={styles.title}>Sign up</Title>
          <Text style={styles.text}>
            Welcome back to AntBlocks UI! Please enter your details below to
            sign in.
          </Text>
        </div>
        <Form
          name="Create_Account"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please write your Name!"
              }
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="imageUrl"
            rules={[
              {
                required: true,
                message: "Please write your Name!"
              }
            ]}
          >
            <Input placeholder="Image Url" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!"
              }
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!"
              }
            ]}
          >
            <Input.Password
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
            <div style={styles.footer}>
              <Text style={styles.text}>Already have an account?</Text>{" "}
              <Link href="/auth/sign-in">Sign in now</Link>
            </div>
          </Form.Item>
        </Form>

      </div>
    </section>
  );
}

export default SignUp;