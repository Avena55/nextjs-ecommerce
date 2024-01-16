import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const cart = await getCart();


  return (
    <div className="bg-neutral-900">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost text-xl normal-case hover:bg-transparent text-primary"
          >
            <Image src={logo} alt="Atlantic logo" height={40} width={40} />
            Atlantic
          </Link>
        </div>
        <div className="flex-none gap-2">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="min-w-[200px input input-bordered w-full"
              />
            </div>
          </form>
          <ShoppingCartButton cart={cart} />
        </div>
      </div>
    </div>
  );
};


