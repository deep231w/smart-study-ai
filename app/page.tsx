'use client'
import { useRouter } from "next/navigation";
import { BookButton } from "@/components/BookButton";
import { CreateBookButton } from "@/components/CreateBookButton";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-wrap justify-center gap-6">
          <button onClick={()=> router.push('/pages/oligopoly')}>
            <BookButton />
          </button>
          <button>
            <CreateBookButton />
          </button>
        </div>
      </div>
    </div>
  );
}
