import Video from 'next-video';

interface TVideoProps {
  src: string;
}
const TVideo = ({ src }: any) => {

  return ( 
    <div className="">
        <Video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          controls={true}
          className=""
        ></Video>
      </div>
   );
}
 
export default TVideo;