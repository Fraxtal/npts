import RoundedImage from "@/components/RoundImage";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRightIcon,
  FileDown,
} from "lucide-react";
import Link from "next/link";
import path from "path";


export default function Home() {
  return (
    <>
      <article className="mt-8 flex flex-col gap-16 pb-16">
        <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
          <div className="flex max-w-[320px] flex-col sm:max-w-full md:flex-row">
              <RoundedImage className="md:mr-8" />
            <h1 className="title text-balance text-4xl sm:text-5xl">
              Hi, its Nicholas here.
            </h1>
          </div>
        </section>

      </article>
    </>
  );
}
