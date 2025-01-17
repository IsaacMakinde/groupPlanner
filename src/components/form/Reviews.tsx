const Reviews = () => {
  return (
    <>
      <h1 className="title is-3 has-text-black">Reviews {"(coming soon) "}</h1>
      <article className="media has-text-black mt-4 mb-8 mx-3 c">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              className="is-rounded"
              src="https://i.pinimg.com/236x/84/4e/33/844e33f813d6939c4beb64c113f8e8b4.jpg"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong className="has-text-black">Barbara Middleton</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              porta eros lacus, nec ultricies elit blandit non. Suspendisse
              pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus
              turpis.
              <br />
              <small>
                <a>Like</a> · <a>Reply</a> · 3 hrs
              </small>
            </p>
          </div>

          <article className="media">
            <figure className="media-left">
              <p className="image is-48x48">
                <img
                  className="is-rounded"
                  src="https://i.pinimg.com/236x/84/4e/33/844e33f813d6939c4beb64c113f8e8b4.jpg"
                />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong className="has-text-black">Sean Brown</strong>
                  <br />
                  Donec sollicitudin urna eget eros malesuada sagittis.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam blandit nisl a
                  nulla sagittis, a lobortis leo feugiat.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </div>

              <article className="media">
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
                lorem cursus ullamcorper sit amet nec massa.
              </article>

              <article className="media">
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
                Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
                tincidunt iaculis diam non, porta aliquet tortor.
              </article>
            </div>
          </article>

          <article className="media">
            <figure className="media-left">
              <p className="image is-48x48">
                <img
                  className="is-rounded"
                  src="https://i.pinimg.com/236x/84/4e/33/844e33f813d6939c4beb64c113f8e8b4.jpg"
                />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong className="has-text-black">Kayli Eunice </strong>
                  <br />
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis
                  vel. Maecenas varius felis sit amet magna vestibulum euismod
                  malesuada cursus libero. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia Curae;
                  Phasellus lacinia non nisl id feugiat.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
      <article className="media mx-3">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              className="is-rounded"
              src="https://i.pinimg.com/236x/84/4e/33/844e33f813d6939c4beb64c113f8e8b4.jpg"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea is-primary"
                placeholder="Add a comment..."
              ></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-link">Post comment</button>
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Reviews;
