import { Breadcrumb, CardsWrapper, Chart, DataTable, TitleAndSubtitle } from "@/components";


export default function Home() {
  return (
    <main>
      <Breadcrumb />
      <TitleAndSubtitle />
      <CardsWrapper />
      {/* <Chart/> */}
      <DataTable />
    </main>
  );
}
