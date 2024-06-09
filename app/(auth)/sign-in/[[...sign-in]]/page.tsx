import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-black">Welcome Back!</h1>
          <p className="text-base text-black">
            Log in or Create account to see your dashboard!
          </p>
          <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn />
          </ClerkLoaded>
          <ClerkLoading>
            <p>Loading</p>
          </ClerkLoading>
          </div>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center"></div>
    </div>
  );
}
