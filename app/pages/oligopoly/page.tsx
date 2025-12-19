import { ChatSection } from "@/components/ChatSection";
import { ResourceSection } from "@/components/ResourceSection";
import { SummeriseSection } from "@/components/SummeriseSection";

export default function Oligopoly(){
    return(
        <div className="">
            {/* nav section */}
            <nav className="p-4 border-b">
                <h3 className="text-xl">Oligopoly Research</h3>
            </nav>

            {/* Interactive section */}
            <div className="h-[calc(100vh-64px)] flex flex-row p-1 gap-3">
                <div className="w-1/5 overflow-y-auto rounded-xl bg-gray-800 p-1">
                    <ResourceSection/>
                </div>
                <div className="w-1/2 overflow-y-auto rounded-xl bg-gray-800 p-1">
                    <ChatSection/>
                </div>

                <div className="w-3/10 overflow-y-auto rounded-xl bg-gray-800 p-1">
                    <SummeriseSection/>
                </div>
            </div>
        </div>
    )
}