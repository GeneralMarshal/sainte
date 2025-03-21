export default function CitizenCard(props){
    return (
      <div className=" flex flex-col h-[273px] w-[171px] border-[1px] border-[#828282] rounded-[10px] overflow-hidden">
        <div className=" h-[153px] w-[100%] overflow-hidden">
          <img
            src={props.img}
            alt=""
            className=" min-w-full min-h-full object-cover"
          />
        </div>
        <div className="flex  flex-col flex-1 w-[100%] px-[6px] py-[9px] relative ">
          <div className=" flex items-center justify-between">
            <p className=" font-[700] text-[14px] text-[#828282]">
              {props.name}
            </p>
            {props.isVerified ? (
              <p className=" font-[600] text-[10px] text-[#3ae6bd]">Verified</p>
            ) : (
              <p className=" font-[600] text-[10px] text-[#ff6760] underline">
                Unverified
              </p>
            )}
          </div>
          <p className=" text-[10px] font-[400] text-[#a0a4a8]">
            Email@example.com
          </p>
          <p className="text-[8px] font-[400] text-[#828282]">23456</p>
          <div className=" flex justify-center gap-[9px] relative w-[100%] mt-auto">
            <button className=" w-[71px] h-[26px] bg-[#ffffff] rounded-[6px] text-[#1c1c1c] flex justify-center items-center text-[10px] font-[400] ">
              View Profile
            </button>
            <button className=" w-[58px] h-[26px] bg-[#1c1c1c] rounded-[6px] text-[#ffffff] flex justify-center items-center text-[10px] font-[400] ">
              Unmatch
            </button>
          </div>
        </div>
      </div>
    );
}