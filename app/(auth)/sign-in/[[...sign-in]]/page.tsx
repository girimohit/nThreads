import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex-center min-h-screen w-full bg-dark-1">
      <SignIn 
        appearance={{
          baseTheme: dark,
          elements: {
            formButtonPrimary: "bg-primary-500 hover:bg-purple-700 text-sm normal-case",
            card: "bg-dark-2 backdrop-blur-md border border-dark-4 shadow-xl",
            footerActionLink: "text-primary-500 hover:text-primary-600",
            footer: "hidden",
          }
        }}
      />
    </div>
  );
}
