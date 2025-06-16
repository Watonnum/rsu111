import Collections from "./components/Card/collection.jsx";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-white text-xl md:text-5xl my-4">
          RSU111 : Social Dharmacracy
        </p>
        <p className="font-bold text-white text-xs md:text-2xl my-2">
          {`Create by (6708767) Watanyu Onnum`}
        </p>
        <Collections />
      </div>
    </div>
  );
}
