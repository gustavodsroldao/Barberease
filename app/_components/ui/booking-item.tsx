import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "lucide-react";
import { Card, CardContent } from "./card";

// TO-DO: receber agendamento como prop
const BookingItem = () => {
  return (
    <>
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
    </>
  );
};

export default BookingItem;
