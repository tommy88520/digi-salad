import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './swiper.module.css'
import { useState } from 'react';

const TSwiper = () => {

  const slideItem = {
    img: 'https://utfs.io/f/75063d24-dac3-47e6-9e55-fd7c4f1c221d-hhjpr2.jpg',
    slogan: 'HIGHLIGHTED SHOWCASE',
    title: 'LP CLUB MOBILE APP',
    content: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus."
  }
  const [slideIndex, setSlideIndex ] = useState(1)
  const slides = [
    {
      ...slideItem,
      id: 1
    },
    {
      ...slideItem,
      id: 2
    },
    {
      ...slideItem,
      id: 3
    },
    {
      ...slideItem,
      id: 4
    },
  ]
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Navigation]}
      // spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => {}}
      onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex + 1)}
      className="custom-arrow"
    >
      {/* <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
      </Swiper> */}
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