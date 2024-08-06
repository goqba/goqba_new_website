const Solutions = () => {
  return (
    <section
      id="services"
      className="bg-[#26335D] text-white py-10 lg:py-28  hidden lg:block"
    >
      <div className="container flex flex-col justify-center items-center">
        <span
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-[#09B0C0] font-semibold mb-4"
        >
          High standarts
        </span>
        <h2
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-20"
        >
          Our services
        </h2>
        <SerivcesLG />
      </div>
      {/* <SerivcesMD /> */}
    </section>
  );
};

export default Solutions;

export const SerivcesLG = () => {
  return (
    <section className="hidden lg:flex justify-center items-center">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="w-[900px] h-[500px] flex justify-center items-center relative"
      >
        {/* 1 */}
        <div className="w-[450px] h-[450px] bg-gradient-to-r from-[#0B3D4F] to-[#192F40]/10 rounded-full absolute left-[20px] flex justify-center items-center text-center">
          <div className="h-[250px] w-[250px] bg-[#00A7E4] flex items-center justify-center flex-col rounded-full relative z-40">
            <h4 className="text-3xl font-semibold z-20">AI</h4>
            <p className="text-sm">Artificial Intelligence</p>
          </div>
          <div className="h-[120px] w-[400px] bg-[#00A7E4] flex items-center justify-center absolute top-[102px] right-[-160px]">
            <p className="text-base">DATA & Information</p>
          </div>

          <div className="absolute -left-[100px] top-10">
            <div className="flex gap-3 items-center">
              <div className="flex flex-col items-end">
                <p className="text-2xl font-bold">Hodu</p>
                <p className="text-sm w-[200px] text-end">
                  Customized mild cognitive impairment rehabilitation.
                </p>
              </div>
              <div className="bg-[#00A7E4] rounded-full w-fits py-1 px-1.5">
                01
              </div>
            </div>
          </div>

          <div className="absolute -left-[189px]">
            <div className="flex gap-3 items-center">
              <div className="flex flex-col items-end">
                <p className="text-2xl font-bold">ASMIT</p>
                <p className="text-sm w-[200px] text-end">
                  Abnormal sperm analysis by AI
                </p>
              </div>
              <div className="bg-[#00A7E4] rounded-full w-fits py-1 px-1.5">
                02
              </div>
            </div>
          </div>

          <div className="absolute -left-[100px] bottom-10">
            <div className="flex gap-3 items-center">
              <div className="flex flex-col items-end">
                <p className="text-2xl font-bold">Beery-VMA</p>
                <p className="text-sm w-[200px] text-end">
                  AI Scoring for VPA in development Disabilities.
                </p>
              </div>
              <div className="bg-[#00A7E4] rounded-full w-fits py-1 px-1.5">
                03
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}

        <div className="w-[450px] h-[450px] bg-gradient-to-l from-[#0B3D4F] to-[#192F40]/0 rounded-full absolute right-[20px] z-30 flex justify-center items-center text-center">
          <div className="h-[250px] w-[250px] bg-[#01B2B2] flex items-center justify-center flex-col rounded-full z-20">
            <h4 className="text-3xl font-semibold z-20">DTx</h4>
            <p className="text-sm">Digital Therapeutics</p>
          </div>

          <div className="h-[120px] w-[400px] bg-[#01B2B2] flex items-center justify-center absolute bottom-[102px] left-[-160px]">
            <p className="text-base">Contents & Service</p>
          </div>

          <div className="absolute -right-[100px] top-10">
            <div className="flex flex-row-reverse gap-3 items-center">
              <div className="flex flex-col items-start">
                <p className="text-2xl font-bold">SeeZ</p>
                <p className="text-sm w-[200px] text-start">
                  MR based stroke upper extremity rehabilitation training.
                </p>
              </div>
              <div className="bg-[#00A7E4] rounded-full w-fits py-1 px-1.5">
                04
              </div>
            </div>
          </div>

          <div className="absolute -right-[189px] ">
            <div className="flex flex-row-reverse gap-3 items-center">
              <div className="flex flex-col items-start">
                <p className="text-2xl font-bold">BrainQ</p>
                <p className="text-sm w-[200px] text-start">
                  Dementia prediction service
                </p>
              </div>
              <div className="bg-[#00A7E4] rounded-full w-fits py-1 px-1.5">
                05
              </div>
            </div>
          </div>

          <div className="absolute -right-[100px] bottom-10">
            <div className="flex flex-row-reverse gap-3 items-center">
              <div className="flex flex-col items-start">
                <p className="text-2xl font-bold">DZQ</p>
                <p className="text-sm w-[200px] text-start">
                  Dizziness rehabilitation trainging content.
                </p>
              </div>
              <div className="bg-[#00A7E4] rounded-full w-fits py-1 px-1.5">
                06
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SerivcesMD = () => {
  return (
    <section className="flex lg:hidden justify-center items-center">
      <div className="w-[560px] h-[400px] flex justify-center items-center relative">
        {/* 1 */}
        <div className="w-[250px] h-[250px] bg-gradient-to-r from-[#0B3D4F] to-[#192F40]/10 rounded-full absolute left-[20px] flex justify-center items-center text-center">
          <div className="h-[150px] w-[150px] bg-[#00A7E4] flex items-center justify-center flex-col rounded-full relative z-40">
            <h4 className="text-base lg:text-3xl font-semibold z-20">AI</h4>
            <p className="text-xs lg:text-sm">Artificial Intelligence</p>
          </div>
          <div className="h-[65px] w-[300px] bg-[#00A7E4] flex items-center justify-center absolute top-[134px] right-[-160px]">
            <p className="text-xs lg:text-base">DATA & Information</p>
          </div>

          <div className="absolute -left-[150px] top-3">
            <div className="flex gap-3 items-center">
              <div className="flex flex-col items-end">
                <p className="text-lg lg:text-2xl font-bold">Hodu</p>
                <p className="text-xs lg:text-sm w-[200px] text-end">
                  Customized mild cognitive impairment rehabilitation.
                </p>
              </div>
              <div className="bg-[#00A7E4] text-sm rounded-full w-fits py-0.5 px-1">
                01
              </div>
            </div>
          </div>

          <div className="absolute -left-[200px]">
            <div className="flex gap-3 items-center">
              <div className="flex flex-col items-end">
                <p className="text-lg lg:text-2xl font-bold">ASMIT</p>
                <p className="text-xs lg:text-sm w-[200px] text-end">
                  Abnormal sperm analysis by AI
                </p>
              </div>
              <div className="bg-[#00A7E4] text-sm rounded-full w-fits py-0.5 px-1">
                02
              </div>
            </div>
          </div>

          <div className="absolute -left-[150px] bottom-3">
            <div className="flex gap-3 items-center">
              <div className="flex flex-col items-end">
                <p className="text-lg lg:text-2xl font-bold">Beery-VMA</p>
                <p className="text-xs lg:text-sm w-[200px] text-end">
                  AI Scoring for VPA in development Disabilities.
                </p>
              </div>
              <div className="bg-[#00A7E4] text-sm rounded-full w-fits py-0.5 px-1">
                03
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}

        <div className="w-[250px] h-[250px] bg-gradient-to-l from-[#0B3D4F] to-[#192F40]/0 rounded-full absolute right-[20px] z-30 flex justify-center items-center text-center">
          <div className="h-[150px] w-[150px] bg-[#01B2B2] flex items-center justify-center flex-col rounded-full z-20">
            <h4 className="text-base lg:text-3xl font-semibold z-20">DTx</h4>
            <p className="text-xs lg:text-sm">Digital Therapeutics</p>
          </div>

          <div className="h-[65px] w-[300px] bg-[#01B2B2] flex items-center justify-center absolute bottom-[130px] left-[-160px]">
            <p className="text-xs lg:text-base">Contents & Service</p>
          </div>

          <div className="absolute -right-[150px] top-3">
            <div className="flex flex-row-reverse gap-3 items-center">
              <div className="flex flex-col items-start">
                <p className="text-lg lg:text-2xl font-bold">SeeZ</p>
                <p className="text-xs lg:text-sm w-[200px] text-start">
                  MR based stroke upper extremity rehabilitation training.
                </p>
              </div>
              <div className="bg-[#00A7E4] text-sm rounded-full w-fits py-0.5 px-1">
                04
              </div>
            </div>
          </div>

          <div className="absolute -right-[200px] ">
            <div className="flex flex-row-reverse gap-3 items-center">
              <div className="flex flex-col items-start">
                <p className="text-lg lg:text-2xl font-bold">BrainQ</p>
                <p className="text-xs lg:text-sm w-[200px] text-start">
                  Dementia prediction service
                </p>
              </div>
              <div className="bg-[#00A7E4] text-sm rounded-full w-fits py-0.5 px-1">
                05
              </div>
            </div>
          </div>

          <div className="absolute -right-[150px] bottom-3">
            <div className="flex flex-row-reverse gap-3 items-center">
              <div className="flex flex-col items-start">
                <p className="text-lg lg:text-2xl font-bold">DZQ</p>
                <p className="text-xs lg:text-sm w-[200px] text-start">
                  Dizziness rehabilitation trainging content.
                </p>
              </div>
              <div className="bg-[#00A7E4] text-sm rounded-full w-fits py-0.5 px-1">
                06
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
