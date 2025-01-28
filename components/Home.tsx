"use client"
import React from "react";
import Image from "next/image";

const HomePage = () => {

    return (
        <div className="flex bg-[#FFB30E]">
            {/* Are you starving ?, Find food by small clicks */}
            <div className="flex flex-col justify-center items-center w-1/2">
                <h1 className="text-6xl font-bold">Are you starving ?</h1>
                <h2 className="text-3xl">Find food by small clicks</h2>
            </div>
            <Image
                src="../assets/Overlay.png"
                alt="food"
                width={500}
                height={500}
            />
        </div>
    )
}

export default HomePage;