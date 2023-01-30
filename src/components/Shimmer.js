const Shimmer = () => {
    return (<div className="flex flex-wrap">
        {Array(15).fill("").map((e, index) => <div className="w-56 h-72 p-2 m-2 shadow-lg bg-pink-100" key={index}></div>)}
    </div>);
}

export default Shimmer;