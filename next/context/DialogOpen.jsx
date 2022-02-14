import React, { Children, createContext, useState } from 'react'

export const IsDialogOpened = createContext(false)

export function DialogOpenProvider({ children }) {
  const [isDialogOpened, setIsDialogOpened] = useState(true)
  return (
    <IsDialogOpened.Provider value={{ isDialogOpened, setIsDialogOpened }}>
      {children}
    </IsDialogOpened.Provider>
  )
}
