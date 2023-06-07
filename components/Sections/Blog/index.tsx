import { blogpostList } from '../../../data/blog';
import image from '../../../assets/posts/future.png';
import { useNavigate } from 'react-router-dom';
import Image from 'next/image';
import { useRouter } from 'next/router';

const posts = blogpostList;

interface Props {
  homePage: boolean;
}

export default function SectionBlog({ homePage }: Props) {
  const router = useRouter();

  const goToBlogpost = (path: string) => {
    router.push(`${path}`);
  };

  return (
    <div
      className={'bg-white'}
      style={{
        paddingTop: homePage ? 64 : 128,
        paddingBottom: 128,
      }}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {homePage ? 'Fra bloggen' : 'Blogg'}
          </h2>
        </div>

        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {posts.map((post) => (
            <article
              key={post.title}
              className='flex max-w-xl flex-col items-start justify-between'
            >
              <div className='relative w-full h-64 rounded-lg overflow-hidden'>
                <span
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => goToBlogpost(post.href)}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    className='w-full h-full object-cover object-center transition duration-500 ease-in-out transform hover:scale-110'
                  />
                </span>
              </div>
              <div
                style={{
                  paddingTop: 8,
                }}
                className='flex items-center gap-x-4 text-xs'
              >
                <time dateTime={post.date} className='text-gray-500'>
                  {post.date}
                </time>
                <span
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => goToBlogpost(post.href)}
                  className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                >
                  {post.category}
                </span>
              </div>

              <div className='group relative'>
                <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                  <span
                    style={{
                      cursor: 'pointer',
                    }}
                    onClick={() => goToBlogpost(post.href)}
                  >
                    <span className='absolute inset-0' />
                    {post.title}
                  </span>
                </h3>
                <p
                  style={{
                    whiteSpace: 'pre-wrap',
                  }}
                  className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'
                >
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
