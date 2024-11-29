import { act } from "react";
import useIsMobile from "../useIsMobile"
import { waitFor } from "@testing-library/react";


test('Screen width <768 is mobile', () => {
  Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 200})
  waitFor(() => {
    const isMobile = useIsMobile()
    expect(isMobile).toBe(true);
  })
})

test('Screen width ==768 is mobile', () => {
  Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 786})
  waitFor(() => {
    const isMobile = useIsMobile()
    expect(isMobile).toBe(true);
  })
})

test('Screen width >768 is not mobile', () => {
  Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 1000})
  waitFor(() => {
    const isMobile = useIsMobile()
    expect(isMobile).toBe(false);
  })
})