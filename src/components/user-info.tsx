import { auth } from "@/lib/auth";
// import Image from "next/image";

export default async function UserInfo() {
  const session = await auth();

  if (!session?.user) return null;

  console.log(session);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img
        src={session?.user?.image ?? ""}
        alt="User Avatar"
        width={100}
        height={100}
      />
      <p>{`User Name : ${session?.user?.name}`}</p>
      <p>{`User Email : ${session?.user?.email}`}</p>
    </div>
  );
}
