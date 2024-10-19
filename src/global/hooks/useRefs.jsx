import { createRef } from "react";

/**
 * Generates an array of React refs.
 *
 * @param {number} length - The number of refs to generate.
 * @returns {React.RefObject<HTMLDivElement>[]} An array of React refs.
 */
const useRefs = (length) => {
  const refs = [];
  for (let i = 0; i < length; i++) {
    refs.push(createRef()); 
  }
  return refs;
};

export default useRefs;
