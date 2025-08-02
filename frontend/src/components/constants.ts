const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
}

export const QUERIES = {
  'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin}px)`,
  'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin}px)`,
  'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin}px)`,
} 
