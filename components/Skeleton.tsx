export default function Skeleton() {
    
    return (
        <div className="w-[256px] animate-pulse rounded-3xl shadow-xl bg-gray-300 p-5">
            <div className="bg-gray-200/60 rounded-3xl w-full h-[168px]"></div>
            <section className="flex flex-col gap-3 mt-2 px-3">
                <div className="flex flex-col gap-1">
                    <div className="bg-gray-200/60 rounded-xl h-4 w-full"></div>
                    <div className="bg-gray-200/60 rounded-xl h-4 w-16"></div>
                </div>
                <div className="flex flex-col gap-1">
                <div className="bg-gray-200/60 rounded-xl h-4 w-38"></div>
                    <div className="bg-gray-200/60 rounded-xl h-4 w-full"></div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="bg-gray-200/60 rounded-xl h-4 w-16"></div>
                    <div className="bg-transparent h-4 w-16"></div>
                </div>
            </section>
        </div>
    )
}