import { ReactNode } from "react"

export type AppRoute = {
    path: string
    reactPath?: string
    label: string
    element: ReactNode
    icon?: ReactNode
  }
  
  export type SidebarMenuSection = {
    sectionTitle: string
    sectionMenuItems: AppRoute[]
  }
  