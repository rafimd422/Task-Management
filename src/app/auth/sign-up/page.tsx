"use client";
import React, { useEffect } from "react";
import { Button, Form, Grid, Input, Typography } from "antd";
import { signUpStyles } from "../auth.styles";
import useAuthStore from "@/CustomHook/useAuthStore";
import { useRouter } from "next/navigation";

const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

interface FormValues {
  name: string;
  image: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { user, createUser, init } = useAuthStore();

  const screens = useBreakpoint();
  const styles = signUpStyles(screens);

  console.log(user);
  const router = useRouter()
  if(user !== null){
    router.push('/')
  }
  
  // It is use for form control
  const onFinish = async ({ name, image, email, password }: FormValues) => {
    try {
      await createUser(email, password, name, image);
    } catch (error) {
      // Handle errors if createUser fails
      console.error("Failed to create user:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = init();

    return () => unsubscribe();
  }, [init]);

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
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please write your Name!",
              },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="image"
            rules={[
              {
                type: "url",
                required: true,
                message: "Please provide your image url!",
              },
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
                message: "Please input your Email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password type="password" placeholder="Password" />
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
};

export default SignUp;
