import PCBuilderCategoryCard from "@/components/PCBuilderCategoryCard";
import RootLayout from "@/components/layouts/RootLayout";
import SelectedComponentCard from "@/components/selectedComponentCard";
import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const categories = [
  {
    id: 1,
    title: "CPU / Processor",
    bg: "bg-red-300",
    route: "/selectProduct/CPU or Processor",
  },
  {
    id: 2,
    title: "Motherboard",
    bg: "bg-lime-300",
    route: "/selectProduct/Motherboard",
  },
  {
    id: 3,
    title: "RAM",
    bg: "bg-amber-300",
    route: "/selectProduct/RAM",
  },
  {
    id: 4,
    title: "Power Supply Unit",
    bg: "bg-teal-200",
    route: "/selectProduct/Power Supply Unit",
  },
  {
    id: 5,
    title: "Storage Device",
    bg: "bg-orange-200",
    route: "/selectProduct/Storage Device",
  },
  {
    id: 6,
    title: "Monitor",
    bg: "bg-red-300",
    route: "/selectProduct/Monitor",
  },
  {
    id: 7,
    title: "Others",
    bg: "bg-lime-300",
    route: "/selectProduct/Others",
  },
];

export default function BuildPCPage() {
  const pcComponents = useSelector((state) => state.pcBuilder);
  const {
    cpu,
    motherboard,
    ram,
    powerSupplyUnit,
    storageDevice,
    monitor,
    others,
  } = pcComponents || {};

  const notify = () => toast.success("Successfully Build Your PC!");

  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-xl font-bold">PC Builder</h1>
        <p className="text-sm text-center">Select Your Components</p>

        <div className="flex justify-between items-center px-3 py-2 bg-gray-500 text-white mt-5">
          <p className="font-semibold">Your Build PC</p>
          <button className="py-1 px-4 font-semibold bg-gray-700 rounded">
            Reset
          </button>
        </div>

        {categories.map((category) => {
          if (category.title === "CPU / Processor" && cpu) {
            return (
              <>
                <PCBuilderCategoryCard key={category.id} category={category} />
                <SelectedComponentCard key={category.id} product={cpu} />
              </>
            );
          }
          if (category.title === "Motherboard" && motherboard) {
            return (
              <>
                <PCBuilderCategoryCard key={category.id} category={category} />
                <SelectedComponentCard
                  key={category.id}
                  product={motherboard}
                />
              </>
            );
          }
          if (category.title === "RAM" && ram) {
            return (
              <>
                <PCBuilderCategoryCard key={category.id} category={category} />
                <SelectedComponentCard key={category.id} product={ram} />
              </>
            );
          }
          if (category.title === "Power Supply Unit" && powerSupplyUnit) {
            return (
              <>
                <PCBuilderCategoryCard key={category.id} category={category} />
                <SelectedComponentCard
                  key={category.id}
                  product={powerSupplyUnit}
                />
              </>
            );
          }
          if (category.title === "Storage Device" && storageDevice) {
            return (
              <>
                <PCBuilderCategoryCard key={category.id} category={category} />
                <SelectedComponentCard
                  key={category.id}
                  product={storageDevice}
                />
              </>
            );
          }
          if (category.title === "Monitor" && monitor) {
            return (
              <>
                <PCBuilderCategoryCard key={category.id} category={category} />
                <SelectedComponentCard key={category.id} product={monitor} />
              </>
            );
          }
          if (category.title === "Others" && others) {
            return (
              <>
                <PCBuilderCategoryCard key={category.id} category={category} />
                <SelectedComponentCard key={category.id} product={others} />
              </>
            );
          } else {
            return (
              <PCBuilderCategoryCard key={category.id} category={category} />
            );
          }
        })}
        <div className="flex justify-end mt-4">
          <button
            onClick={notify}
            disabled={
              Object.values(pcComponents).filter(Boolean).length >= 5
                ? false
                : true
            }
            className="py-2 px-4 font-semibold bg-green-300 rounded-md"
          >
            Complete Build
          </button>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}

BuildPCPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
