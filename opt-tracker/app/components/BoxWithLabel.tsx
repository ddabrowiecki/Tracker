interface BoxWithLabelProps {
  children: React.ReactNode;
  title: string;
}

const BoxWithLabelWrapper = ({ title, children }: BoxWithLabelProps) => (
  <>
    <div className="mobile-margin-top-spacing form-border-box">
      <div className="font-orange-red bg-foreground mt-[-5%] w-[60%]">{title}</div>
      {children}
    </div>
  </>
);

export default BoxWithLabelWrapper;
