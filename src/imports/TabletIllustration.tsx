import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import tabletImg from "figma:asset/6a03586588d23f95d73f361bf3b54924119b7e25.png";

export default function TabletIllustration() {
  return (
    <div className="relative size-full">
      <ImageWithFallback 
        src={tabletImg}
        alt="Иллюстрация планшета с документами" 
        className="block size-full object-contain"
      />
    </div>
  );
}