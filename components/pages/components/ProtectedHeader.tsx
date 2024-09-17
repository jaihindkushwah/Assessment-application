"use client";
// import { buttonVariants } from "@/components/ui/button";
import useLogout from "@/hooks/useLogout";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSelector } from "react-redux";
import { getAuthState } from "@/store/auth";
import { getAvatarFallbackName } from "@/lib/getAvatarFallbackName";

export function ProfileAvatar() {
  const { profile } = useSelector(getAuthState);
  const { logoutHandler } = useLogout();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="w-12 h-12 border">
            <AvatarImage src={profile?.avatar?.url} alt={profile?.name} />
            <AvatarFallback>
              {getAvatarFallbackName(profile?.name)}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-1">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/pages/protected/profile">
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="cursor-pointer">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Subscription
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer" onClick={logoutHandler}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

function ProtectedHeader() {
  return (
    <header className="flex gap-4 items-center justify-end  p-3 ">
      {/* <Link
        className={buttonVariants({ variant: "default" })}
        href={"/pages/protected/compiler"}
      >
        compiler
      </Link>
      <Link
        className={buttonVariants({ variant: "default" })}
        href={"/pages/protected/mcq"}
      >
        Quiz
      </Link> */}

      <ProfileAvatar />
    </header>
  );
}

export default ProtectedHeader;
