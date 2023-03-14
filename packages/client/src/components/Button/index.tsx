import type React from 'react'
import styles from './index.module.less'

export default function Button({
  children,
  type = 'default',
  style = {},
  radius = 'normal'
}: {
  children: React.ReactNode
  type: 'primary' | 'default'
  style?: React.CSSProperties
  radius?: 'none' | 'normal' | 'circle'
}) {
  
  const radiusStyle = {
    borderRadius: radius === 'none' ? 0 : radius === 'circle' ? '50%' : 12
  }

  return (
    <button
      className={styles.btn + ' ' + styles[type]}
      style={{ ...radiusStyle, ...style }}>
      {children}
    </button>
  )
}
