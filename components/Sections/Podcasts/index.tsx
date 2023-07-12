import { useState } from 'react';
import {
  Podcast,
  PodcastEpisode,
  PodcastEpisodeList,
  podcastList,
} from '../../../data/knowledge';
import Image from 'next/image';
import { shuffle } from '@/utils/utils.util';

enum PodType {
  CHANNEL = 'CHANNEL',
  EPISODE = 'EPISODE',
}

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

export default function SectionPodcasts({}) {
  const [podcastType, setPodcastType] = useState(PodType.CHANNEL);

  const [pods, setPod] = useState<Podcast[] | PodcastEpisode[]>(
    podcastList.slice(0, 3)
  );

  const showMore = () => {
    if (podcastType === PodType.CHANNEL) setPod(podcastList); // Show all pods
    else setPod(PodcastEpisodeList);
  };

  return (
    <div
      className={'bg-white'}
      style={{
        paddingBottom: 128,
      }}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {'Podcasts'}
          </h2>

          <div className='mt-4'>
            <button
              onClick={() => {
                setPodcastType(PodType.CHANNEL);
                setPod(podcastList);
              }}
              className={`px-3 py-1 mr-2 rounded-full ${
                podcastType === PodType.CHANNEL
                  ? ''
                  : 'bg-gray-200 text-gray-500'
              }`}
              style={{
                backgroundColor:
                  podcastType === PodType.CHANNEL ? '#57b8ca' : '',
                color: podcastType === PodType.CHANNEL ? '#fff' : '',
              }}
            >
              Kanaler
            </button>
            <button
              onClick={() => {
                setPodcastType(PodType.EPISODE);
                setPod(PodcastEpisodeList);
              }}
              className={`px-3 py-1 rounded-full ${
                podcastType === PodType.EPISODE
                  ? ''
                  : 'bg-gray-200 text-gray-500'
              }`}
              style={{
                backgroundColor:
                  podcastType === PodType.EPISODE ? '#57b8ca' : '',
                color: podcastType === PodType.EPISODE ? '#fff' : '',
              }}
            >
              Episoder
            </button>
          </div>
          <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
            {podcastType === PodType.EPISODE
              ? 'Så bra at jeg kan høre på nytt'
              : ' '}
          </p>
        </div>

        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {pods.map((pod) => (
            <article
              key={pod.title}
              className='flex max-w-xl flex-col items-start'
            >
              <div
                className={
                  podcastType === PodType.EPISODE
                    ? 'h-56'
                    : 'h-56 ' +
                      'relative w-full rounded-lg overflow-hidden flex justify-center items-center'
                }
                style={{
                  backgroundColor: 'linear-gradient(90deg, #3c8990, #d6cac2)',
                  width: '100%',
                }}
              >
                <a
                  href={pod.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    id={pod.title}
                    src={pod.image}
                    alt={pod.title}
                    className={
                      podcastType === PodType.EPISODE
                        ? 'w-full h-full'
                        : 'w-46 h-46' +
                          'object-cover object-center rounded-full transition duration-500 ease-in-out transform hover:scale-110'
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
                {pod.date ? (
                  <span
                    className='text-gray-500'
                    style={{
                      right: 0,
                    }}
                  >
                    {pod.date.substring(0, 4)}
                  </span>
                ) : (
                  <></>
                )}
                <span className='text-gray-500'>{pod.author}</span>
                <span
                  style={{
                    cursor: 'pointer',
                  }}
                  className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                >
                  {pod.category}
                </span>
              </div>

              <div className='group relative'>
                <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                  <a
                    href={pod.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    <span className='absolute inset-0' />
                    {pod.title}
                  </a>
                </h3>
                <p
                  style={{
                    whiteSpace: 'pre-wrap',
                  }}
                  className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'
                >
                  {pod.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        {pods.length < podcastList.length && (
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
