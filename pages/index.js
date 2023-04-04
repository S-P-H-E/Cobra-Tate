import Quote from '@/components/Quote'
import Head from 'next/head'
import quotes from '@/public/quotes.json'
import { useState, useEffect } from 'react';
import { AiOutlineSearch } from "react-icons/ai"
import { CgAddR } from "react-icons/cg"
import { AiOutlineSetting } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { BiChevronDown, BiHomeAlt2 } from "react-icons/bi"
import { BsTwitter } from "react-icons/bs"
import { FaTiktok, FaYoutube } from "react-icons/fa"
import Announcement from '@/components/Announcement';


export default function Home() {
  const [quotesPerPage, setQuotesPerPage] = useState(1)
  const [searchValue, setSearchValue] = useState('');
  const filteredQuotes = quotes.filter(quote => (
    quote.quote.toLowerCase().includes(searchValue.toLowerCase())
    || quote.author.toLowerCase().includes(searchValue.toLowerCase())
  ));

  const lastQuote = quotesPerPage
  const firstQuote = lastQuote - quotesPerPage
  const currentQuotes = filteredQuotes.slice(firstQuote, lastQuote)

  const loadMoreQuotes = () => {
    setQuotesPerPage(quotesPerPage + 2)
  }

  const [randomQuote, setRandomQuote] = useState(null);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setRandomQuote(randomQuote);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);  
  

  return (
    <>
      <Head>
        <title>S T O I C</title>
        <meta name="description" content="A list of constructive quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex justify-center items-center'>
        <div className='flex-col justify-between bg-[#101010] border border-[#1d1d1d] text-[#878787] ml-5 mt-5 rounded-2xl p-8 hidden'>
          <div className='flex flex-col gap-8'>
            <button className='hover:text-white'>
              <BiHomeAlt2 size={24}/>
            </button>
            <button className='hover:text-white'>
              <CgAddR size={24}/>
            </button>
          </div>
          
          <button className='hover:text-white'>
              <AiOutlineSetting size={24}/>
          </button>
        </div>

      <div className='mx-5 flex flex-col gap-4 justify-start items-center w-full md:max-w-[700px]'>
        {/* Navbar */}
        <div className="p-7 m-5 flex justify-between items-center text-white flex-col md:flex-row bg-[#101010] border border-[#1d1d1d] rounded-2xl w-full">
            <div className="flex flex-col gap-5 w-full">
              <div className='flex justify-between items-center'>
                <h1 className='text-2xl'>S T O I C</h1>
                <div className='flex gap-3'>
                  <button onClick={() => window.open("https://twitter.com/stoic_words")}>
                    <BsTwitter />
                  </button>
                </div>
              </div>
                <div className='flex justify-center items-center border border-[#58585A] rounded-full w-full'>
                  <AiOutlineSearch className='text-[#58585A] m-2'/>
                  <input
                    className='bg-transparent w-full outline-none placeholder:text-[#58585A] caret-white text-white'
                    placeholder='Search Quotes'
                    value={searchValue}
                    onChange={event => setSearchValue(event.target.value)}
                  />
                </div>
            </div>
        </div>

        <div className='h-full flex flex-col justify-center items-center w-full max-w-[400px] md:max-w-[700px]'>
          <div className='flex flex-col gap-4 justify-center items-center w-full'>
            <Announcement />
            {/* <div className="text-white font-medium p-5 flex flex-col justify-center items-center w-full max-w-[400px] md:max-w-[700px] md:h-[250px] md:text-xl transition-all hover:scale-105 cursor-pointer">
              <p className="whitespace-pre-wrap text-center">{randomQuote ? `"${randomQuote.quote}"` : ''}</p>
              <h1 className="mt-3 text-[#838383] bg-[#181818] px-4 py-2 rounded-full">{randomQuote ? randomQuote.author : ''}</h1>
            </div> */}

            {/* <h1 className='text-xl text-[#909090] font-medium w-full px-3'>More</h1> */}
              {currentQuotes.length > 0 ? (
                currentQuotes.map((quote, index) => (
                    <Quote key={index} Quote={quote.quote} Author={quote.author} />
                ))
              ) : (
                <h1 className='text-white mt-4'>No results found</h1>
              )}
          </div>

            {filteredQuotes.length > quotesPerPage ? (
              <button className="bg-white text-gray-800 py-2 px-4 rounded-lg m-5 transition-all hover:scale-95" onClick={loadMoreQuotes}>Load more quotes</button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}