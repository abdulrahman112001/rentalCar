import Image from "next/image";
import { TypeBox } from "../";
import {
  Electric,
  HATCH,
  JEEP,
  Luxary,
  Sedan,
  Sports,
  VAN,
} from "../../atom/assets";

export default function BigTypeBox() {
  return (
    <div className="big-box flex flex-wrap justify-between items-center gap-y-10 my-14">
      {/* <div className="type-box w-full sm:w-[47%]  lg:w-[22%] relative flex justify-center items-center">
        <Image src={Sedan} alt="" className="min-w-[200px] min-h-[90px]" />
        <span className=" font-medium text-xl leading-6 absolute bottom-[15%] left-1/2 -translate-x-1/2 text-white">
          SUV
        </span>
      </div> */}
      <TypeBox image={HATCH} type="HATCH Back" />
      <TypeBox image={Luxary} type="Luxary" />
      <TypeBox image={Electric} type="Electric" />
      <TypeBox image={VAN} type="VAN" />
      <TypeBox image={JEEP} type="JEEP" />
      <TypeBox image={Sedan} type="Sedan" />
      <TypeBox image={Sports} type="Sports" />
      <TypeBox image={Electric} type="Electric" />
    </div>
  );
}
