"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TSwiper from "@/components/swiper/swiper";
import { cn } from '@/lib/utils'
import { services, awards } from '@/data/data'

export default function Home() {

  const [ videoPause, setVideoPause ] = useState<boolean>(true)
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    const video = videoRef.current;
    if(video ) {
      if (video.paused) {
        video?.play();
        setVideoPause(false);
      } else {
        video.pause();
        setVideoPause(true);
      }
    }
  };

    return (
        <main className="font-['Proxima Nova']">
          <section className="flex justify-center w-full relative rounded-b-[100px] overflow-hidden">
            <div className="flex justify-center w-full h-[940px] relative overflow-hidden">
              <div className="hidden md:flex absolute z-1 text-white items-center justify-center left-[-50px] top-[400px] transform rotate-[-90deg]">
                <div className="bg-white h-[2px] w-[113px]"/>
                <p className="text-[16px] pl-[30px] font-bold tracking-[2.2px]" data-aos="zoom-out">DIGITAL AGENCY</p>
              </div>
              <div className="w-2/3 pt-[200px]" data-aos="zoom-out">
                <Image
                  width="198"
                  height={88}
                  src={"https://utfs.io/f/111064df-1d12-4116-abd2-959e362b7513-9fxaq0.svg"}
                  alt="Upload"
                />
                <div className="text-[#FFFFFF] uppercase tracking-[8.2px] relative h-[210px]">
                  <div className="absolute top-7 z-1 w-[100%] max-w-[300px] md:max-w-[600px] leading-[70px] text-[24px] md:text-[38px] md:font-bold">
                    WE CREATE 
                    <br/>
                    AMAZING 
                    <br/>
                    DIGITAL EXPERIENCES
                  </div>
                  <div className="bg-[#26C6D0] w-full max-w-[300px] md:max-w-[571px] h-[4px] absolute bottom-[-100px] md:bottom-[-7px] left-[-5px] z-[-1]">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#EE6C8A] absolute right-[-30px] bottom-[0]"/>
                  </div>
                </div>
              </div>
               <video
                  autoPlay
                  muted
                  loop
                  src={"https://utfs.io/f/806af516-16a3-4ad3-a577-a57bd2920ef9-1v6fae.mp4"}
                  className="absolute z-[-2] h-[940px] w-full object-cover"
                />
            </div>
            <div className="h-full w-full bg-[#000000] bg-opacity-30 z-[-10] absolute"/>
            <div 
              className="flex flex-col justify-center items-center absolute right-[50%] translate-x-[50%] bottom-[50px]" 
            >
              <Image 
                width="65"
                height="65"
                src={"https://utfs.io/f/922f4662-6fc5-4536-a326-5f5a7496abd1-14kgnh.svg"}
                alt="icon"
              />
              <p className="uppercase text-white pt-4 pb-8 tracking-[2px] font-bold">taste us now!!</p>
            </div>
          </section>
          <section className="pt-[100px] pb-[446px] relative">
            <div className="absolute w-[1px] h-[86px] bg-[#808080] top-[-30px] left-[50%] translate-x-[50%]"/>
            <div className="flex flex-col justify-center items-center" data-aos="fade-in">
              <p 
                className="uppercase text-[28px] text-[#262626] font-bold tracking-[3.64px] translate-x-[-10]"
              >
                about DigiSalad
              </p>
              <div className="relative">
                <Image
                  width="369"
                  height="13"
                  src="https://utfs.io/f/c0bd9773-f4b3-4c11-80a7-1dc6bb97f66f-9fxau4.svg"
                  alt="icon"
                />
                <div className="w-[10px] h-[10px] rounded-full bg-[#EE6C8A] absolute right-[20px] bottom-[20px]"/>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-full flex justify-center items-center relative cursor max-w-[1007px]">
                <video
                  ref={videoRef}
                  poster={"https://utfs.io/f/3cc1bb83-ec21-4b41-b6fd-23ec2604e6dc-14x2yi.png"}
                  muted
                  loop
                  controls
                  src={"https://utfs.io/f/27a8aec8-71ab-436c-b806-b7f69cd70006-cq11r5.mp4"}
                  className="h-[544px] w-[90%] md:w-[100%] object-cover mt-[70px] cursor-pointer"
                  onPlay={() => setVideoPause(false)}
                  onPause={() => setVideoPause(true)}
                />
                <Image
                  src="https://utfs.io/f/46382f95-e401-4a06-aaef-12bfe3a95095-qqupd4.svg"
                  width={112}
                  height={113}
                  alt="player"
                  className={cn("absolute cursor-pointer", !videoPause &&  'hidden' )}
                  onClick={playVideo}
                />
              </div>
              <p className="max-w-[1007px] w-[100%] md:w-[74%] px-10 md:py-10 md:px-0 my-[40px] text-[16px] text-[#262626] text-center font-normal tracking-[1px] leading-[28px]" data-aos="fade-in">
                Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
              </p>
              <div className="w-[223px] h-[86px] bg-[#26C6D0] flex items-center justify-center gap-5 rounded-l">
                <p className="uppercase text-white text-[16px] tracking-[2.22px] font-bold">view more</p>
                <div className="w-[52px] h-[1.23px] bg-white"/>
              </div>
            </div>
            <div className="pt-[50px] md:pt-[100px] absolute w-full z-10" data-aos="fade-in">
              <div className="w-[100%] min-[1280px]:w-[90%] ml-auto flex flex-col md:flex-row bg-white rounded-2xl py-[50px] px-16 md:pl-[50px] md:pr-[100px] md:gap-[20px]">
                <div className="w-[100%] md:w-[38%]">
                  <div className="flex flex-col justify-s">
                    <p className="uppercase text-[28px] text-[#262626] pl-[20px] font-bold tracking-[3.64px]">awards</p>
                    <div className="relative">
                      <Image
                        width="191"
                        height="13"
                        src="https://utfs.io/f/5d32b3bf-73ce-41e9-a404-0e993063b926-9fxau6.png"
                        alt="icon"
                      />
                      <div className="w-[10px] h-[10px] rounded-full bg-[#EE6C8A] absolute left-[170px] bottom-[20px]"/>
                    </div>
                  </div>
                  <div className="pt-[20px] text-[#262626] text-[16px] leading-[28px] tracking-[1px]">
                    Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. 
                  </div>
                </div>
                <div className="grid grid-cols-2 mt-[30px] items-center">
                  {
                    awards.map((e)=>{
                      return (
                        <Image
                          key={e.id}
                          width="283"
                          height="108"
                          src={e.url}
                          alt="icon"
                        />
                      )
                    })
                  }
                </div>
                
              </div>
            </div>
            <div className="w-full h-[300px] md:h-[200px] bg-[#26C6D0] absolute bottom-0 rounded-t-[50px]"/>
          </section>
          <section className="flex flex-col justify-center items-center bg-[#26C6D0] pt-[250px] min-[760px]:pt-[400px] min-[800px]:pt-[300px] min-[1280px]:pt-[100px] pb-[150px]">
            <div className="flex flex-col justify-center items-center" data-aos="fade-up">
              <p className="uppercase text-[28px] text-[white] font-bold tracking-[3.64px]">our ingradients</p>
              <div className="relative">
                <Image
                  width="369"
                  height="13"
                  src="https://utfs.io/f/d099b073-880f-4b77-b51a-3f824a3d23b3-9fxau9.svg"
                  alt="icon"
                />
                <div className="w-[10px] h-[10px] rounded-full bg-[#EE6C8A] absolute right-[10px] bottom-[20px]"/>
              </div>
            </div>
            <p className="text-white w-[82%] md:w-[70%] text-center mt-14 text-[16px] leading-[28px] tracking-[1px]" data-aos="fade-in">Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.</p>
            <div className="w-[294px] h-[86px] bg-[#585880] flex items-center justify-center gap-10 rounded-l mt-14 mb-20">
              <p className="uppercase text-white font-bold tracking-[2.22px] text-[16px]">our services</p>
              <div className="w-[52px] h-[1.23px] bg-white"/>
            </div>
            <div className="
              w-[80%]
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3
              gap-y-20
              ">
              {services.map((e)=>{
                return (
                  <div 
                    key={e.id} 
                    className="flex flex-col justify-center items-center text-white" 
                    data-aos="fade-in"
                    data-aos-delay={e.id * 100}
                  >
                    <div className="w-[108px] h-[108px] bg-white rounded-full flex justify-center items-center">
                      <Image
                        width={e.size.width}
                        height={e.size.height}
                        src={e.img}
                        alt="fruit"
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-[20px] py-5 uppercase font-bold tracking-[2px] max-w-[260px] text-center min-h-[100px] flex items-center">{e.title}</h2>
                    <p className="pb-5 text-center text-[16px] leading-[28px] w-[92%]">
                      {e.content}
                    </p>
                    <button className="w-[165px] h-[58px] border-2 border-white rounded-[100px] p-5 uppercase text-white flex justify-center items-center font-bold tracking-[2.2px]">
                      view More
                    </button>
                  </div>
                )
              })}
            </div>
            <div className="mt-[100px] relative">
              <p className="uppercase text-white text-[18px] tracking-[2px] px-10 md:px-0">VIEW MORE DIGISALAD’S INGRADIENTS</p>
              <div className="w-[83%] md:w-[416px] h-[10px] bg-[#FFBC58] absolute bottom-[-2px] opacity-70 px-10 md:px-0 right-[9%] md:right-0"/>
            </div>
          </section>
          <section className="w-full">
            <div className="flex justify-center items-center relative">
              <div className="relative overflow-hidden mr-auto rounded-3xl md:rounded-tl-none w-full md:w-[90%] h-[750px] md:h-[590px]">
                <Image
                  src="https://utfs.io/f/a319db92-1c56-45e4-89d9-c1c013f87bdb-kvp88a.png"
                  fill
                  className="object-cover"
                  alt="img"
                />
                <div className="absolute top-[50%] translate-y-[-50%] w-full flex flex-col md:flex-row justify-center items-center gap-x-[40px] md:gap-x-[50px]">
                  <div className="text-white flex flex-col justify-center items-center">
                    <div>
                      <Image
                        src="https://utfs.io/f/06d81247-9222-4926-9bba-6e08bcfbf2d1-o3rkj9.svg"
                        width="204"
                        height="204"
                        className="object-cover"
                        alt="tony"
                      />
                    </div>
                    <h2 className="uppercase text-[20px] mt-[20px] mb-[10px] font-bold tracking-[2px] leading-[24.36px]">Tony NG</h2>
                    <p className="uppercase text-[16px] italic tracking-[2px] font-normal text-center">Founder & Creative Director</p>
                  </div>
                  <div className="w-[90%] md:w-[50%] tracking-[2px] leading-[24px] md:leading-[48px] flex flex-col justify-center items-center md:translate-y-[-40px]">
                    <Image
                      src="https://utfs.io/f/65cca091-23b7-4b1b-8eba-f7c6707ee726-5nijw9.svg"
                      width="90"
                      height="90"
                      alt="left"
                      className="hidden md:flex"
                    />
                    <p className="text-white tracking-[2px] leading-[20px] md:leading-[48px] mt-14 md:mt-0">
                      A great digital work isn’t about designing beautiful pages purely. It is about context - how do we deliver the <span className="text-[#FFBC58] font-bold">right experience to the right person at the right time</span>. The most important thing is that your work can engage customers at anytime, anywhere and let users experience an entire amazing digital journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[300px] bg-[#26C6D0] absolute z-[-1] top-0 rounded-b-[50px]"/>
            </div>
          </section>
          <section className="flex flex-col justify-center items-center mt-[100px]">
            <div className="flex flex-col justify-center items-center" data-aos="fade-in">
              <p className="uppercase text-[28px] text-[#262626] font-bold tracking-[3.64px] px-3 md:px-0 text-center md:text-start">OUR BRAND EXPERIENCE</p>
              <div className="relative">
                <Image
                  width="495"
                  height="13"
                  src="https://utfs.io/f/73289db1-8932-4603-93eb-6fed35a6e77a-sweqc5.svg"
                  alt="icon"
                />
                <div className="w-[10px] h-[10px] rounded-full bg-[#EE6C8A] absolute right-[20px] bottom-[20px]"/>
              </div>
            </div>
            <p className="w-[90%] md:w-[70%] text-center my-14 text-[16px] leading-[24px] text-[#262626]"  data-aos="fade-in">
              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
            </p>
            <div className="flex justify-center items-center px-10 md:px-0" data-aos="fade-in">
              <Image
                src="https://utfs.io/f/61454d39-cd48-401b-b88a-76fde3954028-clw0zw.jpg"
                width="1040"
                height="720"
                alt="brand"
              />
            </div>
          </section>
           <section className="relative w-full">
              <div className="w-full h-[1000px] min-[1280px]:h-[1100px] min-[1440px]:h-[736px]">
                <Image
                  src="https://utfs.io/f/c4858588-e169-45f2-8f7f-400716502908-b3umd6.jpg"
                  alt="icon"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="absolute w-full h-full top-0 flex justify-center items-center">
                <TSwiper/>
              </div>
            </section>
        </main>
    );
}