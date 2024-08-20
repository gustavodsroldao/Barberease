import { Button } from "./_components/ui/button";
import Header from "./_components/ui/header";
import { SearchIcon } from "lucide-react";
import { Input } from "./_components/ui/input";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Gustavo!</h2>
        <p>Segunda-Feira, 19 de agosto.</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative w-full h-[150px] mt-6">
          <Image
            src="/homepage01.png"
            fill
            className="rounded-xl object-cover"
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
