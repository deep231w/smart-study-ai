'use client'
import Image from "next/image";
import { useState } from "react";

export function ResourceSection(){

    const [renderPdf , setRenderPdf] =useState(false);
    const [renderYoutube, setRenderYoutube]=useState(false);

    return (
        <div className="flex flex-col">
            <div className="flex justify-center items-center pt-3">
                <p className="text-xl">Resources section</p>
            </div>

            <div className="flex flex-col  items-center pt-9 gap-3">
                <button 
                    className="flex items-center gap-1 p-1  border rounded-lg hover:bg-gray-500"
                    onClick={()=>setRenderPdf(!renderPdf)}
                >
                    <Image
                        src="/pdf.png"
                        alt="pdf"
                        width={24}
                        height={24}
                    />
                    <span>
                        oligopoly-chapter-AQA.pdf
                    </span>
                </button>

                {renderPdf && 
                    <div className="w-full h-[70vh] overflow-hidden">
                        <iframe
                            src="/pddf.pdf"
                            className="w-full h-full border rounded"
                        />
                    </div>
                }

                <button 
                    className="flex items-center gap-1 p-1  border rounded-lg hover:bg-gray-500"
                    onClick={()=>setRenderYoutube(!renderYoutube)}
                >
                    <Image
                        src="/youtube.png"
                        alt="YouTube"
                        width={24}
                        height={24}
                    />
                    <span>Y2 26) Oligopoly - Game Theory</span>
                </button>

                {renderYoutube &&
                    <div className="w-full aspect-video">
                        <iframe
                            src="https://www.youtube.com/embed/Z_S0VA4jKes?start=3"
                            className="w-full h-full rounded"
                            allowFullScreen
                        />
                    </div>
                }
            </div>
                
        </div>
    )
}