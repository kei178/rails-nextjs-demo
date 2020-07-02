import axios from 'axios';
import Error from 'next/error';
import Example from '../components/Example';

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

Home.getInitialProps = async (_context) => {
  try {
    const response = await axios.get('http://backend:8080/api/examples');

    return {
      examples: response.data,
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
    };
  }
};

export default Home;
