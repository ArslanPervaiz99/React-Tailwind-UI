import { useRef } from "react";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Generate from "./Generate";
import Notif from "./Notif";
import CompanyLogo from "./CompanyLogo";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto mb-[3.875rem] text-center md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                alt="Curve"
                className="absolute w-full left-0 top-full xl:-mt-2"
                width={624}
                height={28}
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mb-6 mx-auto lg:mb-8 text-n-2">
            Unleash the power of AI with in Brainwave, Upgrade your productivity
            with Brainwave , the open AI chat app.
          </p>
          <Button href="/pricing" className="text-[18px]">
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem] md:max-w-5xl mx-auto xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] rounded-t-[0.9rem] bg-n-10 " />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:asect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  alt="AI"
                  className="w-full scale-1.7 translate-y-[8%] md:scale-[1] md:-traslate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <Generate className="absolute bottom-5 right-4 left-4 md:left-1/2 md:right-auto md:bottom-8 md:-translate-x-1/2 md:w-[31rem] " />
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] px-1 bottom-[7.5rem] py-1 bg-n-9/40 xl:flex rounded-2xl border border-n-1/10 backdrop-blur">
                    {heroIcons.map((icon, i) => (
                      <li className="p-5" key={i}>
                        {" "}
                        <img src={icon} alt="icon" height={25} width={24} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notif
                    className="absolute hidden w-[18rem] bottom-[11rem] -right-[5.5rem] xl:flex "
                    title=" Code Gen"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] w-[234%] left-1/2 -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              alt="hero"
              width={1440}
              height={1800}
              className="w-full"
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogo className="relative hidden z-10 mt-20 lg:block " />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
