import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { CreateOrganization } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { fetchUser } from "@/lib/actions/user.actions";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <>
      <h1 className='head-text'>Create Community</h1>

      <section className='mt-9'>
        <CreateOrganization
          afterCreateOrganizationUrl='/communities'
          appearance={{
            baseTheme: dark,
            elements: {
              rootBox: "flex justify-center items-center w-full",
              cardRoot: "bg-dark-2 border border-dark-4 shadow-2xl rounded-2xl w-full max-w-full",
              formButtonPrimary: "bg-primary-500 hover:bg-purple-700 transition-all duration-200 text-base-semibold",
              organizationSwitcherTrigger: "py-3 px-5 bg-dark-3 rounded-lg border border-dark-4 text-light-1",
              footer: "hidden",
            },
          }}
        />
      </section>
    </>
  );
}

export default Page;
