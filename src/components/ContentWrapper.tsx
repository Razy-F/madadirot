
const ContentWrapper = ({ children, classList }: { children: React.ReactNode, classList?:string }) => {
  return <div className={`max-w-[1000px] m-auto ${classList ? classList : ''}`}>{children}</div>;
};

export default ContentWrapper;
