import { SignIn } from "@/components/sign-in-button";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen font-[family-name:var(--font-geist-sans)] gap-2">
      <p>Hello world</p>
      <SignIn />
    </div>
  );
}
