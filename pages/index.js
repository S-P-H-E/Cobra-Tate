import Nav from '@/components/Nav'
import Quote from '@/components/Quote'
import Head from 'next/head'
import quotes from '@/public/quotes.json'
import { useState } from 'react';

import { AiOutlineSearch } from "react-icons/ai"

export default function Home() {
  const [quotesPerPage, setQuotesPerPage] = useState(3)
  const [searchValue, setSearchValue] = useState('');
  const filteredQuotes = quotes.filter(quote => (
    quote.quote.toLowerCase().includes(searchValue.toLowerCase())
    || quote.author.toLowerCase().includes(searchValue.toLowerCase())
  ));

  const lastQuote = quotesPerPage
  const firstQuote = lastQuote - quotesPerPage
  const currentQuotes = filteredQuotes.slice(firstQuote, lastQuote)

  const loadMoreQuotes = () => {
    setQuotesPerPage(quotesPerPage + 3)
  }

  return (
    <>
      <Head>
        <title>Cobra Tate</title>
        <meta name="description" content="A list of Andrew Tate Quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className='p-5 flex flex-col gap-4 justify-center md:justify-start items-center md:items-start'>
        <div className='flex justify-center items-center border border-[#58585A] rounded-full w-full max-w-[400px]'>
          <AiOutlineSearch className='text-[#58585A] m-2'/>
          <input
            className='bg-transparent w-full outline-none placeholder:text-[#58585A] caret-white text-white'
            placeholder='Search Quotes'
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
          />
        </div>
          <div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 grid-flow-row'>
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
