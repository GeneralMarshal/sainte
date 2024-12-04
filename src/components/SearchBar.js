export default function SearchBar(){
    return (
      <div className=" relative w-[100%]">
        <p className="relative text-[16px] font-[700] mb-[14px]">Search</p>
        <div className="citizen-search flex w-[100%] relative items-center ">
          <img
            src="/citizen-icons/search.svg"
            alt=""
            className=" absolute ml-[16px] mr-[10px] "
          />
          <input
            type="text"
            placeholder="Enter name, email or code to search"
            className="w-[100%] border-solid border-[1px] border-[#828282] text-[12px]  font-[500] h-[40px] py-[16px] pl-[44px] pr-[16px] bg-[#1c1c1c] text-[#a1a1aa] rounded-[10px]"
          />
        </div>
      </div>
    );
}