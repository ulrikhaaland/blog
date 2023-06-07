import { Container, useMediaQuery } from '@mui/material';
import SectionBlog from '../Sections/Blog';
import { Blogpost } from '../../data/blog';
import { theme } from '../../theme';
import Image from 'next/image';

interface Props {
  post: Blogpost;
  content: JSX.Element;
}

export default function BlogPost({ post, content }: Props) {
  const isWeb = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <div
        className='blog-post-container'
        style={{
          padding: '80px 0px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          //   justifyContent: "center",
        }}
      >
        <div
          style={{
            marginBottom: '20px',
            width: isWeb ? '700px' : '350px',
            textAlign: 'center',
          }}
        >
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {post.title}
          </h1>
        </div>
        {/* <div
          style={{
            padding: "10px 0px 0px 0px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            width: 100,
          }}
        >
          <time
            style={{
              paddingRight: "10px",
            }}
            dateTime={post.date}
            className="text-gray-500"
          >
            {post.date}
          </time>
          <a className="text-gray-500">{post.readingTime} min</a>
        </div> */}
        <Image
          src={post.image}
          alt={post.title}
          style={{
            height: isWeb ? '700px' : '350px',
            width: isWeb ? 'auto' : '350px',
            margin: '20px 0px',
          }}
        />
        <div
          style={{
            color: 'rgb(21,21,26)',
            fontSize: '18px',
            display: 'block',
            lineHeight: '28.8px',
            marginBlockEnd: '0px',
            /// center text
            textAlign: 'left',
            margin: 'auto',
            width: isWeb ? '700px' : '350px',
            marginTop: '20px',
            letterSpacing: 'normal',
          }}
        >
          {content}
        </div>
      </div>
    </>
  );
}
