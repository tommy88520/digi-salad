import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

import { slides } from '@/data/data'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TSwiper = () => {

  const [slideIndex, setSlideIndex ] = useState(1)
  
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => {}}
      onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex + 1)}
      className="custom-arrow"
    >
      {
        slides.map((e)=>{
          return (
            <div key={e.id} className="flex justify-center items-center">
              <SwiperSlide  key={e.id}>
                <div className="flex justify-center h-full max-[1440px]:flex-col items-center relative gap-y-[40px] min-[1440px]:gap-y-0 gap-x-20">
                  <div className="relative flex justify-center min-[1440px]:justify-end w-[50%]">
                    <Image
                      src={"https://utfs.io/f/75063d24-dac3-47e6-9e55-fd7c4f1c221d-hhjpr2.jpg"}
                      width={540}
                      height={540}
                      alt={"123"}
                      className="rounded-3xl"
                    />
                  </div>
                  <div className="text-white w-[100%] md:w-[50%] min-[1440px]:text-start flex flex-col justify-center items-center min-[1440px]:items-start">
                    <p className="font-bold tracking-[2.22px]">HIGHLIGHTED SHOWCASE</p>
                    <div className="relative">
                      <div className="text-[24px] md:text-[32px] leading-[3.64px] mt-10 my-16">LP CLUB MOBILE APP</div>
                      <div className="bg-[#26C6D0] tracking-[3.64px] w-[250px] md:w-[350px] min-[1440px]:w-[385px] h-[4px] absolute bottom-[45px] z-[-1]">
                        <div className="w-[10px] h-[10px] rounded-full bg-[#EE6C8A] absolute right-[-15px] bottom-[0]"/>
                      </div>
                    </div>
                    
                    <p className="w-[90%] min-[1440px]:w-[67%] max-[1440px]:px-10">{e.content}</p>
                  </div>
                  <div className="w-[50px] h-[50px] text-white absolute right-[12%] top-0">
                    <div className="flex">
                      <p className="50%">0{slideIndex}</p>
                    </div>
                    <div className="flex justify-end relative">
                      <p className="50%">0{slides.length}</p>
                      <div className="w-[40px] h-[2px] bg-[#26C6D0] transform rotate-[-45deg] absolute right-1"/>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
            </div>
          )
        })
      }
    </Swiper>
  );
};

export default TSwiper