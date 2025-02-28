import { useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function Statas() {
  const happyClients = 99;
  const alreadyCustomers = 17;
  const yearsExperiences = 10;

  const [happyClient, setHappyClient] = useState(0);
  const [alreadyCustomer, setAlreadyCustomer] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  //////////////////////////////////////////////////////////////////////

  const happyClientsCount = useSpring(0, {
    bounce: 0,
    duration: 1000,
  });

  const alreadyCustomerCount = useSpring(0, {
    bounce: 0,
    duration: 1000,
  });

  const yearsExperiencesCount = useSpring(0, {
    bounce: 0,
    duration: 1000,
  });

  //////////////////////////////////////////////////////////////////

  happyClientsCount.on("change", (value) => {
    setHappyClient(Math.round(value));
  });

  alreadyCustomerCount.on("change", (value) => {
    setAlreadyCustomer(Math.round(value));
  });

  yearsExperiencesCount.on("change", (value) => {
    setYearsOfExperience(Math.round(value));
  });

  /////////////////////////////////////////

  useEffect(() => {
    happyClientsCount.set(happyClients);
  }, []);
  useEffect(() => {
    alreadyCustomerCount.set(alreadyCustomers);
  }, []);
  useEffect(() => {
    yearsExperiencesCount.set(yearsExperiences);
  }, []);

  return (
    <>


        <div className=" flex row-auto justify-between place-items-center bg-gradient-to-r from-blue-800 via-blue-600  to-purple-600    h-20 rounded-sm m-5">
          {/* Happy clients */}
          <div className="text-yellow-300 font-bold ml-3 relative ">
            <div className="flex absolute top-[-5px]">
              <span className="text-[10px] absolute left-1  px-4 opacity-25 font-thin ">
                %{" "}
              </span>
              <h2 className="text-[20px] absolute" >{happyClient}</h2>
            </div>

            <div className="ml-5 place-self-start">
              <p className=" text-[9px] px-3">Happy Clients</p>
              <p className=" text-[4px] font-thin     text-white mt-1 opacity-50   ">
                Our Mission is To Provide Quality
              </p>
            </div>
          </div>

          {/* Already Customers */}

          <div className="text-white font-bold relative ml-3 ">
            <div className="flex absolute top-[-5px] ">
              <span className="text-[10px] absolute left-5 ml-0.5 opacity-75 font-thin ">
                +{" "}
              </span>
              <h2 className="text-[20px]" >{alreadyCustomer}</h2>
            </div>

            <div className="ml-7 ">
              <p className=" text-[9px] ">Already Customers</p>
              <p className=" text-[4px] font-thin     text-white mt-1 opacity-50 text-left   ">
              In Different Industry
              </p>
            </div>
          </div>

          {/* Years Of Experience */}
          <div className="text-yellow-300 font-bold ml-3 mr-5  relative">
            <div className="flex absolute  top-[-5px] ">
              <span className="text-[10px] absolute left-5 ml-0.5  opacity-75 font-thin ">
                Y
              </span>
              <h2 className="text-[20px]" >{yearsOfExperience}</h2>
            </div>

            <div className="ml-6">
              <p className=" text-[9px] ">Years Experience</p>
              <p className=" text-[4px] font-thin   px-4  text-white mt-1 opacity-50  ">
              Has An Experience In Digital Solutions
              </p>
            </div>
          </div>
        </div>



    </>
  );
}

export default Statas;
