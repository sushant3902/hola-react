

const CardShimmer = () => {
    return (
        <div className="border border-gray-50 shadow rounded-md m-4 p-4 w-72 h-80 mx-4">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 py-1">
                    <div className="h-44 bg-slate-200"></div>
                    <div className="h-4 mt-4 bg-slate-200 rounded-sm"></div>
                    <div className="h-2 mt-1 w-1/4 bg-slate-200 rounded-sm"></div>
                    <div className="mt-4 grid grid-cols-3 gap-8">
                        <div className="h-2 bg-slate-200  col-span-1 rounded-sm"></div>
                        <div className="h-2 bg-slate-200 col-span-1 rounded-sm"></div>
                        <div className="h-2 bg-slate-200 col-span-1 rounded-sm"></div>
                    </div>
                </div>
            </div>
      </div>
    );
  };

const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center">
           {Array(15).fill("").map((e, index) => { 
                return (
                    <CardShimmer key={index} />
                )
            })}
        </div>
    );
}

export default Shimmer;