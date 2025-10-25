import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-8 pb-32 sm:flex-row-reverse sm:justify-between">
        <section className="mt-8 text-center sm:mt-0 sm:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link className="link" href="/">
              Home
            </Link>{" "}
            |{" "}
            <Link className="link font-bold" href="/privacy">
              Privacy Policy
            </Link>
          </p>
        </section>
      </div>
    </footer>
  );
}