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
              rootBox: "flex justify-center items-center",
              cardRoot: "bg-dark-2",
            },
          }}
        />
      </section>
    </>
  );
}

export default Page;
