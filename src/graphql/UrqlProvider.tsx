"use client";

import { UrqlProvider } from "@urql/next";
import { useMemo, PropsWithChildren } from "react";
import { cacheExchange, createClient, fetchExchange, ssrExchange } from "urql";

const MyUrqlProvider = ({ children }: PropsWithChildren) => {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== "undefined",
    });

    const client = createClient({
      url: process.env.NEXT_PUBLIC_API_URL ?? "",
      exchanges: [cacheExchange, ssr, fetchExchange],
      suspense: true,
    });

    return [client, ssr];
  }, []);

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
};

export default MyUrqlProvider;
