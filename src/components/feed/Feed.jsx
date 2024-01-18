import "./feed.scss";
import bannerImage from "../../images/mm.png";

const Feed = () => {
  return (
    <div className="feed" data-testid="feed">
      <div className="story" data-testid="story">
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};

export default Feed;
