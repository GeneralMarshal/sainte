import "../styles/Auth.css"


export default function Banner(){
    const peoplePic = [
      "poeple-pictures/Ellipse 1.png",
      "poeple-pictures/Ellipse 1 (1).png",
      "poeple-pictures/Ellipse 1 (2).png",
      "poeple-pictures/Ellipse 1 (3).png",
      "poeple-pictures/Ellipse 1 (4).png",
      "poeple-pictures/Ellipse 1 (5).png",
      "poeple-pictures/Ellipse 1 (6).png",
      "poeple-pictures/Ellipse 1 (7).png",
      "poeple-pictures/Ellipse 1 (8).png",
    ];





    return (
      <div className="sainte-ban  flex-[55%]   ">
        <div className=" text-center mt-[50px]">
          <h1 className=" text-[64px] font-[700] text-[#3AE6BD]">Sainte</h1>
          <div className="people-grid">
            {peoplePic.map((item, index)=>{
                return (
                  <div className="people-pic" key={index}>
                    <img src={item} alt="" />
                  </div>
                );
            })}
            
          </div>
         {/* <p className=" font-[400] text-[#ffffff] text-[32px]">
            {" "}
            Everybody is a sainte
          </p>  */}
        </div>
      </div>
    );
}