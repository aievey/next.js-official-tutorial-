import Link from "next/link";
export default function Page() {
  return (
    <>
      <p>Dashboard Page</p>
      <Link href="/dashboard/invoice">Invoice</Link> <br />
      <Link href="/dashboard/customers">customers</Link>
    </>
  );
}
