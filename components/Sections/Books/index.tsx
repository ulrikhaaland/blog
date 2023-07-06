import { bookList } from '../../../data/knowledge';
import image from '../../../assets/posts/future.png';
import { useNavigate } from 'react-router-dom';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const books = bookList;

interface Props {
  homePage?: boolean;
}

export default function SectionBooks({ homePage }: Props) {
  const [shownBooks, setShownBooks] = useState(books.slice(0, 3));

  const showMore = () => {
    setShownBooks(books); // Show all books
  };

  return (
    <div className={'bg-white lg:pt-12 pb-px128 pt-8'}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {homePage ? 'Fra bloggen' : 'Bøker'}
          </h2>
          <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
            Det beste du kan gjøre for deg selv er å lære deg å lese på Engelsk.
            Slik gjør du det: Kjøp boken digitalt på Amazon. Når du ikke forstår
            noe, stopp, slå det opp, forstå, og fortsett.
          </p>
        </div>

        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {shownBooks.map((book) => (
            <article
              key={book.title}
              className='flex max-w-xl flex-col items-start justify-between'
            >
              <div className='relative w-full h-72 rounded-lg overflow-hidden flex justify-center items-center'>
                <a
                  href={book.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    src={book.image}
                    alt={book.title}
                    className='w-44 h-72 object-cover object-center transition duration-500 ease-in-out transform hover:scale-110'
                  />
                </a>
              </div>

              <div
                style={{
                  paddingTop: 8,
                }}
                className='flex items-center gap-x-4 text-xs'
              >
                <time dateTime={book.date} className='text-gray-500'>
                  {book.date}
                </time>
                <span
                  style={{
                    cursor: 'pointer',
                  }}
                  className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                >
                  {book.category}
                </span>
              </div>

              <div className='group relative'>
                <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                  <a
                    href={book.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <span className='absolute inset-0' />
                    {book.title}
                  </a>
                </h3>
                <p
                  style={{
                    whiteSpace: 'pre-wrap',
                  }}
                  className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'
                >
                  {book.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        {shownBooks.length < books.length && (
          <button
            onClick={showMore}
            style={{
              background: 'linear-gradient(90deg, #afd4c5, #6db2a8)',
              color: 'white',
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '30px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '16px',
            }}
          >
            Vis mer
          </button>
        )}
      </div>
    </div>
  );
}
