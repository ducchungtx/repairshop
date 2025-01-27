import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1>Chung&apos;s Computer<br />Repair Shop</h1>
          <address>
            Tam Xuân 1<br />
            Núi Thành, Quảng Nam
          </address>
          <p>Open Daily: 8am to 5pm</p>
          <Link href="tel:+84905555555" className="hover:underline">Call us at 0905 555 555</Link>
        </div>
      </main>
    </div>
  );
}
