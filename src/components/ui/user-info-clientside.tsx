"use client";

import React from "react";
import { useSession } from "next-auth/react";

const UserInfoClientSide = () => {
  const { data: session } = useSession();

  return (
    <div>
      <p>User Name : {session?.user?.name}</p>
      <p>User Email : {session?.user?.email}</p>
    </div>
  );
};

export default UserInfoClientSide;
