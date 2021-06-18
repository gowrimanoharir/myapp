import React from 'react'
import Neetha from '../../images/neetha.png'
import Abi from '../../images/abi.png'
import {TeamContainer, TeamColumn, TeamH1, TeamH2, TeamP, TeamRow, TeamImg} from './TeamElements'

const TeamSection = () => {
    return (
        <>
            <TeamContainer id="team">
                <TeamColumn>
                    <TeamH1>meet the team</TeamH1>
                    <TeamP style={{fontWeight: '500'}}>Some could say the challenges of our everchanging world in the midst of a global pandemic was a blessing in disguise for this team. It made them not only resilient, but accepting of change with open arms. Meet two young and ambitious women; graduates from the University of Toronto and ready to embark their journeys as self-defined professionals as consultants.</TeamP>
                </TeamColumn>
                <TeamColumn>
                    <TeamRow>
                        <TeamImg src={Abi} alt="abi" onClick={() => window.location.href="https://www.linkedin.com/in/abishanaselvaraj/"}></TeamImg> 
                    </TeamRow>
                    <TeamRow>
                        <TeamH2>Abishana Selvaraj, BBA specialized in International Business</TeamH2>
                        <TeamP>Within a mere year of graduating, Abishana had already accumulated a wealth of expertise in talent acquisition, HR strategy and cross-platform marketing through a series of co-op and freelancing experiences in the corporate and legal setting. With a heart of gold, she loves to help others realize their true purpose as they navigate through the professional world. When she’s not working or volunteering her time, you can surely expect to run into her somewhere halfway across the world!</TeamP>
                    </TeamRow>
                </TeamColumn>
                <TeamColumn>
                    <TeamRow>
                        <TeamImg src={Neetha} alt="neetha" onClick={() => window.location.href = "https://www.linkedin.com/in/neethap/"}></TeamImg> 
                    </TeamRow>
                    <TeamRow>
                        <TeamH2>Neetha Parameswaran, BASc in Materials Science and Engineering, Minor in Engineering Business</TeamH2>
                        <TeamP>Develop, test and push. Neetha can be found doing at least one of the three throughout a typical day in her life. Her eagerness to solve problems had put her at the forefront of the incubator stage twice. She loves unconventional ideas and wants to hear from YOU. When she’s not perusing through current tech trends or working to the T, you can find her peacefully writing her next sci-fi novel with the comfort of cashmere and hot cocoa.</TeamP>
                    </TeamRow>
                </TeamColumn>
                <TeamColumn>     
                </TeamColumn>
            </TeamContainer>  
        </>
    )
}

export default TeamSection
