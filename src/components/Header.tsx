"use client";

import Logo from "@/assets/logo-symbol.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HeaderTop from "./HeaderTop";
import { useUser } from "@/context/UserContext";
import Logout from "./Logout";
import Link from "next/link";

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Header: React.FC = () => {
  const { userProfile, loading } = useUser();

  const pathname = usePathname();
  console.log(userProfile, "user");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {pathname !== "/auth/login" && (
        <div>
          <HeaderTop />
          <header className="bg-white shadow-xl">
            <nav
              aria-label="Global"
              className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-2 lg:px-8"
            >
              <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image src={Logo} width={50} height={50} alt="ebazaar-logo" />
                </Link>
              </div>
              {userProfile ? (
                <div>
                  <Menubar className="border-0">
                    <MenubarMenu>
                      <MenubarTrigger className="p-0 flex gap-2">
                        {userProfile.user.photo ? (
                          <div className="relative h-8 w-8">
                            <Image
                              src={userProfile.user.photo}
                              alt={userProfile.user.firstname || ""}
                              className="inline-block rounded-full"
                              fill
                            />
                          </div>
                        ) : (
                          <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100">
                            <svg
                              className="h-full w-full text-stone-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                        )}

                        <p className="font-medium text-stone-600">
                          {userProfile.user.firstname || "User name"}
                        </p>
                      </MenubarTrigger>
                      <MenubarContent>
                        <Logout />
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </div>
              ) : (
                <div className="flex flex-1 items-center justify-end gap-x-6">
                  <a
                    href="/auth/login"
                    className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Нэвтрэх
                  </a>
                  <a
                    href="/auth/register"
                    className="rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    Бүртгүүлэх
                  </a>
                </div>
              )}
            </nav>
          </header>
        </div>
      )}
    </>
  );
};

export default Header;
