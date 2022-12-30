function ProfilePicture({ imageUrl, width, height }) {
  return (
    <div style={{
      backgroundColor: 'white',
      display: 'block',
      margin:'0 auto',
      maxWidth: '100px',
      width: '100%',
    }}>
      <img
        alt="profile"
        width={width}
        height={height}
        src={imageUrl}
      />
    </div>
  )
}

export default ProfilePicture;
