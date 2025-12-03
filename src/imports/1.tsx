import imgImage1 from "figma:asset/f4acc8c37b74693962185deedfd2e1f2f1d15001.png";

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="1">
      <div className="absolute h-[212px] left-0 top-[-12px] w-[198.954px]" data-name="image 1">
        <img alt="Декоративное изображение" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}