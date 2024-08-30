import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { quickSearchOptions } from "@/constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogHeader } from "./ui/dialog";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-3 border-b border-solid py-5 justify-between">
        <h2 className="font-bold">Olá, faça seu login!</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">
              <LogInIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90%]">
            <DialogHeader>
              <DialogTitle>Faça login na plataforma</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta do Google
              </DialogDescription>
            </DialogHeader>
            <Button variant="outline" className="gap-1 font-bold">
              <Image
                src="/google.svg"
                width={18}
                height={18}
                alt={"Fazer login com o google"}
              />
              Google
            </Button>
          </DialogContent>
        </Dialog>
        {/* <Avatar>
          <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQEUcrcw9VAKjw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707831085193?e=1730332800&v=beta&t=758zDongveD_j6eZ5nhWWvyHGtjNdSWTnpGYTDq5daA" />
        </Avatar>

        <div>
          <p className="font-bold">Gustavo Roldão</p>
          <p className="text-xs">gustavodsroldao@gmail.com</p>
        </div> */}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              alt={option.title}
              src={option.imageUrl}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
