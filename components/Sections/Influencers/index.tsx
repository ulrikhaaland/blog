import { useState } from 'react';
import { Influencer, influencerList } from '../../../data/knowledge';
import Image from 'next/image';
import { shuffle } from '@/utils/utils.util';
import { Icon, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import WebIcon from '@mui/icons-material/Language';

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
            {'Personer'}
          </h2>

          <p className='mt-3 text-xl text-gray-500 sm:mt-4'>Twitter</p>
          <p className='text-xl text-gray-500 '>Platformen for ideer</p>
          <p className='text-xl text-gray-500 '>Hvis du ikke er der gå der</p>
        </div>

        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {influencers.map((influencer) => (
            <article
              key={influencer.name}
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
                  href={influencer.twitter ?? influencer.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    id={influencer.name}
                    src={influencer.image}
                    alt={influencer.name}
                    className={
                      'w-48 h-48 object-cover object-center rounded-full transition duration-500 ease-in-out transform hover:scale-110'
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
                <span
                  style={{
                    cursor: 'pointer',
                  }}
                  className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                >
                  {influencer.category}
                </span>
                <div>
                  {influencer.twitter && (
                    <a
                      href={influencer.twitter}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        cursor: 'pointer',
                      }}
                    >
                      <IconButton>
                        <TwitterIcon
                          sx={{
                            color: '#1DA1F2',
                          }}
                        />
                      </IconButton>
                    </a>
                  )}
                  {influencer.website && (
                    <a
                      href={influencer.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        cursor: 'pointer',
                      }}
                    >
                      <IconButton>
                        <WebIcon
                          sx={{
                            color: 'black',
                          }}
                        />
                      </IconButton>
                    </a>
                  )}
                </div>
              </div>

              <div className='group relative'>
                <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                  <a
                    href={influencer.twitter ?? influencer.website}
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
