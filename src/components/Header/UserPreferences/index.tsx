import React, { ReactElement } from 'react'
import Tooltip from '@shared/atoms/Tooltip'
import Cog from '@images/cog.svg'
import styles from './index.module.css'
import Currency from './Currency'
import Debug from './Debug'
import Caret from '@images/caret.svg'
import useDarkMode from '@oceanprotocol/use-dark-mode'
import Appearance from './Appearance'
import { useMarketMetadata } from '@context/MarketMetadata'

export default function UserPreferences(): ReactElement {
  const { appConfig } = useMarketMetadata()
  // Calling this here because <Style /> is not mounted on first load
  const darkMode = useDarkMode(false, appConfig?.darkModeConfig)

  return <Appearance darkMode={darkMode} />
}
