function Profile() {
  return (
    <div className="full-profile">
      <img
        src={require("../images/Carol-headshot.JPG")}
        alt="Carol's Headshot"
      />
      <div className="profile-content">
        <h2>Carol Barbash</h2>
        <p>
          Carol Barbash is an attorney with over 35 years of experience. After
          spending the majority of her career in the public sector, she has now
          moved to the private sector. Her goal is to assist people in
          navigating the complex world of recieving Medicaid and othe public
          benefits when they need them most.
        </p>
      </div>
    </div>
  );
}

export default Profile;
