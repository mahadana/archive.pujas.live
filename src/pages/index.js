import { gql, useQuery } from "@apollo/client";
import Banner from "../components/Banner";
import LiveStream from "../components/LiveStream";

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
      <Banner />
      <ul>
        {data.livestreams.map((livestream) => (
          <li key={livestream.id}>
            <LiveStream {...livestream} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
