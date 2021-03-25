import { css } from 'styled-components';
import theme from '../index';

// eslint-disable-next-line import/no-named-as-default-member
const { breakpoints } = theme;

// eslint-disable-next-line import/prefer-default-export
export function breakpointsMedia(cssByBreakpoint) {
  const breakpointNames = Object.keys(breakpoints);

  return breakpointNames.map((breakpointName) => css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoint[breakpointName]}
      }
    `);
}
