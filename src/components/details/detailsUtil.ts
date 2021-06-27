import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';
import beautify from 'js-beautify';
import CONSTANTS from '../../utils/constants';

const toastId = 'custom-id-toast';

export function getBeautifiedCode(codeBlock: any) {
  return beautify(codeBlock, (CONSTANTS as any).beautifyOptions);
}

export function getDependencySignature(dependencyKey: string, operations: any) {
  if (!operations) {
    return;
  }
  return operations.find((item: any) => item.key === dependencyKey) || {};
}

export function copyCodeBlock(text: string) {
  copy(text);
  toast.dark('Copied!', { toastId });
}
