import { useState } from 'react';
import {
  Podcast,
  PodcastEpisode,
  PodcastEpisodeList,
  podcastList,
} from '../../../data/knowledge';
import Image from 'next/image';
import { shuffle } from '@/utils/utils.util';

enum TrainingType {
  ZONE2 = 'Zone2',
  VO2MAX = 'VO2Max',
  STRENGTH = 'Strength',
}

export default function SectionTraining({}) {
  const [podcastType, setPodcastType] = useState(TrainingType.ZONE2);

  const [pods, setPod] = useState<Podcast[] | PodcastEpisode[]>(
    podcastList.slice(0, 3)
  );

  const showMore = () => {
    if (podcastType === TrainingType.ZONE2)
      setPod(podcastList); // Show all pods
    else setPod(PodcastEpisodeList);
  };

  return (
    <div
      className={'bg-white'}
      style={{
        paddingTop: 128,
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
                setPodcastType(TrainingType.ZONE2);
                setPod(podcastList);
              }}
              className={`px-3 py-1 mr-2 rounded-full ${
                podcastType === TrainingType.ZONE2
                  ? ''
                  : 'bg-gray-200 text-gray-500'
              }`}
              style={{
                backgroundColor:
                  podcastType === TrainingType.ZONE2 ? '#57b8ca' : '',
                color: podcastType === TrainingType.ZONE2 ? '#fff' : '',
              }}
            >
              Kanaler
            </button>
            <button
              onClick={() => {
                setPodcastType(TrainingType.ZONE2);
                setPod(PodcastEpisodeList);
              }}
              className={`px-3 py-1 rounded-full ${
                podcastType === TrainingType.ZONE2
                  ? ''
                  : 'bg-gray-200 text-gray-500'
              }`}
              style={{
                backgroundColor:
                  podcastType === TrainingType.ZONE2 ? '#57b8ca' : '',
                color: podcastType === TrainingType.ZONE2 ? '#fff' : '',
              }}
            >
              Episoder
            </button>
          </div>
          <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
            {podcastType === TrainingType.ZONE2
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
                  podcastType === TrainingType.ZONE2
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
                      podcastType === TrainingType.ZONE2
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
