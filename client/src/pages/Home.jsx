import MainSlider from "../components/mainSlider";
import TipSlider from "../components/tipsSlider";

import Articles from "../components/Articles";
import Books from "../components/Books";
import Newsletter from "../components/Newsletter";

// import ChatBot from "../components/ChatBot";

export const Home = () => {
  return (
    <div className="home-page">
      <MainSlider />
      <TipSlider />
      {/* <GitaShlokas /> */}
      <Articles />
      <Books />
      <Newsletter />
      {/* <ChatBot /> */}
      {/* <WellbyChatbot /> */}
    </div>
  );
};
