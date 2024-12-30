import { useState } from "react";

export default function Settings(){
  const [incidentText, setIncidentText] = useState("");
  const characterCount = incidentText === "" ? 0 :incidentText.length
  console.log(characterCount)


    return (
      <main className=" w-full">
        <section className=" flex w-full flex-wrap">
          <div className=" w-[312px]">
            <p className=" text-[14px] font-[600]">Personal info</p>
            <p className="text-[14px] font-[400]">
              update your photo and personal detiails
            </p>
          </div>

          <form className="p-info-form">
            <div className=" flex gap-[20px]">
              <div className=" flex-1">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="form-control"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  placeholder="Dow"
                  className=" form-control"
                />
              </div>
            </div>
            <div className=" relative">
              <label htmlFor="email" className=" relative">
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="janedow@mail.com"
                  className="form-control  email-control "
                />
                <img
                  src="citizen-icons/email.svg"
                  alt=""
                  className=" email-icon"
                />
              </div>
            </div>
            <div className=" flex">
              <div className="set-pic">
                <img src="poeple-pictures/Ellipse 1.png" alt="" />
              </div>
              <div className="relative w-full">
                <label htmlFor="picUpload" className="picUpload">
                  <img src="citizen-icons/upload-icon.svg" alt="" />
                  <p>
                    <span className=" text-[#3ae6bd]">Click to upload</span> or
                    drag and drop
                  </p>
                  <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </label>
                <input
                  type="file"
                  className=" absolute top-0 w-full h-full opacity-0 "
                />
              </div>
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <select name="" id="" className="form-control w-[100%]">
                <option value="">Nigeria</option>
                <option value="">United States</option>
                <option value="">Ghana</option>
              </select>
            </div>
            <div>
              <label htmlFor="timezone">Timezone</label>
              <select name="" id="" className="form-control w-[100%]">
                <option value="">GMT</option>
                <option value="">CET</option>
                <option value="">EET</option>
                <option value="">IST</option>
                <option value="">CST</option>
                <option value="">JST</option>
              </select>
            </div>
            <div className=" gap-[12px] w-full flex justify-end">
              <button className=" cancel-btn">Cancel</button>
              <button className="save-btn">Save changes</button>
            </div>
          </form>
        </section>
        <section className=" w-full flex flex-wrap">
          <div className=" w-[312px]">
            <p className=" text-[14px] font=[600]">Support</p>
          </div>
          <form className=" support-form">
            <div>
              <label htmlFor="phone">Phone</label>
              <input type="number" className="form-control w-full" placeholder="+2739131291709" />
            </div>
            <div>
              <label htmlFor="phone">Email</label>
              <input type="email" className="form-control w-full"  placeholder="support@mail.com"/>
            </div>
            <div>
              <label htmlFor="ticket">Ticket</label>
              <input
                type="text"
                className="form-control w-full"
                placeholder="Enter title of ticket here"
              />
            </div>
            <div>
              <label htmlFor="ticketDetails">Ticket</label>
              <textarea
                
                className=" border-[1px] rounded-[8px] border-[#828282] bg-[#1c1c1c] w-full h-[128px] p-[14px]"
                placeholder="Enter details of the incident"
                onChange={(e)=>{ setIncidentText(e.target.value)}}
              ></textarea>
              <p> 
                {characterCount < 275  ?
                 275 - characterCount + " characters left" : "Sufficient ✅"
                }
              </p>
            </div>
            <div className=" w-full flex gap-[12px] justify-end">
              <button className="cancel-btn">Cancel</button>
              <button className="save-btn">Save changes</button>
            </div>
          </form>
        </section>
      </main>
    );
}