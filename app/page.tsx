import { Button } from "./_components/ui/button";
import Header from "./_components/ui/header";
import { EyeIcon, FootprintsIcon, SearchIcon } from "lucide-react";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Badge } from "./_components/ui/badge";
import { Card, CardContent } from "./_components/ui/card";
import { Avatar } from "./_components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/ui/barbershop-item";

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
          <Button className="gap-2" variant="secondary">
            <Image src="/cabelo.svg" width={16} height={16} alt={"Cabelo"} />
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/barba.svg" width={16} height={16} alt={"Barba"} />
            Barba
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src="/acabamento.svg"
              width={16}
              height={16}
              alt={"acabamento"}
            />
            Acabamento
          </Button>

          <Button className="gap-2" variant="secondary">
            <FootprintsIcon size={16} />
            Pézinho
          </Button>

          <Button className="gap-2" variant="secondary">
            <EyeIcon size={16} />
            Sobrancelha
          </Button>
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
        <h2 className=" mb-3 uppercase text-gray-400 font-bold text-xs mt-6">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia do Bruno</p>
              </div>
            </div>

            {/* DIREITA */}
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">20</p>
              <p className="text-sm">09:00</p>
            </div>
          </CardContent>
        </Card>
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

      <footer>
        <Card>
          <CardContent className="py-6 px-5">
            <p className="text-sm text-gray-400">
              © 2024 Copyright <span className="font-bold">Barberease</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
};

export default Home;
