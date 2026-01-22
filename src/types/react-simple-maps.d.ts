declare module 'react-simple-maps' {
  import { ReactNode } from 'react'

  export interface Geography {
    rsmKey: string
    properties: {
      name: string
      [key: string]: any
    }
    [key: string]: any
  }

  export interface GeographiesProps {
    geography: string | object
    children: (params: { geographies: Geography[] }) => ReactNode
  }

  export const Geographies: React.FC<GeographiesProps>

  export interface GeographyProps {
    geography: Geography
    fill?: string
    stroke?: string
    strokeWidth?: number
    style?: {
      default?: React.CSSProperties
      hover?: React.CSSProperties
      pressed?: React.CSSProperties
    }
    onMouseEnter?: (event: React.MouseEvent<SVGElement>) => void
    onMouseMove?: (event: React.MouseEvent<SVGElement>) => void
    onMouseLeave?: () => void
    [key: string]: any
  }

  export const Geography: React.FC<GeographyProps>

  export interface MarkerProps {
    coordinates: [number, number]
    children?: ReactNode
    [key: string]: any
  }

  export const Marker: React.FC<MarkerProps>

  export interface LineProps {
    from: [number, number]
    to: [number, number]
    stroke?: string
    strokeWidth?: number
    strokeLinecap?: string
    strokeDasharray?: string
    opacity?: number
    [key: string]: any
  }

  export const Line: React.FC<LineProps>

  export interface ComposableMapProps {
    projection?: string
    projectionConfig?: {
      scale?: number
      center?: [number, number]
      [key: string]: any
    }
    className?: string
    children?: ReactNode
    [key: string]: any
  }

  export const ComposableMap: React.FC<ComposableMapProps>

  export interface ZoomableGroupProps {
    children?: ReactNode
    [key: string]: any
  }

  export const ZoomableGroup: React.FC<ZoomableGroupProps>
}

