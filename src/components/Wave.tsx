interface WaveProps {
    fill: string;
    flip?: boolean;
  }
  
  export default function Wave({ fill, flip = false }: WaveProps) {
    return (
      <div className={flip ? "-mt-1 rotate-180" : "-mt-1"}>
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            fill={fill}
            d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    );
  }
  