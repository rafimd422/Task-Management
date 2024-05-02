"use client";
import useAuthStore from "@/CustomHook/useAuthStore";
import Board from "@/components/Board";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Home: React.FC = () => {
  const { user } = useAuthStore();

  const router = useRouter();

  if (user === null) {
    router.push("/auth/sign-in");
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen w-screen">
        <Header />
        <Board />
      </div>
    </QueryClientProvider>
  );
};

export default Home;
