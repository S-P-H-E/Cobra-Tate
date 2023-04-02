import Quote from '@/components/Quote'
import Head from 'next/head'
import quotes from '@/public/quotes.json'
import { useState } from 'react';
import Link from 'next/link'
import { MdEmail } from "react-icons/md"
import { BsTwitter } from "react-icons/bs"

import { AiOutlineSearch } from "react-icons/ai"
import { FiHome } from "react-icons/fi"

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

  return (
    <>
      <Head>
        <title>Cobra Tate</title>
        <meta name="description" content="A list of Andrew Tate Quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='m-5 flex flex-col gap-4 justify-center items-center'>
        {/* Navbar */}
        <div className="p-7 m-5 flex justify-between items-center text-white flex-col md:flex-row bg-[#161616] rounded-2xl w-full md:max-w-[700px]">
            <div className="flex flex-col gap-5 w-full">
              <div className='flex justify-between items-center'>
                <h1 className='text-2xl'>Quotify</h1>
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

          <div className='flex flex-col gap-4'>
            {currentQuotes.length > 0 ? (
              currentQuotes.map((quote, index) => (
                  <Quote key={index} Quote={quote.quote} Author={quote.author} />
              ))
            ) : (
              <h1 className='text-white mt-4'>No results found</h1>
            )}
          </div>

          {filteredQuotes.length > quotesPerPage ? (
            <button className="bg-white text-gray-800 py-2 px-4 rounded-lg mt-5" onClick={loadMoreQuotes}>Load more quotes</button>
          ) : null}
      </div>
    </>
  )
}