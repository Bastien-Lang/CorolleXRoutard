export default function Title({ children, className = "" }) {
  return (
    <h1 className={`text-[#DF4585] font-black font-["Zurambi"] ${className}`}>
      {children}
    </h1>
  );
}
