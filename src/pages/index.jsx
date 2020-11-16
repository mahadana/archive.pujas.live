import withApollo from "../lib/apollo";

import { gql, useQuery } from "@apollo/client";

const QUERY_LIVESTREAMS = gql`
  query {
    livestreams {
      id
      name
      imageUrl
      description
      websiteUrl
      streamUrl
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(QUERY_LIVESTREAMS, {});

  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <h1>Pujas.live</h1>
      <ul>
        {data.livestreams.map((livestream) => (
          <li key={livestream.id}>
            <h2>{livestream.name}</h2>
            {livestream.imageUrl && <img src={livestream.imageUrl} />}
            <p>{livestream.description}</p>
            {livestream.streamUrl && (
              <a href={livestream.streamUrl}>Stream</a>
            )}{" "}
            {livestream.websiteUrl && (
              <a href={livestream.websiteUrl}>Website</a>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default withApollo({ ssr: true })(Home);
