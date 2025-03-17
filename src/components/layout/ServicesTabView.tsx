"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import ServicesItem from "./ServicesItem";
import { ServicesViewData } from "./interface/ServicesViewData";

function ServicesTabView({ data }: { data: ServicesViewData }) {
  const [category, setCategory] = useState<
    "Cosmetic_Dentistry" | "Advance_Dentistry"
  >("Cosmetic_Dentistry");
  return (
    <>
      <div className="w-full mx-auto flex justify-center items-center mt-10">
        <Tabs
          defaultValue={category}
          onValueChange={(e) => {
            setCategory(e as "Cosmetic_Dentistry" | "Advance_Dentistry");
          }}
        >
          <TabsList className="bg-primary/10 rounded-full h-10 ">
            <TabsTrigger
              className="rounded-full h-8 px-8"
              value="Cosmetic_Dentistry"
            >
              Cosmetic Dentistry
            </TabsTrigger>
            <TabsTrigger
              className="rounded-full h-8 px-8"
              value="Advance_Dentistry"
            >
              Advance Dentistry
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
        {data.ourServicesList.services
          .filter((e) => {
            return e.category === category;
          })
          .map((item, index) => {
            return (
              <ServicesItem key={index + "tet" + item.documentId} data={item} />
            );
          })}
      </div>
    </>
  );
}

export default ServicesTabView;
