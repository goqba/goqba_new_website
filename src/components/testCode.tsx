import React from "react";

const TestCode = () => {
  return (
    <div className="text-white">
      <div className="flex justify-center items-center h-screen">
        <div className="relative">
          {/* <!-- Venn Diagram Circles --> */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-96 h-96 bg-blue-800 rounded-full opacity-75"></div>
            <div className="w-96 h-96 bg-teal-700 rounded-full opacity-75 ml-20"></div>
          </div>
          {/* <!-- Services and Descriptions --> */}
          <div className="absolute top-10 left-10">
            <div className="mb-4">
              <span className="text-teal-300">01</span> BrainQ - Dementia
              prediction service
            </div>
            <div className="mb-4">
              <span className="text-teal-300">02</span> Beery-VMI - AI Scoring
              for Visual Perception Assessment in Developmental Disabilities
            </div>
            <div className="mb-4">
              <span className="text-teal-300">03</span> ASMIT - Abnormal sperm
              analysis by AI
            </div>
          </div>
          <div className="absolute top-10 right-10">
            <div className="mb-4 text-right">
              SeeZ - Mixed reality (MR) based stroke upper extremity
              rehabilitation training content{" "}
              <span className="text-teal-300">01</span>
            </div>
            <div className="mb-4 text-right">
              Hodu - Customized mild cognitive impairment rehabilitation content{" "}
              <span className="text-teal-300">02</span>
            </div>
            <div className="mb-4 text-right">
              DZQ - Dizziness rehabilitation training content{" "}
              <span className="text-teal-300">03</span>
            </div>
          </div>
          {/* <!-- Central Text --> */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-center">
              <div className="text-xl font-bold">AI</div>
              <div>Artificial Intelligence</div>
              <div className="text-sm mt-2">DATA & Information</div>
              <div className="text-sm">Contents & Service</div>
            </div>
            <div className="text-center ml-20">
              <div className="text-xl font-bold">DTx</div>
              <div>Digital Therapeutics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCode;
