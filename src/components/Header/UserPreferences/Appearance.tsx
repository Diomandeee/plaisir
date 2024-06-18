import React, { ReactElement, ChangeEvent } from 'react'
import { DarkMode } from '@oceanprotocol/use-dark-mode'
import FormHelp from '@shared/FormInput/Help'
import Label from '@shared/FormInput/Label'
import Moon from '@images/moon.svg'
import Sun from '@images/sun.svg'
import BoxSelection, {
  BoxSelectionOption
} from '@shared/FormInput/InputElement/BoxSelection'
import styles from './Appearance.module.css'

export default function Appearance({
  darkMode
}: {
  darkMode: DarkMode
}): ReactElement {
  const options: BoxSelectionOption[] = [
    {
      name: 'Dark',
      checked: darkMode.value,
      title: 'Dark'
    }
  ]

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.value === 'Dark' ? darkMode.enable() : darkMode.disable()
  }

  return (
    <li className={styles.appearances}>
      <BoxSelection
        options={options}
        name="appearanceMode"
        handleChange={handleChange}
      />
    </li>
  )
}
