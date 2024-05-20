import Navbar from '../../components/Navbar/navbar';
import Footer from '../../Components/Footer/Footer';
import CardComp from '../../Components/Card/Card';
import CarouselComp from '../../Components/Carousel/Carousel';
import { useState, useEffect } from 'react';

const Home = () => {
    const [laptop, setLaptop] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/public/data/products.json')
                const jsonData = await response.json()
                const laptops = jsonData.laptop
                setLaptop(laptops)
            } catch (error) {
                console.log('error', error);
            }
        }
        fetchData()
    }, [])
    console.log(laptop);

    return (
        <div>
            <Navbar />
            <div>
                <div className='my-4'>
                    <img src="./background/banner.jpg" alt="" className='p-10 w-full rounded-[60px] h-[400px] bg-no-repeat bg-contain' />
                </div>
                <div className='flex items-center mx-[170px] justify-center'>
                    <CarouselComp />
                </div>
                <h1 className='px-[160px] my-16'>Kategori 1</h1>
                <div className='w-full flex flex-wrap justify-center bg-gray-50 p-6'>
                    {laptop.map((laptop, index) => (
                        <CardComp.Card
                            key={index}
                            image={laptop.image}
                            title={laptop.name}
                            description={laptop.description}
                            harga={laptop.harga}
                        />
                    ))}  </div>
                <h1 className='px-[160px] my-16'>Kategori 2</h1>
                <div className='w-full mb-20 flex flex-wrap justify-center p-6 bg-slate-50'>
                    {laptop.map((laptop, index) => (
                        <CardComp.Card
                            key={index}
                            image={laptop.image}
                            title={laptop.name}
                            description={laptop.description}
                            harga={laptop.harga}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
