const GuestList = () => {
  return (
    <div className="container subtitle has-text-primary mt-4 card">
      <div className="card ">
        <header className="card-header">
          <p className="card-header-title has-text-info">Guest List ({10})</p>
          <button className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>

        <div className="card-content guest-list-card ">
          <div className="content">
            <div className="fixed-grid has-4-cols  has-2-cols-mobile">
              <div className="grid guest-list">
                <div className="cell">
                  <div className="card guest-card check">
                    <button className="delete is-medium"></button>
                    <div className="card-image">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://i.pinimg.com/736x/ad/9a/ac/ad9aac4926c0b9e2e5d6d7c7c964284a.jpg"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p className="title is-4 has-text-info">Misha</p>
                        <span className="tag is-medium is-info ">
                          Interested
                        </span>
                      </div>
                    </div>
                    <div className="card-footer hover">
                      <button className="card-footer-item has-text-primary">
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
                <div className="cell">
                  <div className="card guest-card check">
                    <button className="delete is-medium"></button>
                    <div className="card-image">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1c27516-f789-4cc1-bbbf-2be4b2548268/deb7h03-823f2900-c890-469e-a6bf-91907004e90a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QxYzI3NTE2LWY3ODktNGNjMS1iYmJmLTJiZTRiMjU0ODI2OFwvZGViN2gwMy04MjNmMjkwMC1jODkwLTQ2OWUtYTZiZi05MTkwNzAwNGU5MGEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yZsVcUbEeSbO39oTlwYPUMo6y5Bjvq_2ioe7_PgRaE0"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p className="title is-4 has-text-info">Angel</p>
                        <span className="tag is-medium is-warning ">
                          Pending
                        </span>
                      </div>
                    </div>
                    <footer className="card-footer">
                      <button className="card-footer-item has-text-primary">
                        Cancel
                      </button>
                    </footer>
                  </div>
                </div>
                <div className="cell">
                  <div className="card guest-card check">
                    <button className="delete is-medium"></button>
                    <div className="card-image">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://i1.sndcdn.com/artworks-Nlu9cQsD83Lyckhn-uVOuyQ-t1080x1080.jpg"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p className="title is-4 has-text-info">Destiny</p>
                        <span className="tag is-medium is-success ">Going</span>
                      </div>
                    </div>
                    <div className="card-footer"></div>
                  </div>
                </div>
                <div className="cell">
                  <div className="card guest-card check">
                    <button className="delete is-medium"></button>
                    <div className="card-image">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://viberatecdn.blob.core.windows.net/entity/artist/v-sensei-3WZIM"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p className="title is-4 has-text-info">Victor</p>
                        <span className="tag is-medium is-success ">Going</span>
                      </div>
                    </div>

                    <div className="card-footer"></div>
                  </div>
                </div>

                <div className="cell">
                  <div className="card guest-card check">
                    <button className="delete is-medium"></button>
                    <div className="card-image">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://pics.craiyon.com/2023-09-22/a4a049a2dd2a42038a71f91ae478001a.webp"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p className="title is-4 has-text-info">Shubham</p>
                        <span className="tag is-medium is-info ">
                          Interested
                        </span>
                      </div>
                    </div>
                    <div className="card-footer hover">
                      <button className="card-footer-item has-text-primary">
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
                <div className="cell">
                  <div className="card guest-card check">
                    <button className="delete is-medium"></button>
                    <div className="card-image">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://avatarfiles.alphacoders.com/264/264762.jpg"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p className="title is-4 has-text-info">Raj</p>
                        <span className="tag is-medium is-info ">
                          Interested
                        </span>
                      </div>
                    </div>
                    <div className="card-footer hover">
                      <button className="card-footer-item has-text-primary">
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
                <div className="cell">
                  <div className="card guest-card check">
                    <button className="delete is-medium"></button>
                    <div className="card-image">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://cdn.pixabay.com/photo/2023/06/11/23/27/butterfly-8057180_1280.jpg"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p className="title is-4 has-text-info">Jane</p>
                        <span className="tag is-medium is-info ">
                          Interested
                        </span>
                      </div>
                    </div>
                    <div className="card-footer hover">
                      <button className="card-footer-item has-text-primary">
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
                <div className="cell">
                  <div className="card guest-card check">
                    <button className="delete is-medium"></button>
                    <div className="card-image">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://www.tingatingaart.com/cdn/shop/articles/past_fe59d021-c59d-4796-a2ff-3ed3b986f62a_2048x.jpg?v=1701076291"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p className="title is-4 has-text-info">Skye</p>
                        <span className="tag is-medium is-info ">
                          Interested
                        </span>
                      </div>
                    </div>
                    <div className="card-footer hover">
                      <button className="card-footer-item has-text-primary">
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
                <div className="cell">
                  <div className="card guest-card check">
                    <button className="delete is-medium"></button>
                    <div className="card-image">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://images.nightcafe.studio/jobs/8A2sD1s2YcdlnFmuRMfI/8A2sD1s2YcdlnFmuRMfI--1--kvhud_2x.jpg?tr=w-1600,c-at_max"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p className="title is-4 has-text-info">Hope</p>
                        <span className="tag is-medium is-info ">
                          Interested
                        </span>
                      </div>
                    </div>
                    <div className="card-footer hover">
                      <button className="card-footer-item has-text-primary">
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
                <div className="cell">
                  <div className="card guest-card check">
                    <button className="delete is-medium"></button>
                    <div className="card-image">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded"
                          src="https://cdn.producerloops.com//images/P/EDM%20Rave.jpg"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p className="title is-4 has-text-info">Ciara</p>
                        <span className="tag is-medium is-info ">
                          Interested
                        </span>
                      </div>
                    </div>
                    <div className="card-footer hover">
                      <button className="card-footer-item has-text-primary">
                        Approve
                      </button>
                    </div>
                  </div>
                </div>

                <div className="cell">
                  <div className="card guest-card check">
                    <div></div>
                    <div className="card-image">
                      <button className="button is-rounded is-large is-primary is-rounded is-outlined is-dark mx-2">
                        Add
                      </button>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p className="title is-4 has-text-info">
                          Invite Friend
                        </p>
                      </div>
                    </div>

                    <div className="card-footer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="card-footer">
          <a href="#" className="card-footer-item">
            Save
          </a>
          <a href="#" className="card-footer-item">
            Edit
          </a>
        </footer>
      </div>
    </div>
  );
};

export default GuestList;
