import React from 'react'
import token from './Images/Token.png'
import bronze from './Images/Bronze.png'
export default function RewardsHome({ username, tickets }) {

    const mobileStyles = {
    backgroundColor: '#f9f9f9',
    // textAlign: 'center',
    padding:'20px'
  };

  const welcomeStyles = {
    fontSize: '18px',
    color: '#1D1B20',
    marginBottom: '20px',
    lineHeight:'24px',
    fontWeight:'400'
  };

  const userStyles = {
    fontSize:'24px',
    fontWeight: '600',
    color:'#1D1B20',
    lineHeight:'32px'
  }

  const boxStyles = {
    border: '4px solid var(--Schemes-Primary, #65558F)',  // Overall border for the box (could be transparent or another color)
    padding: '15px 20px 15px 10px',
    marginBottom: '20px',
    borderRadius: '15px',
  };
  
  const  earnboxStyles ={

  };

  const iconStyles = {
    width:'60px',
    height:'55px',
    margin:'5px'
  };

  const progressBarContainer = {
    width: '100%',
    height: '10px',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    overflow: 'hidden',
  };

  const progressBar = {
    height: '100%',
    width: '70%', // Example progress (70%)
    backgroundColor: '#4caf50',
    transition: 'width 0.5s',
  };

  const desktopMessageStyles = {
    textAlign: 'center',
    padding: '50px',
    color: '#ff5722',
    fontSize: '20px',
    backgroundColor: '#f0f0f0',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: '#333',
  };

  // Detect screen size dynamically
  const isMobile = window.innerWidth < 768;

  return (
    <div>
           {isMobile ? (
        <div style={mobileStyles}>
          {/* Welcome Message */}
          <h2 style={welcomeStyles}>Hello,</h2>
          <h2 style={userStyles}>{username}</h2>

          {/* Ticket Box */}
          <div style={boxStyles}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              
              <div>
                <img src={token} alt='no-token' style={iconStyles}/>
                <img src={bronze} alt='no-bronze' style={iconStyles}/>
              </div>
              <span style={{ fontSize: '24px',color:'#65558F',fontWeight:'600' }}>20 <span style={{color:'#1D1B20',fontSize:'12px',fontWeight:'600'}}>Tks</span><p style={{fontSize:'12px',lineHeight:'18px',fontWeight:'600',color:'#1D1B20'}}>Equals $1</p>
              </span>
            </div>
            
          </div>

          {/* Earn and Redeem Boxes */}
          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
            <div style={earnboxStyles}>
              <div style={iconStyles}>
                <i className="bi bi-cash"></i> {/* Bootstrap Cash Icon */}
              </div>
              <h4>Earn</h4>
              <p>Earn rewards by participating.</p>
            </div>
            <div style={boxStyles}>
              <div style={iconStyles}>
                <i className="bi bi-arrow-repeat"></i> {/* Bootstrap Redeem Icon */}
              </div>
              <h4>Redeem</h4>
              <p>Redeem your rewards here.</p>
            </div>
          </div>

          {/* Progress Box */}
          <div style={boxStyles}>
            <h4>Progress</h4>
            <div style={progressBarContainer}>
              <div style={progressBar}></div>
            </div>
            <p style={{ marginTop: '5px' }}>70% of your next reward!</p>
          </div>
        </div>
      ) : (
        // Desktop and Tablet Message
        <div style={desktopMessageStyles}>
          <p>This page is only viewable on mobile devices.</p>
          <p>Please switch to a mobile device to view your rewards.</p>
        </div>
      )}
    </div>
  )
}
