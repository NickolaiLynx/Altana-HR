import heroImage from "figma:asset/ddd8adc0609b934c1b149f1f91a2f7fe34e3f982.png";

export default function MainPhoto() {
  return (
    <div className="relative w-full h-full pl-8" data-name="main-photo">
      <div className="relative aspect-[3/4] w-full max-h-[60vh] overflow-hidden rounded-[14px] border-[6px] border-white">
        <img 
          alt="Директор Оксана Мирсанова" 
          className="w-full h-full object-cover" 
          src={heroImage} 
        />
      </div>
    </div>
  );
}
