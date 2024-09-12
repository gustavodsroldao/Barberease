import { getServerSession } from "next-auth";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import { authOptions } from "../_lib/auth";
import { notFound } from "next/navigation";
import BookingItem from "../_components/booking-item";
import { is } from "date-fns/locale";

const Bookings = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    //TODO: Mostrar popup de login
    return notFound();
  }
  const bookings = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
  });

  const confirmedBookings = await db.booking.findMany({
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
  });

  const concludedBookings = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      date: {
        lt: new Date(),
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
  });

  return (
    <>
      <Header />
      <div className="p-5 space-y-3">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        {confirmedBookings.length > 0 && (
          <>
            <h2 className=" mb-3 uppercase text-gray-400 font-bold text-xs mt-6">
              Confirmados
            </h2>
            {confirmedBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </>
        )}
        {concludedBookings.length > 0 && (
          <>
            <h2 className=" mb-3 uppercase text-gray-400 font-bold text-xs mt-6">
              Finalizados
            </h2>
            {concludedBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Bookings;
