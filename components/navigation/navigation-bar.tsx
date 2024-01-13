import Image from "next/image";
import { cn } from '@/lib/utils'


interface TextBlockProps {
  describe: string;
  title: string;
  color?: string;
  titleColor?: string;
  dot?: string;
  className?: string;

}
const TextBlock = ({describe, title, color = "text-white", dot = "bg-[#EE6C8A]", titleColor = "", className }: TextBlockProps ) => {
  return (
    <div className={cn("uppercase", color)}>
      <p className="text-[16px] tracking-[1.8px] py-3 max-[1280px]:text-[12px] ">{describe}</p>
      <h2 className={cn("text-[32px] font-bold tracking-[3.64px] relative w-auto max-[1280px]:text-[28px] ", titleColor)}>
        {title}
        <div className={cn("w-[10px] h-[10px] rounded-full absolute bottom-2", dot, className)}/>  
      </h2>
    </div>
  )
}
const NavigationBar = () => {
  return ( 
    <div className="relative w-full h-full flex justify-center md:items-center overflow-auto md:overflow-hidden">
      <div>
        <Image
          src="https://utfs.io/f/111064df-1d12-4116-abd2-959e362b7513-9fxaq0.svg"
          width={140}
          height={62}
          alt="Logo"
          className="absolute left-14 top-14"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-y-10 md:gap-y-0 gap-x-8 md:items-center">
        <div className="flex flex-col gap-y-10 md:mb-[100px] pt-[150px] md:pt-0">
          <div className="bg-[#26C6D0] grid grid-cols-4 justify-center items-center bg-[url('https://utfs.io/f/a3bb4dac-0bba-44dd-a856-1c0eb3a0a47b-57am8q.svg')] h-[210px] bg-no-repeat bg-center rounded-3xl">
            <div className="col-span-1 flex justify-center">
              <Image
                src="https://utfs.io/f/896b869e-4745-41b6-b1ea-61d3e722b9b3-9fxaqo.svg"
                width="41"
                height={61.66}
                alt="About us"
              />
            </div>
            <div className="col-span-3"> 
              <TextBlock 
                describe="EMPOWERING BRANDS"
                title="about us"
                className="right-[90px] md:right-[70px]"
              />
            </div>
          </div>
          <div className="bg-[#EE6C8A]/80 grid grid-cols-4 justify-center items-end pb-10 bg-[url('https://utfs.io/f/bf23d0c6-9273-40b5-ad15-25b30f789852-50pex9.svg')] h-[210px] md:h-[320px] bg-no-repeat bg-center rounded-3xl">
            <div className="col-span-1 flex justify-center">
              <Image
                src="https://utfs.io/f/aa34c3f6-461a-4aa9-95b6-68c2e013baf2-9fxatb.svg"
                width="60"
                height="61"
                alt="Works"
              />
            </div>
            <div className="col-span-3"> 
              <TextBlock 
                describe="CASE STUDIES"
                title="WORKS"
                color="text-white"
                dot="bg-[#26C6D0]"
                className="right-[140px] md:right-[120px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 items-center">
          <div className="bg-[#E6A94E] flex flex-col justify-end pl-10 pb-10 bg-[url('https://utfs.io/f/925332d7-4d76-4710-9309-cc2a03b7bddb-ecksvx.svg')] w-[100%] md:w-[79%] h-[210px] md:h-[430px] bg-no-repeat bg-center rounded-3xl">
            <div>
              <Image
                src="https://utfs.io/f/17d62b34-5b24-4119-bbdb-b4103433c712-9fxasg.svg"
                width="91"
                height="46"
                alt="About us"
              />
            </div>
            <TextBlock 
              describe="BE COOL WITH US"
              title="CAREERS"
              color="text-white"
              className="right-[160px] md:right-[50px]"
            />
          </div>
          <div className="bg-[#26D0A8] flex flex-col justify-end pl-10 pb-5 md:pb-10 bg-[url('https://utfs.io/f/5b033e2c-011c-4cb8-a424-e00360c41eb5-ecksvw.svg')] w-[100%] md:w-[79%] h-[210px] md:h-[320px] bg-no-repeat bg-center rounded-3xl">
            <div>
              <Image
                src="https://utfs.io/f/a4a87b98-5b1e-422d-98ce-4c9d526d25c2-9fxaqv.svg"
                width="24"
                height="79"
                alt="Works"
              />
            </div>
            <TextBlock 
              describe="OUR STRATEGIES"
              title="INSIGHTS"
              className="right-[160px] md:right-[60px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-10 md:mb-[100px] pb-[150px] md:pb-0">
          <div className="bg-[#585880] flex flex-col justify-end pl-10 pb-5 md:pb-10 bg-[url('https://utfs.io/f/8d8f7bf5-482f-4a28-966b-8ccb742057fe-ecksws.svg')] h-[210px] md:h-[320px] bg-no-repeat bg-center rounded-3xl">
            <div>
              <Image
                src="https://utfs.io/f/23f5aa6b-bd94-487d-aa01-3ead24b90daf-9fxaqs.svg"
                width="36"
                height="67"
                alt="Services"
              />
            </div>
            <TextBlock 
              describe="AREAS OF EXPERTISE"
              title="SERVICES"
              className="right-[150px] md:right-[130px]"
            />
          </div>
          <div className="bg-white flex items-end pl-10 pb-10 w-[380px] h-[210px] rounded-3xl">
            <div>
              <TextBlock 
                describe="START YOUR JOURNEY WITH US"
                title="CONTACT"
                color="text-black"
                titleColor="text-[#26C6D0]"
                className="right-[50px] md:right-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default NavigationBar;