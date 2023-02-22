//hook
import UseFetch from "../../Hooks/UseFetch";
//skeleton
import BrandSkeleton from "../../skeleton/BrandSkeleton";
//css
import "../../css/Home/Brands.css";
function Brands() {
  //fetch brands
  const { data, loading, error } = UseFetch("/brands/get");

  return (
    <div className="brands">
      <h1 className="text-2xl font-extrabold my-8">Choose By Brand.</h1>
      <div className="my-4 content flex flex-wrap items-center justify-center px-2 gap-8">
        {/* brand */}
        {loading &&
          Array.from({ length: 8 }).map((_, i) => <BrandSkeleton key={i} />)}
        {data?.map((brand) => (
          <div
            key={brand?._id}
            className="brand rounded-md flex gap-4 items-center justify-between px-5 py-2 shadow-md"
          >
            <div className="brand_image  w-20 h-20  p-4 rounded-full relative bg-white">
              <img
                src={`${import.meta.env.VITE_BRANDS_IMG_URL}/${
                  brand?.brand_img
                }`}
                alt="brand img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="info">
              <h1 className="name text-lg ">{brand?.brand_name}</h1>
              <p className="details text-slate-500">{brand?.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
