import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../Components/Footer/Footer';
import CardComp from '../../Components/Card/Card';
import InputComp from '../../Components/Input/InputComp';

const Keranjang = () => {
    return (
        <>
            <Navbar />
            <div className='w-full p-[100px] flex flex-row gap-[250px]'>
                <div>
                    <div>
                        <h1>Keranjang</h1>
                        <div className='w-[100px] h-[25px] bg-slate-200'></div>
                    </div>
                    <div className='w-[650px] h-[900px] flex flex-col overflow-y-auto max-w-2xl gap-6'>
                        <CardComp.CardKeranjnag image='https://thumb.viva.co.id/media/frontend/thumbs3/2016/09/30/57ee2f88bbb5b-ternyata-lima-barang-keren-ini-dijual-di-situs-jual-beli-online_665_374.jpg' title='Sepatu' description='Produk Kita' />
                        <CardComp.CardKeranjnag image='https://thumb.viva.co.id/media/frontend/thumbs3/2016/09/30/57ee2f88bbb5b-ternyata-lima-barang-keren-ini-dijual-di-situs-jual-beli-online_665_374.jpg' title='Sepatu' description='Produk Kita' />
                        <CardComp.CardKeranjnag image='https://thumb.viva.co.id/media/frontend/thumbs3/2016/09/30/57ee2f88bbb5b-ternyata-lima-barang-keren-ini-dijual-di-situs-jual-beli-online_665_374.jpg' title='Sepatu' description='Produk Kita' />
                        <CardComp.CardKeranjnag image='https://thumb.viva.co.id/media/frontend/thumbs3/2016/09/30/57ee2f88bbb5b-ternyata-lima-barang-keren-ini-dijual-di-situs-jual-beli-online_665_374.jpg' title='Sepatu' description='Produk Kita' />
                        <CardComp.CardKeranjnag image='https://thumb.viva.co.id/media/frontend/thumbs3/2016/09/30/57ee2f88bbb5b-ternyata-lima-barang-keren-ini-dijual-di-situs-jual-beli-online_665_374.jpg' title='Sepatu' description='Produk Kita' />
                        <CardComp.CardKeranjnag image='https://thumb.viva.co.id/media/frontend/thumbs3/2016/09/30/57ee2f88bbb5b-ternyata-lima-barang-keren-ini-dijual-di-situs-jual-beli-online_665_374.jpg' title='Sepatu' description='Produk Kita' />
                        <CardComp.CardKeranjnag image='https://thumb.viva.co.id/media/frontend/thumbs3/2016/09/30/57ee2f88bbb5b-ternyata-lima-barang-keren-ini-dijual-di-situs-jual-beli-online_665_374.jpg' title='Sepatu' description='Produk Kita' />
                        <CardComp.CardKeranjnag image='https://thumb.viva.co.id/media/frontend/thumbs3/2016/09/30/57ee2f88bbb5b-ternyata-lima-barang-keren-ini-dijual-di-situs-jual-beli-online_665_374.jpg' title='Sepatu' description='Produk Kita' />
                    </div>
                </div>
                {/* Keranjang */}
                <div className='w-[384px] h-[504px] p-3 mt-[80px] bg-slate-50'>
                    <h1 className='py-6'>Detail Pesanan</h1>
                    <hr />
                    <br />
                    <div className='h-[202px]'>
                        <h3>Opsi Pengiriman </h3>
                        <InputComp.InputOption/>
                    </div>
                    <div className='py-[8px] mb-4 w-full bg-slate-300'>
                        <h4>Pesan</h4></div>
                    <hr />
                    <div className='flex mt-8 gap-[150px]'>
                        <h3>Total Pesanan : </h3>
                        <h3>Rp.0128</h3></div>
                    <br />
                    <InputComp.InputSubmit />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Keranjang;
