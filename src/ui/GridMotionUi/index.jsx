import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const GridMotionUi = ({ items = [], gradientColor = "black" }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const mouseXRef = useRef(window.innerWidth / 2);

  const [gridConfig, setGridConfig] = useState({
    rows: 3,
    cols: 7,
  });

  // Dynamically calculate rows and cols based on screen width
  const updateGridConfig = () => {
    const width = window.innerWidth;
    if (width < 640) {
      // Mobile
      setGridConfig({ rows: 3, cols: 2 });
    } else if (width < 1024) {
      // Tablet
      setGridConfig({ rows: 3, cols: 4 });
    } else {
      // Desktop
      setGridConfig({ rows: 3, cols: 7 });
    }
  };

  useEffect(() => {
    updateGridConfig();
    window.addEventListener("resize", updateGridConfig);
    return () => window.removeEventListener("resize", updateGridConfig);
  }, []);

  const combinedItems = Array.from(
    { length: gridConfig.rows * gridConfig.cols },
    (_, i) => items[i % items.length]
  );

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
              maxMoveAmount / 2) *
            direction;

          gsap.to(row, {
            x: moveAmount,
            duration:
              baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop();
    };
  }, [gridConfig]);

  return (
    <div ref={gridRef} className="h-full w-full overflow-hidden">
      <section
        className="w-full h-screen overflow-hidden relative flex items-center justify-center"
        style={{ background: `transparent` }}
      >
        <div className="absolute inset-0 pointer-events-none z-[4] bg-[length:250px]"></div>
        <div
          className="gap-4 flex-none relative w-[140vw] h-[80vh] grid rotate-[-15deg] origin-center z-[2]"
          style={{
            gridTemplateRows: `repeat(${gridConfig.rows}, 1fr)`,
            height: window.innerWidth < 640 ? "100vh" : "80vh",
          }}
        >
          {[...Array(gridConfig.rows)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-4"
              style={{ gridTemplateColumns: `repeat(${gridConfig.cols}, 1fr)` }}
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(gridConfig.cols)].map((_, itemIndex) => {
                const content =
                  combinedItems[rowIndex * gridConfig.cols + itemIndex];
                const cardHeight = window.innerWidth < 640 ? "35vh" : "auto"; 
                return (
                  <div
                    key={itemIndex}
                    className="relative"
                    style={{ height: cardHeight }}
                  >
                    <div className="card relative w-full h-full overflow-hidden rounded-[10px] flex items-center justify-center text-white grid__motion__card">
                      <div
                        className="w-full h-full bg-cover bg-center absolute top-0 left-0"
                        style={{ backgroundImage: `url(${content})` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="relative w-full h-full top-0 left-0 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default GridMotionUi;
