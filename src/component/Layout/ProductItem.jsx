import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

function ProductItem() {
  return (
    <div className="w-[24%]">
      <div className=" bg-white rounded">
        <div className="w-full p-4 border-b-[3px] border-[#f7f7f7]">
          <img src="../src/assets/product1.webp" alt="" />
        </div>
        <div className="px-[10px] pt-[15px]">
          <a
            href="#"
            className="hover:text-red-500 text-decoration-solid hover:underline font-semibold text-sm mb-4 inline-block leading-5"
          >
            HP 250 G8 Core i3 11th Gen 15.6" 4GB RAM 1TB HDD Laptop
          </a>
          <ul
            role="list"
            className="list-disc list-inside border-b border-[#eee]  pb-[5px]"
          >
            <li className="text-[#666] text-[13px] pb-2.5">
              Processor: Intel Core i3-1115G4 (6MB Cache, 3.00 GHz up to 4.10
              GHz){" "}
            </li>
            <li className="text-[#666] text-[13px] pb-2.5">
              RAM: 4GB DDR4 3200MHz, Storage: 1TB HDD
            </li>
            <li className="text-[#666] text-[13px] pb-2.5">
              Display: 15.6" FHD (1920 x 1080){" "}
            </li>
            <li className="text-[#666] text-[13px] pb-2.5">
              Features: Full-Size island-style keyboard, Type-C
            </li>
          </ul>
          <div className="text-center pt-2.5">
            <span className="text-[#ef4a23] text-[17px] font-semibold flex items-center justify-center">
              55,000
              <FaBangladeshiTakaSign />
            </span>
          </div>
          <div className="pt-[15px] pb-[2.5]">
            <a
              href="#"
              className="flex gap-x-1.5 items-center justify-center py-[15px] bg-[#f5f5fc] rounded hover:bg-[#3749bb] hover:text-white duration-500 text-[#3749bb] font-semibold"
            >
              <FaShoppingCart />
              Buy Now
            </a>
            <a
              href="#"
              className="flex gap-x-1.5 items-center justify-center py-[15px] bg-white rounded hover:bg-[#f1f3f5] hover:text-black duration-500 text-[#666] mt-[7px] text-[13px]"
            >
              <MdAddToPhotos />
              Add to Compare
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
