import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';
import ProfilePicture from '../ProfilePicture';

function ProfileInfo(props) {
  return (
    <div className='profile-info-wrapper'>
      <div className='profile-name'>{props.name}</div>
      <div className='profile-id'>{props.nim}</div>
      <div className='profile-study'>{props.jurusan} | {props.fakultas}</div>
    </div>
  )
}

function Like(){
  const [liked, setLike] = useState(false);

  const handleLike = () => {
    setLike(value => !value);
  }

  return (
    <button 
      disabled={liked}
      onClick={handleLike}
      className='button'
    >
      {liked ? 'Disukai' : 'Suka'}
    </button>
  )
}

function ProfileAction({ id }) {

  return (
    <div className='profile-cta'>
      <Link to={`/mahasiswa/${id}`} className='button'>
        Lihat Profil
      </Link>
      <Like />
    </div>
  )

}

function ProfileCard({ id, nama, photo, nim, jurusan, fakultas }) {
  return (
    <div className='wrapper'>
      <div className='card profile-wrapper'>
        <div style={{width: '100px'}}>
          <ProfilePicture imageUrl={photo} width={100} height={100} />
        </div>
        <ProfileInfo name={nama} nim={nim} jurusan={jurusan} fakultas={fakultas} />
        <ProfileAction id={id} />
      </div>
    </div>
  )
}

export default ProfileCard;