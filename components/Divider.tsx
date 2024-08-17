const Divider = ({
  width,
  rounded = false,
  color = "white",
}: {
  width: number;
  rounded?: boolean;
  color?: string;
}) => {
  return (
    <div className="flex items-center">
      <div
        className="bg-black h-1.5 lg:h-[10px]"
        style={{
          width: width,
          borderRadius: rounded ? "50px" : "0px",
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default Divider;
