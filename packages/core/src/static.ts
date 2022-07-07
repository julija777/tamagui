// only stuff that gets extracted or needed by tamagui-static

export * from './styled'
export * from './createComponent'
export * from './createFont'
export * from './createTokens'
export * from './createTamagui'
export * from './createVariable'
export * from './constants/constants'

export * from './hooks/useMedia'
export * from './hooks/useTheme'

export * from './helpers/isObj'
export * from './helpers/getStylesAtomic'
export * from './helpers/expandStyles'
export * from './helpers/pseudoDescriptors'
export * from './helpers/proxyThemeVariables'
export * from './helpers/getSplitStyles'
export * from '@tamagui/helpers'

export * from './types'

// node only rnw export
const interopRequire = (x: any) => ('default' in x ? x.default : x)
export const rnw: any = interopRequire(require('react-native-web/dist/cjs/tamagui-exports'))