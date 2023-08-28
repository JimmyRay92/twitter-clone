import InfiniteTweetList from " /components/InfiniteTweetList";
import NewTweetForm from " /components/NewTweetForm";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white">
        <h1 className="mb-2 px-4 py-2 text-lg font-bold">Home</h1>
      </header>
      <NewTweetForm />
      <RecentTweets />
    </>
  );
};

function RecentTweets() {
  const tweets = [];

  return <InfiniteTweetList tweets={tweets} />;
}

export default Home;
