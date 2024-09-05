"use client";

import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

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
                <AvatarImage src="https://media.discordapp.net/attachments/929554560987566101/1281007781675270217/bbb.png?ex=66da26f7&is=66d8d577&hm=ed2a2f6b429b326abc83e0302909e2ead326a0f8ca65e8e9d5d5896bfae8079e&=&format=webp&quality=lossless&width=466&height=350" />
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
