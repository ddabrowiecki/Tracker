interface BoxWithLabelProps {
  children: React.ReactNode;
  title: string;
}

const BoxWithLabelWrapper = ({ title, children }: BoxWithLabelProps) => (
  <>
    <div className="mobile-margin-top-spacing form-border-box">
      <div className="font-orange-red font-bold bg-foreground mt-[-7%] w-max px-1">{title}</div>
      {children}
    </div>
  </>
);

export default BoxWithLabelWrapper;
