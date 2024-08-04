import Link from "next/link";

const NavBar = () => {
  return (
    <section className="flex justify-between w-full">
      <Link href={"/"} className="font-extrabold text-xl">
        LOGO
      </Link>
      <nav className="flex justify-between items-center gap-6 font-semibold w-1/4">
        <Link href={"/"}>Home</Link>
        <Link href={"/users"}>Users</Link>
        <Link href={"/posts"}>Posts</Link>
      </nav>
    </section>
  );
};

export default NavBar;
