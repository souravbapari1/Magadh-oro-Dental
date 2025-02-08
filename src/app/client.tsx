"use client";

import React, { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/client";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const Client = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApolloProvider>
  );
};

export default Client;
