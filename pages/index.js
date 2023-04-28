import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts'

/*
  Static Generation is the pre-rendering method that generates the HTML at build time. 
  The pre-rendered HTML is then reused on each request.
  Using Static Generation (getStaticProps())
*/
export async function getStaticProps(){
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    }
  }
}
/* 
  To use Server-side Rendering, you need to export getServerSideProps instead of getStaticProps from your page.
  Because getServerSideProps is called at request time, its parameter (context) contains request specific parameters.
*/
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text 
          commonly used to demonstrate the visual form of a document or a typeface 
          without relying on meaningful content. 
          Lorem ipsum may be used as a placeholder before final copy is available.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>

      </section>
    </Layout>
  );
}
