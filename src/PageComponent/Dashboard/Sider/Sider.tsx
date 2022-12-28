import React from 'react'
import { SiderMainDiv, SiderButtonLabel, LogoutSetting, SettingDiv,
          SiderIcon
} from './Sider.Style'
import SiderButton from '../../../Components/SiderButton/SiderButton'
import {FiSettings} from 'react-icons/fi'

export default function Sider() {
  return (
    <div>
      <SiderMainDiv>
          <SiderButtonLabel>
              <h6>ANALYTICS</h6>
              <section> SiderButton </section>
          </SiderButtonLabel>

          <LogoutSetting>
            <SettingDiv>
                <SiderIcon> Icon </SiderIcon>
                <span>Settings</span>
            </SettingDiv>

            <SettingDiv>
                <SiderIcon> Icon</SiderIcon>
                <span>Logout</span>
            </SettingDiv>
              
                

          </LogoutSetting>

      </SiderMainDiv>
      
    </div>

  )
}
