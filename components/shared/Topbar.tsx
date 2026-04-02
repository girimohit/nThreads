


"use client";

import { OrganizationSwitcher, SignedIn, useClerk } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Topbar() {
  const { signOut } = useClerk();
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);

  const handleSignOut = async () => {
    setSigningOut(true);
    await signOut({ redirectUrl: "/sign-in" });
  };

  return (
    <nav className="topbar bg-gradient-to-r from-primary-600 to-primary-800 p-4 rounded-b-xl shadow-md flex justify-between items-center">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-white max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-4">
        <SignedIn>
          <button
            onClick={handleSignOut}
            disabled={signingOut}
            className="flex items-center text-white hover:text-primary-200 transition-colors disabled:opacity-50"
          >
            {signingOut ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                ></path>
              </svg>
            ) : (
              <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
            )}
            <span className="ml-2">Sign out</span>
          </button>
        </SignedIn>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger:
                "py-2 px-4 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors",
              organizationSwitcherPopoverCard: "bg-dark-3 shadow-2xl rounded-xl border border-dark-4 backdrop-blur-md",
              organizationSwitcherPopoverActions: "bg-dark-2 rounded-b-xl py-2",
              organizationSwitcherPopoverActionButton: "hover:bg-primary-500 group transition-colors px-4 py-2",
              organizationSwitcherPopoverActionButtonText: "text-light-1 text-base-medium font-medium group-hover:text-white",
              organizationSwitcherPopoverActionButtonIcon: "text-primary-500 group-hover:text-white",
              organizationSwitcherItem: "px-4 py-3 hover:bg-[#877EFF] group transition-all duration-200 cursor-pointer",
              organizationPreviewMainIdentifier: "text-light-1 font-semibold group-hover:text-white",
              organizationPreviewSecondaryIdentifier: "text-light-2 group-hover:text-light-1",
              userPreviewMainIdentifier: "text-light-1 font-semibold group-hover:text-white",
              userPreviewSecondaryIdentifier: "text-light-2 group-hover:text-light-1",
              organizationSwitcherPreviewTitle: "text-light-1 font-medium group-hover:text-white",
              organizationSwitcherPreviewSubtitle: "text-light-2 group-hover:text-light-1",
              footer: "hidden",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
