import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SideNav = () => {
  const session = useSession();
  const user = session?.data?.user;
  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {user != null && <Link href={`/profiles/${user.id}`}>Profile</Link>}
        </li>
        {user == null ? (
          <li>
            <button onClick={() => void signIn()}>sign in</button>
          </li>
        ) : (
          <li>
            {/* if u don't pass in a callback function, the function will get excuted immdeaitely when the component mounts, thus u need to wrap it in a callback function */}
            <button onClick={() => void signOut()}>sign out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default SideNav;
