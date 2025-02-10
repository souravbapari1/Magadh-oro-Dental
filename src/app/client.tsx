"use client";
import toast, { Toaster } from "react-hot-toast";
import client from "@/graphql/client";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

const Client = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster />
      </QueryClientProvider>
    </ApolloProvider>
  );
};

export default Client;
