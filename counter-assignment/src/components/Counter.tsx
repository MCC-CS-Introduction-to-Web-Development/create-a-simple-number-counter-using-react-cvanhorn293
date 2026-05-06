import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count has changed to: ${count}`);
    }, [count]);

    return (
        <>
            <h1 className="text-center text-5xl font-bold mt-16 text-white drop-shadow-lg">Counter of DOOM</h1>
            <p className="text-center text-white/90 mt-3 text-lg">Click the buttons to change the count</p>
            <div className="text-6xl font-bold rounded-2xl bg-white/20 backdrop-blur-md w-32 h-32 flex items-center justify-center m-auto mt-12 text-white shadow-2xl border border-white/30">{count}</div>
            <div className="flex justify-center mt-8 gap-4">
                <button
                    onClick={() => setCount(count - 1)}
                    disabled={count === 0 ? true : false}
                    className="px-8 py-3 bg-white/90 hover:bg-white text-purple-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    -1
                </button>
                <button onClick={() => setCount(count + 1)} className="px-8 py-3 bg-white/90 hover:bg-white text-purple-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                    +1
                </button>
            </div>
            <div className={`px-8 py-3 mt-8 text-center bg-red-400 font-semibold drop-shadow-xl ${count < 666 ? "hidden" : ""}`}>DOOM! Why are you clicking this so much?</div>
        </>
    );
}
