export default function Loading() {
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-slate-50 z-50 flex justify-center items-center">
      <div className="w-10 h-10 rounded-[50%] border-t-primary border-8 border-solid border-slate-300 animate-spin" />
    </div>
  );
}
