import Image from "next/image";
import icon from "../../img/icon1.png"
export default function Home() {
  return (
    <>
      <h3>Route Group</h3>
      <h2>Image </h2>
      <Image
      src={icon}
      alt="icon1"
      width={150}
      height={150}
      className=""
      />
    </>
  );
}
