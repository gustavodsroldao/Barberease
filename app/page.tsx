import { Button } from "./_components/ui/button";
import Header from "./_components/header";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/ui/barbershop-item";
import { quickSearchOptions } from "@/constants/search";
import BookingItem from "./_components/booking-item";
import Search from "./_components/search";
import Link from "next/dist/client/link";
import { authOptions } from "./_lib/auth";
import { getServerSession } from "next-auth";

const Home = async () => {
  // chamar banco de dados
  const session = await getServerSession(authOptions);
  const barberease = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  const confirmedBookings = session?.user
    ? await db.booking.findMany({
        where: {
          userId: (session.user as any).id,
          date: {
            gte: new Date(),
          },
        },
        include: {
          service: {
            include: {
              barbershop: true,
            },
          },
        },
        orderBy: {
          date: "asc",
        },
      })
    : [];

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Gustavo!</h2>
        <p>Segunda-Feira, 19 de agosto.</p>

        {/* BUSCA */}
        <div className="mt-6">
          <Search />
        </div>

        {/* BUSCA RAPIDA */}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Link href={`/barbershops?service=${option.title}`}>
              <Button className="gap-2" variant="secondary" key={option.title}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Button>
            </Link>
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

        <>
          <h2 className=" mb-3 mt-6 uppercase text-gray-400 font-bold text-xs ">
            Agendamentos
          </h2>

          {/* AGENDAMENTO */}
          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {confirmedBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </div>
        </>

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
