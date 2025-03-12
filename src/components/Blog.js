import { useNavigate } from "react-router-dom";
import "../styles/AdminBlog.css"
import SearchBar from "./SearchBar";

export default function Blog() {
  return (
    <main className=" w-[100%]">
      <div>
        <SearchBar />
      </div>
      <p className=" mt-[95px] pb-[3px] text-[#f5f5f5] text-[24px] font-[400] ">
        Add resource
      </p>
      {/* add resource and upload photos */}
      <div className="pl-[10px] text-center ">
        {/* text area for typing the blog */}

        <textarea
          name=""
          id=""
          className=" input my-[17px] py-[20px] h-[173px] px-[24px] "
          placeholder=" Start typing here"
        ></textarea>

        {/* edit blog texts over here */}

        <div className=" gap-[15px] flex flex-wrap items-center">
          <div>
            <select name="" id="textOptions" className=" select">
              <option value="normal">Normal text</option>
              <option value="notNormal">Not Normal</option>
            </select>
          </div>
          <div className="edit-text flex">
            <div className=" flex items-center justify-center">
              <img src="blog-icons/bold.svg" alt="" />
            </div>
            <div className=" flex items-center justify-center">
              <img src="blog-icons/italics.svg" alt="" />
            </div>
            <div className=" flex items-center justify-center">
              <img src="blog-icons/attach.svg" alt="" />
            </div>
            <div className=" flex items-center justify-center">
              <img src="blog-icons/bullets.svg" alt="" />
            </div>
            <div className=" flex items-center justify-center">
              <img src="blog-icons/number.svg" alt="" />
            </div>
          </div>
        </div>

        {/* file uploader */}

        <div className=" uploader flex justify-center items-center relative">
          <input type="file" name="" id="" className="" />
          <div className=" relative gap-[10px] flex flex-col items-center justify-center text-center">
            <img src="blog-icons/upload.svg" alt="" />
            <p className=" font-[400] text-[12px]" >browse and choose your cover image</p>
            <span className=" flex rounded-[4px] justify-center itmes-center text-[20px] w-[32px] h-[32px] bg-[#3AE6BD]">
              +
            </span>
          </div>
        </div>
        <button className=" mt-[85px] mb-[180px ] rounded-[8px] h-[48px] w-[266px] bg-[#ffffff] text-[#1c1c1c] text-[16px] font-[600]">Add Resource</button>
      </div>
    </main>
  );
}
