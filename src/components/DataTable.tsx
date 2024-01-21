import React from "react";
import { ContentWrapper } from ".";
import { getBrokers } from "@/lib/database/data";
import { IBroker } from "@/lib/database/models";
import { areasCounter } from "@/lib/database/helperFunctions";

const DataTable = async () => {
    const brokers:(IBroker[]|undefined) = await getBrokers();
    const areasCount:(string|number)[] = areasCounter(brokers) 
        
  return (
    <ContentWrapper>
      <div className="relative w-fit shadow-md sm:rounded-lg mb-[68px]">
        <table className="w-fit text-sm text-left rtl:text-right text-[#374957]">
          <thead className="text-lg text-[#374957] uppercase bg-blue-600 border-b border-[#374957]">
            <tr>
              <th scope="col" className="px-6 py-3 bg-white min-w-48">
                Area
              </th>
              <th scope="col" className="px-6 py-3 bg-[#F2F2F2]">
                Total brokers
              </th>
            </tr>
          </thead>
          <tbody>
            {
                areasCount.map((areas, i) => (
                    <tr className="bg-[#F2F2F2] border-b border-[#37495714]" key={i}>
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium bg-white whitespace-nowrap"
                    >
                        {areas[0]}
                    </th>
                    <td className="px-6 py-4">{areas[1]}</td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </ContentWrapper>
  );
};

export default DataTable;
