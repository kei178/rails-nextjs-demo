const Example = ({ name = '', colour = 'grey' }) => {
  return (
    <div className="example">
      <p>{name}</p>
      <style jsx>{`
        .example {
          background-color: ${colour};
          color: #fff;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default Example;
