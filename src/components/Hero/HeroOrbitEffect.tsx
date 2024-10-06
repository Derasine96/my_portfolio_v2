import { HeroOrbit } from "@/components/Hero/HeroOrbit";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroOrbitEffect = () => {
  return (
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      {/* Hero Grain Image */}
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {/* Background Hero Rings */}
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      {/* Hero Stars */}
      <HeroOrbit
        size={800}
        rotation={-71}
        shouldOrbit
        orbitDuration="48s"
        shouldRotate
        rotationSpeed="6s"
      >
        <StarIcon className="size-28 text-primary-brightCoral" />
      </HeroOrbit>
      <HeroOrbit
        size={550}
        rotation={20}
        shouldOrbit
        orbitDuration="38s"
        shouldRotate
        rotationSpeed="4s"
      >
        <StarIcon className="size-12 text-primary-brightCoral" />
      </HeroOrbit>
      <HeroOrbit
        size={590}
        rotation={98}
        shouldOrbit
        orbitDuration="40s"
        shouldRotate
        rotationSpeed="6s"
      >
        <StarIcon className="size-8 text-primary-brightCoral" />
      </HeroOrbit>
      {/* Hero Sparkles */}
      <HeroOrbit
        size={430}
        rotation={-14}
        shouldOrbit
        orbitDuration="30s"
        shouldRotate
        rotationSpeed="3s"
      >
        <SparkleIcon className="size-8 text-primary-brightCoral/20" />
      </HeroOrbit>
      <HeroOrbit
        size={440}
        rotation={79}
        shouldOrbit
        orbitDuration="32s"
        shouldRotate
        rotationSpeed="3s"
      >
        <SparkleIcon className="size-5 text-primary-brightCoral/20" />
      </HeroOrbit>
      <HeroOrbit
        size={530}
        rotation={178}
        shouldOrbit
        orbitDuration="36s"
        shouldRotate
        rotationSpeed="3s"
      >
        <SparkleIcon className="size-10 text-primary-brightCoral/20" />
      </HeroOrbit>
      <HeroOrbit
        size={710}
        rotation={144}
        shouldOrbit
        orbitDuration="44s"
        shouldRotate
        rotationSpeed="3s"
      >
        <SparkleIcon className="size-14 text-primary-brightCoral/20" />
      </HeroOrbit>
      {/* Hero Circles */}
      <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
        <div className="size-3 bg-primary-brightCoral/15 rounded-full" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
        <div className="size-2 bg-primary-brightCoral/15 rounded-full" />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
        <div className="size-3 bg-primary-brightCoral/15 rounded-full" />
      </HeroOrbit>
    </div>
  );
};
