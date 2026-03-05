interface BoxWithLabelProps {
    children: React.ReactNode;
    title: string;
}

const BoxWithLabelWrapper = ({ title, children }: BoxWithLabelProps) => (
  <div className="mobile-margin-top-spacing form-border-box">
    <div className="mt-[-11%] font-orange-red bg-black">{title}</div>
    {children}
  </div>
);

export default BoxWithLabelWrapper;
