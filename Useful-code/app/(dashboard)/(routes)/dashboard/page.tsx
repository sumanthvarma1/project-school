// "use client";

// import { ArrowRight } from "lucide-react";
// import { useRouter } from "next/navigation";

// import { Card } from "@/components/ui/card";
// import { cn } from "@/lib/utils";

// import { tools } from "@/constants";

// export default function HomePage() {
//   const router = useRouter();

//   return (
//     <div>
//       <div className="mb-8 space-y-4">
//         <h2 className="text-2xl md:text-4xl font-bold text-center">
//           Innovate with Vision AI
//         </h2>
//       </div>
//       <div className="px-4 md:px-20 lg:px-32 space-y-4">
//         {tools.map((tool) => (
//           <Card
//             onClick={() => router.push(tool.href)}
//             key={tool.href}
//             className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
//           >
//             <div className="flex items-center gap-x-4">
//               <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
//                 <tool.icon className={cn("w-8 h-8", tool.color)} />
//               </div>
//               <div className="font-semibold">{tool.label}</div>
//             </div>
//             <ArrowRight className="w-5 h-5" />
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { tools } from "@/constants";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Innovate with Vision AI
        </h2>
        <p className="text-center text-gray-600">
          Explore our tools to empower your AI projects.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="transform hover:-translate-y-1 transition duration-200 ease-in-out p-6 border border-gray-200 rounded-lg shadow hover:shadow-lg cursor-pointer flex flex-col items-start justify-between"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-3 rounded-full", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold text-xl">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5 self-end mt-4" />
          </Card>
        ))}
      </div>
    </div>
  );
}
