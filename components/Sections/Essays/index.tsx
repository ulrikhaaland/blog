import { bookList, essayList } from '../../../data/knowledge';
import image from '../../../assets/posts/future.png';
import { useNavigate } from 'react-router-dom';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { shuffle } from '@/utils/utils.util';
import { useState } from 'react';

export default function SectionEssays({}) {
  const [essays, setEssays] = useState(essayList.slice(0, 3));

  const showMore = () => {
    setEssays(essayList); // Show all books
  };
  return (
    <div
      className={'bg-white '}
      style={{
        paddingTop: 128,
        paddingBottom: 128,
      }}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {'Essays'}
          </h2>
          {/* <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
            Det beste du kan gjøre for deg selv er å lære deg å lese på Engelsk.
            Slik gjør du det: Kjøp boken digitalt på Amazon. Når du ikke forstår
            noe, stopp, slå det opp, forstå, og fortsett.
          </p> */}
        </div>

        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {essays.map((essay) => (
            <article
              key={essay.title}
              className='flex max-w-xl flex-col items-start'
            >
              <div className='relative w-full h-56 rounded-lg overflow-hidden flex justify-center items-center'>
                <a
                  href={essay.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    src={essay.image}
                    alt={essay.title}
                    className='w-full h-full object-cover object-center transition duration-500 ease-in-out transform hover:scale-110'
                  />
                </a>
              </div>

              <div
                style={{
                  paddingTop: 8,
                }}
                className='flex items-center gap-x-4 text-xs'
              >
                <time dateTime={essay.date} className='text-gray-500'>
                  {essay.date.substring(0, 4)}
                </time>
                <span
                  style={{
                    cursor: 'pointer',
                  }}
                  className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                >
                  {essay.category}
                </span>
              </div>

              <div className='group relative'>
                <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                  <a
                    href={essay.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <span className='absolute inset-0' />
                    {essay.title}
                  </a>
                </h3>
                <p
                  style={{
                    whiteSpace: 'pre-wrap',
                  }}
                  className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'
                >
                  {essay.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        {essays.length < essayList.length && (
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
