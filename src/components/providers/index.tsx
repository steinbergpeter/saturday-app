"use client";

import { TanstackProvider } from "./tanstack-provider";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return <TanstackProvider>{children}</TanstackProvider>;
};

export { Providers };
