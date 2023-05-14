import Head from 'next/head'
import AllDrinks from '../components/mainPage/allDrinks'

export default function Home() {

  return (
    <>
      <Head>
        <title>Whiskey</title>
        <meta name="description" content="Expert reviews of decisive whiskeys" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-white'>
        <header className="sticky z-50 top-0 border-b border-gray-200 shadow-lg py-5 bg-[#0d1117]">
          <div className="relative left-[7%] sm:left-[5%] xl:left-[3%] text-3xl">{"DG \xa0 Whisk(e)y"}</div>
        </header>  
        <main className='h-full bg-gradient-to-b from-black to-orange-400 bg-auto justify-center flex overflow-y-auto relative'>
          <AllDrinks />
          <div className="pt-5"></div>
        </main>
      </div>
    </>
  )
}
