"use client";
import dynamic from "next/dynamic";
import { suspend } from "suspend-react";
import React, { ReactNode } from 'react';

const LiveQueryProvider = dynamic(() => import("next-sanity/preview"));
const UniqueKey = Symbol("../../sanity/lib/client");

interface PreviewProviderProps {
  children: ReactNode
  token: string
}

export default function PreviewProvider({ children, token }: PreviewProviderProps) {
  
  const { client } = suspend(() => import("../sanity/config/sanity.client"), [UniqueKey])

  if (!token) {
    throw new TypeError("Missing token")
  }

  return (
    <LiveQueryProvider
      client={client}
      token={token}
    >
      {children}
    </LiveQueryProvider>
  )
  
}