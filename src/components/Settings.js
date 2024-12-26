export default function Settings(){
    return (
      <main className=" w-full">
        <section className=" flex">
          <div>
            <p>personal info</p>
            <p>update your photo and personal detiails</p>
          </div>
          <div>
            <form>
              <div className=" flex">
                <div>
                  <label htmlFor="firstName">First name</label>
                  <input type="text" placeholder="jane" className="w-[100%]" />
                </div>
                <div>
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" placeholder="doe" className="w-[100%]" />
                </div>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="janedow@mail.com"
                  className="w-[100%]"
                />
                <img src="" alt="" />
              </div>
              <div className=" flex">
                <div className="set-pic w-[64px] h-[64px] bg-[#828282] rounded-[50%]"></div>
                <div className=" w-full">
                  <label htmlFor="picUpload"></label>
                  <input
                    type="file"
                    className=" w-full h-[120px] border-[1px] border-solid border-[#828282] rounded-[8px]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <select name="" id="" className=" w-[100%]">
                  <option value="">Nigeria</option>
                </select>
              </div>
              <div>
                <label htmlFor="timezone">Timezone</label>
                <select name="" id="" className=" w-[100%]">
                  <option value="">Nigeria</option>
                </select>
              </div>
            </form>
          </div>
        </section>
        <section></section>
      </main>
    );
}