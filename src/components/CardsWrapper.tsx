import { ContentWrapper } from "."
import DataCards from "./DataCards"

const CardsWrapper = () => {
  return (
    <ContentWrapper classList="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-[193px]">
        { [...Array(3)].map( (_, i) => <DataCards key={i} />)}
    </ContentWrapper>
  )
}

export default CardsWrapper