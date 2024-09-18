type LoaderProps = {
    borderColor: string;
}

export default function Loader({ borderColor }: LoaderProps) {
  return (
      <div className="flex justify-center items-center h-screen">
        <div className={`w-16 h-16 border-b-4 ${borderColor} border-solid rounded-full animate-spin`}></div>
      </div>
  )
}