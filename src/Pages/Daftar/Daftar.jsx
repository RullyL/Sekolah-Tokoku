function Daftar() {
    return (
      <section className="register-page px-4 mb-36" id="register">
        <div className="container ">
          <div className="flex justify-center items-center">
            <div className="w-1/2 p-10">
              <img src="./vectors/daftar-vector.png" alt="" width="100% " />
            </div>
            <div className="w-1/2 p-20">
              <div className="w-full border-2 px-16 p-5">
                <h1 className="m-3 text-lg text-blue-700 font-medium ml-[20px] font-kaushan">Tokoku</h1>
                <input type="text" placeholder="Username or Email" className="bg-slate-100 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-3" />
                <input type="text" placeholder="Password" className="bg-slate-100 block w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-3" />
                <button className="w-full py-2 bg-blue-500 mb-3">Masuk</button>
                <h4 className="ml-30">lupa password?</h4>
              </div><br />
              <div className="w-full border-2 px-16 py-5">
                <h1 className="text-lg">Sudah punya akun? <a href="/login" className="text-blue-300">Login</a></h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  
  export default Daftar;