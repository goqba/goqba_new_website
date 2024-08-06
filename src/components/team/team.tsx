import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Team = () => {
  return (
    <section className="container mx-auto py-20 flex flex-col">
      <span
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-[#09B0C0] font-semibold mb-5"
      >
        Team
      </span>
      <h2
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-4xl t-md:text-5xl font-semibold mb-4"
      >
        Meet The Team
      </h2>
      <p
        data-aos="fade-up"
        data-aos-duration="1600"
        className="mb-20 text-sm t-md:text-base max-w-[400px]"
      >
        "Individuals can add do make a difference, but it takes a team to really
        mess things up"
      </p>

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10"
      >
        <div className="hover:scale-105 transition-transform duration-200">
          <Card>
            <img
              className="w-full h-[220px] lg:h-[300px] rounded-t-md mb-4"
              src="assets/team/ceo2.png"
              alt=""
            />
            <CardContent>
              <CardTitle className="text-lg md:text-xl lg:text-2xl text-center">
                Jinyoung Park
              </CardTitle>
              <p className="uppercase text-center text-base lg:text-lg font-semibold mt-2 text-gray-500">
                CEO
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="hover:scale-105 transition-transform duration-200">
          <Card>
            <img
              className="w-full h-[220px] lg:h-[300px] rounded-t-md mb-4"
              src="assets/team/ceo2.png"
              alt=""
            />
            <CardContent>
              <CardTitle className="text-lg md:text-xl lg:text-2xl text-center">
                PhD. Hoon Jin
              </CardTitle>
              <p className="uppercase text-center text-base lg:text-lg font-semibold mt-2 text-gray-500">
                CTO
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="hover:scale-105 transition-transform duration-200">
          <Card>
            <img
              className="w-full h-[220px] lg:h-[300px] rounded-t-md mb-4"
              src="assets/team/ceo2.png"
              alt=""
            />
            <CardContent>
              <CardTitle className="text-lg md:text-xl lg:text-2xl text-center">
                Jinyoung Park
              </CardTitle>
              <p className="uppercase text-center text-base lg:text-lg font-semibold mt-2 text-gray-500">
                CEO
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="hover:scale-105 transition-transform duration-200">
          <Card>
            <img
              className="w-full h-[220px] lg:h-[300px] rounded-t-md mb-4"
              src="assets/team/ceo2.png"
              alt=""
            />
            <CardContent>
              <CardTitle className="text-lg md:text-xl lg:text-2xl text-center">
                Jinyoung Park
              </CardTitle>
              <p className="uppercase text-center text-base lg:text-lg font-semibold mt-2 text-gray-500">
                CEO
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
