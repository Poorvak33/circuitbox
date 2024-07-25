// src/pages/DTCDiscussionBoard.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  width: 50%;
  margin-right: 1rem;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.textPrimary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ThreadContainer = styled.div`
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  padding: 2rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 2rem;
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

function DTCDiscussionBoard() {
  const [forums, setForums] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchForums = async () => {
      const forumsCollection = collection(db, 'forums');
      const forumsSnapshot = await getDocs(forumsCollection);
      setForums(forumsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchForums();
  }, []);

  return (
    <div>
      <Header />
      <SearchBarContainer>
        <SearchInput 
          type="text" 
          placeholder="Search DTC" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <Button>Search</Button>
      </SearchBarContainer>
      <Container>
        <ThreadContainer>
          <h2>BEV vehicles</h2>
          <p>This segment will explain high overview of the working of the Battery electric vehicles.</p>
          <p>Note: This segment is for educational purpose only. All the High Voltage checks are required to be performed by trained professionals only and all OEM recommended safety procedures should be followed for all HV and LV application. Please do not perform the troubleshooting steps at home.</p>
          <p>Note: All the pics are AI generated via ChatGpt, this content is for educational purpose only.</p>
          <h3>A) Basics of operation:</h3>
          <h3>B) Components:</h3>
          <h3>C) Common issues:</h3>
          <h3>D) Troubleshooting common issues:</h3>
          <p>1) Checking shielding on HV cables: Using a multimeter to perform a shielding test on a high voltage (HV) cable is a straightforward process, generally aimed at measuring the resistance of the cable's shield. The key goal here is to ensure that the resistance is under 1 ohm, which typically indicates good electrical continuity and effective shielding. Here’s how you can do it:</p>
          <ul>
            <li>Equipment Needed</li>
            <ul>
              <li>A digital multimeter capable of measuring low resistances accurately.</li>
              <li>Appropriate personal protective equipment (PPE), especially when working with HV cables.</li>
            </ul>
            <li>Steps to Perform a Shielding Test Using a Multimeter</li>
            <ol>
              <li>Prepare the Cable:
                <ul>
                  <li>Ensure the cable is powered off and safely discharged before handling to avoid any electrical hazards.</li>
                  <li>Clean the points of contact where measurements will be taken. This ensures that dirt or corrosion does not interfere with the resistance measurement.</li>
                </ul>
              </li>
              <li>Set Up the Multimeter:
                <ul>
                  <li>Set the multimeter to the resistance measurement mode, often denoted by the omega (Ω) symbol.</li>
                  <li>If available, use the lowest resistance range (like 200 ohms) to get the most accurate reading for values expected under 1 ohm.</li>
                </ul>
              </li>
              <li>Measure the Shielding Resistance:
                <ul>
                  <li>Connect one probe to the shield of the HV cable. This could be a metallic sheath or a wire mesh around the cable. Make sure the contact is firm and metallic parts are touched.</li>
                  <li>Connect the other probe to a grounding point on the system or another part of the shield at a different location.</li>
                  <li>Take the reading from the multimeter. Ensure that the connection points are not shifting during measurement as it can lead to fluctuating readings.</li>
                </ul>
              </li>
              <li>Interpret the Results:
                <ul>
                  <li>Reading under 1 ohm: This indicates that the shield has good continuity and is likely effective in protecting against electromagnetic interference (EMI) and ensuring safety against electrical leaks.</li>
                  <li>Reading over 1 ohm: This suggests potential issues with the shielding. It could be due to breaks, corrosion, or poor connections in the shielding layer.</li>
                </ul>
              </li>
              <li>Troubleshooting:
                <ul>
                  <li>If the resistance is higher than expected, inspect the cable for any visible damage or degradation. Check connections and consider cleaning or re-securing the contact points.</li>
                  <li>Re-test after addressing any issues.</li>
                </ul>
              </li>
              <li>Safety Precautions:
                <ul>
                  <li>Always ensure the cable is de-energized while performing these tests to avoid electric shock or damage to the multimeter.</li>
                  <li>Use appropriate PPE to safeguard against accidental contact with live components.</li>
                </ul>
              </li>
            </ol>
          </ul>
          <p>Conclusion
          Performing a shielding test with a multimeter is an effective method to verify the integrity of the shielding in HV cables. Regular checks like these are vital for maintaining the safety and efficiency of electrical installations, especially in environments where electromagnetic interference or leakage currents could pose significant risks.</p>
        </ThreadContainer>
        <Footer>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </Footer>
      </Container>
    </div>
  );
}

export default DTCDiscussionBoard;


