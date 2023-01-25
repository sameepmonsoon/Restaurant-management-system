import React from 'react'
import Navbar from '../PageComponent/Dashboard/Navbar/Navbar';
import Sider from '../PageComponent/Dashboard/Sider/Sider';
import { ChildrenDiv, LayoutContainerDiv } from './DashboardLayout.style';
import { DashboardMainDiv } from './DashboardLayout.styles';

export default function ReportLayout({children}:{children:JSX.Element | JSX.Element[]}) {
    return (
      <>          
        <DashboardMainDiv>
          <Sider />
          <LayoutContainerDiv>
          <Navbar
            navTitle={"Report"}
            navbarCardName={"Purchase"}
            arrowIcon={true}
          />

              <ChildrenDiv>
                {children}
              </ChildrenDiv>
            </LayoutContainerDiv>     
        </DashboardMainDiv>
      </>
    );
}
