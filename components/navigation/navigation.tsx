"use client"

import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavigationBar from "./navigation-bar";
import { cn } from "@/lib/utils"
import { useScroll } from '@/hooks/use-scroll'
import Image from "next/image";


const Navigation = () => {

  const { scrollDir, y } = useScroll()

  return (
    <div className={cn("w-full flex just items-center justify-between bg-white/[.001] transition", scrollDir == "down" && "bg-white")}>
      <div className={cn("pl-[20px] md:pl-[100px] transition", scrollDir == "up" && "opacity-0" , y == 0 && "opacity-0")}>
        <Image
          src="https://utfs.io/f/5e502110-f921-41f6-928d-c18d06cd9afe-sweqba.svg"
          width="120"
          height="53"
          alt="Logo"
        />
      </div>
      <div className={"w-[300px] flex items-center justify-end sm:justify-start gap-10 "}>
        <div className="uppercase hidden sm:block text-white w-[200px] h-[41px] bg-gradient-to-r from-[#4EE5EA] to-[#26D0A8] rounded-3xl text-center leading-[41px] text-[14px] cursor-pointer">start your project</div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className={cn("text-white", scrollDir == "down" && "text-[#585880]")}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 flex gap-0 w-screen">
            <div className="w-screen">
              <NavigationBar />
            </div>
          </SheetContent>
        </Sheet>
      </div> 
    </div>
    
  );
}
 
export default Navigation;