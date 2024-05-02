"use client"
import Board from "@/components/Board";
import Header from "@/components/Header";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Home: React.FC = () => {

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
