import { staticRequest } from "tinacms";
import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/react";

export default function HomePage(props: any) {
  // Use Tina to make the page editable
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data?.page;

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ color: '#333', borderBottom: '2px solid #007acc' }}>
          {page?.title || 'Welcome to My Site'}
        </h1>
      </header>

      <main>
        {page?.body && (
          <div dangerouslySetInnerHTML={{ __html: page.body }} />
        )}
        
        <section style={{ marginTop: '3rem' }}>
          <h2>About This Site</h2>
          <p>
            This site is built with Next.js and powered by Tina CMS. 
            You can edit the content by going to <code>/admin</code> when running locally.
          </p>
        </section>
      </main>

      <footer style={{ 
        marginTop: '3rem', 
        padding: '1rem 0', 
        borderTop: '1px solid #eee',
        color: '#666',
        fontSize: '0.9rem'
      }}>
        <p>Built with Tina CMS and Next.js • Hosted on GitHub Pages</p>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const query = `
    query {
      page(relativePath: "home.md") {
        title
        body
      }
    }
  `;

  try {
    const res = await staticRequest({
      query,
      variables: {},
    });
    
    return {
      props: {
        data: res,
        query,
        variables: {},
      },
    };
  } catch (error) {
    return {
      props: {
        data: { page: null },
        query: "",
        variables: {},
      },
    };
  }
};