import partyPhoto from "../../assets/img/party.jpg";
import partyPhoto002 from "../../assets/img/party002.jpg";
import cafe from "../../assets/img/cafe001.jpg";
import cafe002 from "../../assets/img/cafe002.jpg";

const Photos = () => {
  return (
    <div className="columns is-multiline">
      <div className="column is-4 ">
        <div className="card photos-image-card">
          <div className="card-image">
            <figure className="image ">
              <img src={partyPhoto} alt="Placeholder" />
            </figure>
          </div>
        </div>
      </div>
      <div className="column is-4 ">
        <div className="card photos-image-card">
          <div className="card-image">
            <figure className="image ">
              <img src={partyPhoto002} alt="Placeholder" />
            </figure>
          </div>
        </div>
      </div>
      <div className="column is-4 ">
        <div className="card photos-image-card">
          <div className="card-image">
            <figure className="image ">
              <img src={cafe} alt="Placeholder" />
            </figure>
          </div>
        </div>
      </div>
      <div className="column is-4 ">
        <div className="card photos-image-card">
          <div className="card-image">
            <figure className="image ">
              <img src={cafe002} alt="Placeholder" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
