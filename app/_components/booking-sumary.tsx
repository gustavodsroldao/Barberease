import { Barbershop, BarbershopService } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";

interface BookingSumaryProps {
  service: Pick<BarbershopService, "name" | "price">;
  barbershop: Pick<Barbershop, "name">;
  selectedDate: Date;
}

const BookingSumary = ({
  service,
  barbershop,
  selectedDate,
}: BookingSumaryProps) => {
  return (
    <Card>
      <CardContent className="p-3 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">{service.name}</h2>
          <p className="text-sm font-bold">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(Number(service.price))}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-sm text-gray-400">Data</h2>
          <p className="text-sm">
            {format(selectedDate, "d 'de' MMM", {
              locale: ptBR,
            })}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-sm text-gray-400">Horário</h2>
          <p className="text-sm">{format(selectedDate, "HH:mm")}</p>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-sm text-gray-400">Barbearia</h2>
          <p className="text-sm">{barbershop.name}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingSumary;
