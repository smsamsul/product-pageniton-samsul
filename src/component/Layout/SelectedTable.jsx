import React from "react";

function SelectedTable() {
  return (
    <div className="flex flex-col gap-x-1 sm:flex-row sm:items-center lg:gap-x-3.5">
      <span className="text-xs text-[#666] lg:text-base">Sort by:</span>
      <form className="w-[100px]">
        <select
          id="countries"
          className="block w-full bg-gray-50 px-2.5 py-1 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 rounded"
        >
          <option
            value={"selected"}
            className="font-regular font-dm text-xs text-t2color lg:text-base"
          >
            Default
          </option>

          <option
            value="Price(Low > High)"
            className="font-regular font-dm text-xs text-t2color lg:text-base"
          >
            {`Price(Low > High)`}
          </option>
          <option
            value="Price(Hight > Low)"
            className="font-regular font-dm text-xs text-t2color lg:text-base"
          >
            {`Price(High > Low)`}
          </option>
        </select>
      </form>
    </div>
  );
}

export default SelectedTable;
