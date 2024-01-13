import Video from 'next-video';

interface TVideoProps {
  src: string;
}
const TVideo = ({ src }: TVideoProps) => {

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