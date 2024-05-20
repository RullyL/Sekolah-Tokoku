import React from 'react';
import InputComp from '../../Components/Input/InputComp';

const Login = () => {

    const bg = {
        backgroundImage: "url('./vectors/login-vector.png')"
    }
    return (
        <>
            <div className='flex ml-[126px] justify-center items-center mt-[170px]'>
                <div className='h-[505.19px] gap-[78px] m-auto px-[136px] w-full flex'>
                    <div style={bg} className='w-[524px] h-[422px] bg-no-repeat bg-contain'></div>
                    <div className='w-[551px]'>
                        <div className='w-[400px]'>
                            <h1 className='text-[40px] text-center text-[#6CAEFF] py-6'>Tokoku</h1>
                            <InputComp.InputCommon type="text"
                                name="Email"
                                required
                                label="Email"
                                placeholder="Masukkan Email Anda"
                                messages="Email belum diisi"
                            // onChange={(e) => handleInputChange('email', e.target.value)}
                            />
                            <InputComp.InputPass
                                name="inputan_pw"
                                messages="Password belum diisi"
                                required
                                label="Password"
                                placeholder="Masukkan Password Anda"
                            // onChange={(e) =>
                            // handleInputChange('password', e.target.value)}
                            />
                            <InputComp.InputSubmit
                                className=" w-[492px] md:w-[345px] text-center text-[#fff] bg-[#204D84] font-[600] h-[54px] mt-[-10px] rounded-lg cursor-pointer"
                                value="Daftar" />
                            <h2 className='py-8 text-center'>
                                Lupa Password ?
                            </h2>
                            <div className='text-center'>
                                <h2>Belum Punya Akun ? <span className='text-[#6CAEFF]'>Daftar</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='text-center p-16 h-[186px] bg-[#E7F1FF]'>
                <div className='flex justify-center gap-2' >
                <h4>About</h4>
                <h4>Help</h4>
                </div>
                <div>
                    <h5>Copy Right Kasir 2023</h5>
                </div>
            </footer>
        </>
    );
}

export default Login;
