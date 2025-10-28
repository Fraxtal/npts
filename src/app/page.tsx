import RoundedImage from "@/components/RoundImage";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import Experience from "@/components/Experience";
import {
  ArrowDown,
  ArrowDownLeft,
  ArrowRightIcon,
  FileDown,
} from "lucide-react";
import Link from "next/link";
import path from "path";

const BIRTH_YEAR = 2005;

export default async function Home() {
  return (
    <>
      <article className="mt-8 flex flex-col gap-16 pb-16">
        <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
          <div className="flex max-w-[320px] flex-col sm:max-w-full">
            <h1 className="title text-balance text-4xl sm:text-5xl">
              Hey, its Nicholas here.
            </h1>
            
            <p className="mt-2 whitespace-nowrap text-sm font-medium sm:text-base">
              A {new Date().getFullYear() - BIRTH_YEAR} year old from Malaysia 🇲🇾
            </p>

            <p className="mt-4 max-w-sm text-balance text-sm sm:text-base">
              A student looking to indulge themselves in Artificial Intelligence with fullstack on the side.
            </p>
            <div className="mt-6 flex items-center gap-1">
              <p className="text-balance text-sm font-semibold sm:text-base" style={{ fontSize: '14px' }}>
                I also build keyboards for fun, check them out
              </p>
              <Link
                href="https://www.instagram.com/typrtech"
                target="_blank"
                className="link font-semibold "
                title="keebs"
                style={{ fontSize: '14px' }}
              >
                here.
              </Link>
              <ArrowDownLeft className="hidden size-4 animate-bounce sm:block" />
              <ArrowDown className="block size-4 animate-bounce sm:hidden" />
            </div>
            <div className="mt-5 flex items-center gap-4">
              <Link href="/resume.pdf" target="_blank">
                <Button variant="outline">
                  <span className="font-semibold">Resume</span>
                  <FileDown className="ml-2 size-5" />
                </Button>
              </Link>
              <Socials />
            </div>
            
          </div>
          <RoundedImage className="md:mr-8" />
        </section>
        <Experience />
        

      </article>
    </>
  );
}
