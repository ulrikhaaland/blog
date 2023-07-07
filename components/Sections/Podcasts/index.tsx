import { useState } from 'react';
import {
  Podcast,
  PodcastEpisode,
  PodcastEpisodeList,
  podcastList,
} from '../../../data/knowledge';
import Image from 'next/image';

const pods = podcastList;
const episodes = PodcastEpisodeList;

enum PodType {
  CHANNEL = 'CHANNEL',
  EPISODE = 'EPISODE',
}

export default function SectionPodcasts({}) {
  const [podcastType, setPodcastType] = useState(PodType.CHANNEL);

  const [pod, setPod] = useState<Podcast[] | PodcastEpisode[]>(pods);

  return (
    <div className={'bg-white lg:pt-12 pb-px128 pt-8'}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {'Podcasts'}
          </h2>
          {podcastType === PodType.EPISODE && (
            <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
              Så bra at jeg kan høre på nytt
            </p>
          )}

          <div className='mt-4'>
            <button
              onClick={() => {
                setPodcastType(PodType.CHANNEL);
                setPod(pods);
              }}
              className={`px-3 py-1 mr-2 rounded-full ${
                podcastType === PodType.CHANNEL
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              Kanaler
            </button>
            <button
              onClick={() => {
                setPodcastType(PodType.EPISODE);
                setPod(episodes);
              }}
              className={`px-3 py-1 rounded-full ${
                podcastType === PodType.EPISODE
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              Episoder
            </button>
          </div>
        </div>

        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {pod.map((pod) => (
            <article
              key={pod.title}
              className='flex max-w-xl flex-col items-start justify-between'
            >
              <div className='relative w-full h-72 rounded-lg overflow-hidden flex justify-center items-center'>
                <a
                  href={pod.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    src={pod.image}
                    alt={pod.title}
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
      </div>
    </div>
  );
}
