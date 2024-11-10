import React, { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const App = () => {


  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, [])


  useEffect(() => {

document.querySelectorAll(".elem1").forEach(elem1=>{
  gsap.to(elem1, {
    opacity: 0.7,
    scale: 0.9,
    x: -100,
    scrollTrigger: {
      trigger: elem1,
      // markers: true,
      scrub: true,
      start: 'top 20%',
      end: 'bottom 20%',
    }

  })
}, [])



document.querySelectorAll(".elem2").forEach(elem2=>{
  gsap.to(elem2, {
    opacity: 0.5,
    scale: 0.9,
    x: 100,
    scrollTrigger: {
      trigger: elem2,
      // markers: true,
      scrub: true,
      start: 'top 20%',
      end: 'bottom 20%',
    }

  })
}, [])


})


   



  return (

    <>
      <div className='h-screen w-full bg-white flex justify-center items-start '>

        <div className='  h-[500vh] w-[26%] bg-white rounded-xl mx-20 flex flex-col py-[50vh] '>

          <div className='elem1 sticky top-[30%] h-[10%] w-[100%] bg-white rounded-xl  mb-20  '> </div> 

          <div className='elem1 sticky top-[30%] h-[14%] w-[100%] bg-white rounded-3xl flex justify-center items-start pt-[40px]  mb-20  border-2 '>         
          <img src="/img/image1.jpg" alt="" className=' absolute h-[50%] w-[70%]  rounded-3xl '/>
          <p className='text-black absolute top-[65%] '>Perfume</p>
          <h2 className='absolute top-[75%] px-[10%] text-black text-[20px] rounded-xl'>299$</h2>
          <button className='absolute top-[85%] bg-black text-white px-[10px] rounded-xl '>Buy</button>

          </div>
          <div className='elem1 sticky top-[30%] h-[14%] w-[100%] bg-white rounded-3xl  flex justify-center items-start pt-[40px]  mb-20  border-2 '>
          <img src="/img/image2.jpg" alt="" className=' absolute h-[50%] w-[70%]  rounded-3xl '/>
          <p className='text-black absolute top-[65%] '>Puffer Jacket</p>
          <h2 className='absolute top-[75%] px-[10%] text-black text-[20px] rounded-xl'>159$</h2>
          <button className='absolute top-[85%] bg-black text-white px-[10px] rounded-xl '>Buy</button>

          </div>
          <div className='elem1 sticky top-[30%] h-[14%] w-[100%] bg-white rounded-xl flex justify-center items-start pt-[40px]  mb-20  border-2'>
          <img src="/img/image3.jpg" alt="" className=' absolute h-[50%] w-[70%]  rounded-3xl '/>
          <p className='text-black absolute top-[65%] '>Nike Joyride</p>
          <h2 className='absolute top-[75%] px-[10%] text-black text-[20px] rounded-xl'>259$</h2>
          <button className='absolute top-[85%] bg-black text-white px-[10px] rounded-xl '>Buy</button>
          </div>
          <div className='elem1 sticky top-[30%] h-[14%] w-[100%] bg-white rounded-xl flex justify-center items-start pt-[40px]  mb-20  border-2'>
          <img src="/img/image4.jpg" alt="" className=' absolute h-[50%] w-[70%]  rounded-3xl '/>
          <p className='text-black absolute top-[65%] '>Lamp</p>
          <h2 className='absolute top-[75%] px-[10%] text-black text-[20px] rounded-xl'>59$</h2>
          <button className='absolute top-[85%] bg-black text-white px-[10px] rounded-xl '>Buy</button>
          </div>
          <div className='elem1 sticky top-[30%] h-[14%] w-[100%] bg-white rounded-xl flex justify-center items-start pt-[40px]  mb-20  border-2'>
          <img src="/img/image5.jpg" alt="" className=' absolute h-[50%] w-[70%]  rounded-3xl '/>
          <p className='text-black absolute top-[65%] '>Deodrant</p>
          <h2 className='absolute top-[75%] px-[10%] text-black text-[20px] rounded-xl'>99$</h2>
          <button className='absolute top-[85%] bg-black text-white px-[10px] rounded-xl '>Buy</button>
          </div>

        </div>

        <div className=' h-[300vh] w-[30%] text-6xl  flex justify-center items-start py-[50vh] '>
          <h1 className='element  top-[50%] h-[24%] ] text-black mb-20 '>Daily Essentials </h1>
        </div>



        <div className='h-[500vh] w-[26%] bg-white  rounded-xl   mx-20 flex flex-col py-[50vh]'>

          <div className='elem2 sticky top-[30%] h-[10%] w-[100%] bg-white rounded-xl mb-20 '> </div>

          <div className='elem2 sticky top-[30%] h-[14%] w-[100%] bg-white rounded-xl flex justify-center items-start pt-[40px]  mb-20  border-2 '> 
            <img src="/img/image6.jpg" alt="" className=' absolute h-[50%] w-[70%]  rounded-3xl '/>
          <p className='text-black absolute top-[65%] '>Vitamic C Serum</p>
          <h2 className='absolute top-[75%] px-[10%] text-black text-[20px] rounded-xl'>259$</h2>
          <button className='absolute top-[85%] bg-black text-white px-[10px] rounded-xl '>Buy</button>
          </div>

          <div className='elem2 sticky top-[30%] h-[14%] w-[100%] bg-white rounded-xl flex justify-center items-start pt-[40px]  mb-20  border-2 '>
          <img src="/img/image7.jpg" alt="" className=' absolute h-[50%] w-[70%]  rounded-3xl '/>
          <p className='text-black absolute top-[65%] '>Sneakers</p>
          <h2 className='absolute top-[75%] px-[10%] text-black text-[20px] rounded-xl'>199$</h2>
          <button className='absolute top-[85%] bg-black text-white px-[10px] rounded-xl '>Buy</button>
         
          </div>

          <div className='elem2 sticky top-[30%] h-[14%] w-[100%] bg-white rounded-xl flex justify-center items-start pt-[40px]  mb-20  border-2'>
          <img src="/img/image8.jpg" alt="" className=' absolute h-[50%] w-[70%]  rounded-3xl '/>
          <p className='text-black absolute top-[65%] '>Versace Eros</p>
          <h2 className='absolute top-[75%] px-[10%] text-black text-[20px] rounded-xl'>599$</h2>
          <button className='absolute top-[85%] bg-black text-white px-[10px] rounded-xl '>Buy</button>
         
          </div>

          <div className='elem2 sticky top-[30%] h-[14%] w-[100%] bg-white rounded-xl flex justify-center items-start pt-[40px]  mb-20  border-2'>
          <img src="/img/image9.jpg" alt="" className=' absolute h-[50%] w-[70%]  rounded-3xl '/>
          <p className='text-black absolute top-[65%] '>T-Shirt</p>
          <h2 className='absolute top-[75%] px-[10%] text-black text-[20px] rounded-xl'>79$</h2>
          <button className='absolute top-[85%] bg-black text-white px-[10px] rounded-xl '>Buy</button>
         
          </div>

          <div className='elem2 sticky top-[30%] h-[14%] w-[100%] bg-white rounded-xl flex justify-center items-start pt-[40px]  mb-20  border-2'>
          <img src="/img/image10.jpg" alt="" className=' absolute h-[50%] w-[70%]  rounded-3xl '/>
          <p className='text-black absolute top-[65%] '>Doccia Shampoo</p>
          <h2 className='absolute top-[75%] px-[10%] text-black text-[20px] rounded-xl'>359$</h2>
          <button className='absolute top-[85%] bg-black text-white px-[10px] rounded-xl '>Buy</button>
         
          </div>

        </div>


      </div>
      <div className='flex justify-center items-center'>
<h5 className='top-[490%] text-2xl absolute'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, molestiae.</h5>
</div>
      

    </>





  )
}

export default App
