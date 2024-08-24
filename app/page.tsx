import { Button } from "./_components/ui/button";
import Header from "./_components/ui/header";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/ui/barbershop-item";
import { SearchIcon } from "lucide-react";
import { quickSearchOptions } from "@/constants/search";
import BookingItem from "./_components/ui/booking-item";

const Home = async () => {
  // chamar banco de dados
  const barberease = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Gustavo!</h2>
        <p>Segunda-Feira, 19 de agosto.</p>
        {/* BUSCA */}
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/* BUSCA RAPIDA */}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>
        {/* IMAGEM */}
        <div className="relative w-full h-[150px] mt-6">
          <Image
            src="/homepage0.svg"
            fill
            className="rounded-xl object-cover"
            alt={""}
          />
        </div>
        {/* AGENDAMENTO */}
        <BookingItem />
        <h2 className=" mb-3 uppercase text-gray-400 font-bold text-xs mt-6">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::webkit-scrollbar]">
          {barberease.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className=" mb-3 uppercase text-gray-400 font-bold text-xs mt-6">
          Populares
        </h2>
        1
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
