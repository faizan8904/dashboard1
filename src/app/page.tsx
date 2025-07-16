'use client'

import AppBarchart from "@/components/AppBarchart";



export default function Home() {
  return (
   <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">

    <div className="bg-primary-foreground p-4 rounded-md  lg:col-span-2 2xl:col-span-2">
      <AppBarchart />
    </div>
     <div className="bg-primary-foreground p-4 rounded-md 2xl:col-span-2"> Text</div>
      <div className="bg-primary-foreground p-4 rounded-md 2xl:col-span-1 "> 
        <AppBarchart />
      </div>
       <div className="bg-primary-foreground p-4 rounded-md 2xl:col-span-2"> Text</div>
        <div className="bg-primary-foreground p-4 rounded-md  lg:col-span-2 2xl:col-span-3"> Text</div>
         <div className="bg-primary-foreground p-4 rounded-md"> Text</div>
   </div>
  );
}
 