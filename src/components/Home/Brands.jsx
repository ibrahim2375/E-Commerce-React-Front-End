import { useRef } from "react";
//hook
import UseFetch from "../../Hooks/UseFetch";
//skeleton
import BrandSkeleton from "../../skeleton/BrandSkeleton";
//icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
//css
import "../../css/Home/Brands.css";
function Brands() {
  const brands_ref = useRef();
  //fetch brands
  const { data, loading, error } = UseFetch("/brands/get");
  //scroll left
  const scrollForward = () => {
    brands_ref.current.scrollLeft += 200;
  };
  const scrollBackword = () => {
    brands_ref.current.scrollLeft -= 200;
  };
  return (
    <div className="brands">
      <h1 className="text-2xl font-extrabold my-8">Choose By Brand.</h1>
      <div
        ref={brands_ref}
        className=" row my-4 content flex items-center  px-2 gap-4 overflow-x-auto py-10 "
      >
        {/* left arrow */}
        <div
          className="left_arrow absolute left-5 bg-white p-2 rounded-full shadow-lg z-10 cursor-pointer"
          onClick={scrollBackword}
        >
          <AiOutlineArrowLeft className="text-2xl" />
        </div>
        {/* brand */}
        {loading &&
          Array.from({ length: 8 }).map((_, i) => <BrandSkeleton key={i} />)}
        {data?.map((brand) => (
          <div
            key={brand?._id}
            className="brand rounded-md flex gap-4 items-center px-2 py-2 shadow-md"
          >
            <div className="brand_image  w-20 h-20  p-4 rounded-full relative bg-white">
              <img
                src={`${import.meta.env.VITE_BRANDS_IMG_URL}/${
                  brand?.brand_img
                }`}
                alt="brand img"
                className="object-cover"
              />
            </div>
            <div className="info">
              <h1 className="name text-lg ">{brand?.brand_name}</h1>
              <p className="details text-slate-500">{brand?.details}</p>
            </div>
          </div>
        ))}
        {/* right arrow */}
        <div
          className="left_arrow absolute right-5 bg-white p-2 rounded-full shadow-lg z-10 cursor-pointer"
          onClick={scrollForward}
        >
          <AiOutlineArrowRight className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
