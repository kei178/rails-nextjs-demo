import axios from 'axios';
import cookies from 'nookies';
import Error from 'next/error';
import Example from '../components/Example';
import { withAuthorization } from '../utils/withAuthorization';

const Home = ({ examples, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  const renderExamples = () => {
    return examples.map((example, index) => {
      return (
        <li key={index}>
          <Example name={example.name} colour={example.colour} />
        </li>
      );
    });
  };

  return (
    <div>
      <ul className="examples-list">{renderExamples()}</ul>
      <style jsx>{`
        .examples-list {
          list-style-type: none;
          padding-left: 0;
        }
      `}</style>
    </div>
  );
};

Home.getInitialProps = async (context) => {
  try {
    const { token } = cookies.get(context);
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
    // XXX backend url differs depending on calls from client or server sides
    const base_url = context.req
      ? process.env.NEXT_PUBLIC_BACKEND_URL
      : process.env.NEXT_PUBLIC_API_URL;

    const response = await axios.get(`${base_url}/examples`, {
      params: {},
      headers: headers,
    });

    return {
      examples: response.data,
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
    };
  }
};

export default withAuthorization(Home);
