import svgPaths from "./svg-wogn515o63";

function Component1() {
  return (
    <div className="absolute bottom-[1.86%] left-0 right-[-0.1%] top-0" data-name="Слой 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMinYMid meet" viewBox="0 0 156 48">
        <g id="Слой_1">
          <path clipRule="evenodd" d={svgPaths.p1ae11880} fill="var(--fill-0, #BCBEC0)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p313ed800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p25520a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p202e8080} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p14532d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute bottom-[1.86%] contents left-0 right-[-0.1%] top-0" data-name="Слой 2">
      <Component1 />
    </div>
  );
}

export default function AltanaLogoWhite() {
  return (
    <div className="relative size-full" data-name="Altana_logo_white">
      <Component2 />
    </div>
  );
}
