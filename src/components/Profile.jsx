import profileImg from '../assets/profile.jpg';

export default function Profile({ name, title, bio }) {
  return (
    <div className="profile">
      <div className="container">
        <img src={profileImg} alt={name} className="profile-img" />
        <h2 className="profile-name">{name}</h2>
        <h3 className="profile-title">{title}</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
}