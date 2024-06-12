"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type Props = {
  user: Session["user"];
};

export default function UserInfo({ user }: Props) {
  if (!user) return;

  return (
    <>
      <Avatar className="mb-5">
        <AvatarFallback>{user.email?.at(0)?.toUpperCase()}</AvatarFallback>
      </Avatar>
      <span>{user.email}</span>
      <Button className="mt-5" variant={"secondary"} onClick={() => signOut()}>
        Sign out
      </Button>
    </>
  );
}
