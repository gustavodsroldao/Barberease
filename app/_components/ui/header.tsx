import { Card, CardContent } from "./card";
import Image from "next/image";
import { Button } from "./button";
import {
  CalendarIcon,
  Ghost,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
} from "lucide-react";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Sheet } from "./sheet";
import { quickSearchOptions } from "@/constants/search";
import { Avatar, AvatarImage } from "./avatar";
import Link from "next/link";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="" src="/logo.png" height={18} width={120} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="py-5 border-b border-solid flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQEUcrcw9VAKjw/profile-displayphoto-shrink_200_200/0/1707831085193?e=2147483647&v=beta&t=ihx1K74nt0hHs0cQAn3qdC8AdmQTm-UyJR7RxkUvBCY" />
              </Avatar>
              <div>
                <p className="font-bold">Gustavo Roldão</p>
                <p className="text-sm">gustavodsroldao@gmail.com</p>
              </div>
            </div>

            <div className="py-5 flex flex-col gap-2 border-b border-solid">
              <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                  <Link href="">
                    <HomeIcon size={18} />
                    Inicio
                  </Link>
                </Button>
              </SheetClose>
              <Button className="justify-start gap-2" variant="ghost">
                <CalendarIcon size={18} />
                Agendamentos
              </Button>
            </div>

            <div className="py-5 flex flex-col gap-2 border-b border-solid">
              {quickSearchOptions.map((option) => (
                <Button
                  key={option.title}
                  className="justify-start gap-2"
                  variant="ghost"
                >
                  <Image
                    src={option.imageUrl}
                    height={18}
                    width={18}
                    alt={option.title}
                  />
                  {option.title}
                </Button>
              ))}
            </div>

            <div className="py-5 flex flex-col gap-2">
              <Button variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18} />
                Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};
export default Header;
