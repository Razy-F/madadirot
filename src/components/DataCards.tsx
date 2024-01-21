import { insertBrokers } from "@/lib/database/data";
import Image from "next/image";

const DataCards = async () => {    
  return (
    <div className="bg-white shadow p-3 rounded-md">
      <div className="flex justify-between mb-4">
        <h3 className="text-[24px] text-bold">Tel Aviv</h3>
        <Image
          src="/assets/icons/pricelabel.svg"
          alt="price label"
          width={40}
          height={40}
        />
      </div>
      <div>
        <span className="text-lg block tracking-tighter">
          City's Monthly Broker Rise
        </span>
        <div className="flex space-s-2">
          <span>Brokers Added</span>
          <span className="font-extrabold	text-site-color">27 |</span>
        </div>
      </div>
    </div>
  );
};

export default DataCards;
