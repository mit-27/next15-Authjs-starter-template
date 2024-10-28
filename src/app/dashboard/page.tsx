import { SignOut } from "@/components/sign-out-button";
import UserInfoClientSide from "@/components/ui/user-info-clientside";
import UserInfo from "@/components/user-info";
import React from "react";

const DahsboardPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1>Dashboard</h1>
      <UserInfo />
      <SignOut />
      <h2>Client Side Component</h2>
      <UserInfoClientSide />
    </div>
  );
};

export default DahsboardPage;
