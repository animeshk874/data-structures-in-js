import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';
import beautify from 'js-beautify';
import CONSTANTS from '../../utils/constants';

const toastId = "custom-id-toast";

export function getBeautifiedCode(codeBlock) {
  return beautify(codeBlock, CONSTANTS.beautifyOptions);
}

export function getDependencySignature(dependencyKey, operations) {
  if (!operations) {
    return;
  }
  return operations.find((item) => item.key === dependencyKey) || {};
}

export function copyCodeBlock(text) {
  copy(text);
  toast.dark('Copied!', { toastId });
}
