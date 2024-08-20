import React from 'react';

const profile = {
  name: 'Your Name',
  profession: 'Your Profession',
  backgroundColor: '#333',
  textColor: '#fff',
  padding: '20px',
  fontSize: '48px',
  fontWeight: 'bold',
  marginBottom: '0',
  subFontSize: '24px'
};



function Header() {
  return (
    <header style={{ textAlign: 'center',
      backgroundColor: profile.backgroundColor,
      color: profile.textColor,
      padding: profile.padding,
     }}>
      <h1 style={{
        fontSize: profile.fontSize,
        fontWeight: profile.fontWeight,
        marginBottom: profile.marginBottom
      }}>{profile.name}</h1>
      <p style={{
        fontSize: profile.subFontSize,
        marginBottom: profile.marginBottom
      }}>{profile.profession}</p>
    </header>
  );
}

export default Header;
