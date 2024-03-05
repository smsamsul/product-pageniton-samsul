import React, { useState } from "react";
import Container from "./component/Layout/Container";
import Flex from "./component/Layout/Flex";
import Pagination from "./component/Layout/Pagination";
import SelectedTable from "./component/Layout/SelectedTable";

function Product() {
  const [itemPerPage, SetItemPerPAge] = useState(8);
  const ItemsInPage = (e) => {
    SetItemPerPAge(+e.target.value);
  };
  return (
    <div className="bg-[#f2f4f8] pt-4">
      <Container>
        <Flex style={"gap-x-10"}>
          <div className="w-[75%] mx-auto">
            <div className="mb-2">
              <Flex style="justify-between items-center py-2.5 bg-white px-1.5 rounded">
                <span className="pl-2">HP</span>
                <Flex style={"gap-x-3"}>
                  <div className="flex flex-col gap-x-3.5 sm:flex-row sm:items-center">
                    <span className="text-xs text-[#666] lg:text-base">
                      Show:
                    </span>
                    <form className="w-[80px]">
                      <select
                        id="countries"
                        className="block w-full bg-gray-50 px-2.5 py-1 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 rounded"
                        onChange={ItemsInPage}
                        value={"DEFAULT"}
                      >
                        <option selected value={8}>
                          8
                        </option>
                        <option value={12}>12</option>
                        <option value={16}>16</option>
                        <option value={20}>20</option>
                      </select>
                    </form>
                  </div>
                  <SelectedTable />
                </Flex>
              </Flex>
            </div>
            <Pagination itemsPerPage={itemPerPage} />
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Product;
