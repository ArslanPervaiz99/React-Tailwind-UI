import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/Animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { useRef } from "react";
import gsap from "gsap";

const Features = () => {
  const vidRef = useRef();

  useGSAP(() => {
    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });

    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% botttom",
      },
      onComplete: () => {
        vidRef.current.play();
      },
    });
  }, []);
  return (
    <section className="common-padding h-full bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            {" "}
            Explore the full Story.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">Iphone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in Titanium
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative flex items-center h-[50vh] w-full">
              <video
                id="exploreVideo"
                className="object-cover h-full w-full object-center "
                preload="none"
                muted
                playsInline
                autoPlay
                ref={vidRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col relative w-full">
              <div className="feature-video-container">
                <div className="flex-1 overflow-hidden h-[50vh]">
                  <img
                    className="feature-video g_grow"
                    src={explore1Img}
                    alt="titanium"
                  />
                </div>
                <div className="flex-1 overflow-hidden h-[50vh]">
                  <img
                    className="feature-video g_grow"
                    src={explore2Img}
                    alt="titanium 2"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="g_text feature-text">
                    Iphone 16 Pro is{" "}
                    <span className="text-white ">
                      the first Iphone to Feature an aerospace-grade Titanium
                      design
                    </span>
                    , using the same alloy that spacecrafts use for mission to
                    Mars.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="g_text feature-text">
                    Titanium is one of the best strength -to-weight ratios of
                    any metals, making these our
                    <span className="text-white ">
                      {" "}
                      lightest Pro Models ever.
                    </span>
                    , You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
