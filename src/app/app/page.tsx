"use server";
import { auth } from "@/services/auth";
import UserInfo from "./user-info";

export default async function Page() {
  const session = await auth();

  return (
    <main className="flex justify-center items-center h-screen flex-col">
      <UserInfo user={session?.user} />
    </main>
  );
}
