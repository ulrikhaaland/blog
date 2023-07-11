import { useState } from 'react';
import { Influencer, influencerList } from '../../../data/knowledge';
import Image from 'next/image';
import { shuffle } from '@/utils/utils.util';

const pallette = [
  'linear-gradient(90deg, #3c8990, #d6cac2)',
  'linear-gradient(90deg, #d6cac2, #b73026)',
  'linear-gradient(90deg, #b73026, #e5813c)',
  'linear-gradient(90deg, #e5813c, #ce7f6f)',
  'linear-gradient(90deg, #ce7f6f, #80bdb9)',
  'linear-gradient(90deg, #80bdb9, #f5a76f)',
  'linear-gradient(90deg, #f5a76f, #edebe9)',
  'linear-gradient(90deg, #edebe9, #1f3158)',
  'linear-gradient(90deg, #1f3158, #3c8990)',
  'linear-gradient(90deg, #3c8990, #d6cac2)',
];

export default function SectionInfluencers({}) {
  const [influencers, SetInfluencers] = useState<Influencer[]>(
    influencerList.slice(0, 3)
  );

  const showMore = () => {
    SetInfluencers(influencerList); // Show all
  };

  return (
    <div className={'bg-white pb-px128'}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {'People'}
          </h2>

          <p className='mt-3 text-xl text-gray-500 sm:mt-4'></p>
        </div>

        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {shuffle(influencers).map((influencer) => (
            <article
              key={influencer.title}
              className='flex max-w-xl flex-col items-start'
            >
              <div
                className={
                  'h-56 relative w-full rounded-lg overflow-hidden flex justify-center items-center'
                }
                style={{
                  backgroundColor: 'linear-gradient(90deg, #3c8990, #d6cac2)',
                  width: '100%',
                }}
              >
                <a
                  href={influencer.tw}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    id={influencer.title}
                    src={influencer.image}
                    alt={influencer.title}
                    className={
                      'w-32 h-32 object-cover object-center rounded-full transition duration-500 ease-in-out transform hover:scale-110'
                    }
                  />
                </a>
              </div>

              <div
                style={{
                  paddingTop: 8,
                }}
                className='flex items-center gap-x-4 text-xs w-full'
              >
                {influencer.date ? (
                  <span
                    className='text-gray-500'
                    style={{
                      right: 0,
                    }}
                  >
                    {influencer.date.substring(0, 4)}
                  </span>
                ) : (
                  <></>
                )}
                <span className='text-gray-500'>{influencer.author}</span>
                <span
                  style={{
                    cursor: 'pointer',
                  }}
                  className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                >
                  {influencer.category}
                </span>
              </div>

              <div className='group relative'>
                <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                  <a
                    href={influencer.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <span className='absolute inset-0' />
                    {influencer.name}
                  </a>
                </h3>
                <p
                  style={{
                    whiteSpace: 'pre-wrap',
                  }}
                  className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'
                >
                  {influencer.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        {influencers.length < influencerList.length && (
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
