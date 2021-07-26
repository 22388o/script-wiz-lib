import { WizDataList } from "../model";
import { Opcodes } from "../opcodes";
import { VM } from "../opcodes/model/VM";

export const hexLittleEndian = (hex: string): string => {
  if (hex.length % 2 === 0) {
    let str = "0x";
    let j = 0;

    if (hex.startsWith("0x")) {
      j = 2;
    }

    for (let i = hex.length; i > j; i -= 2) {
      str += hex.substring(i - 2, i);
    }

    return str;
  } else {
    console.warn("its odd");
    return "something went wrong";
  }
};

export const flipbits = (str: string): string => {
  return str
    .split("")
    .map((b: any) => (1 - b).toString())
    .join("");
};

export const cropTwo = (hex: string): string => hex.substring(2);

export const opWordToHex = (word: string, vm: VM): string => {
  const opCodes = new Opcodes(vm);

  const hex = opCodes.data.find((owc) => owc.word === word)?.hex;
  return hex || "";
};

export const opWordToCode = (word: string, vm: VM): number => {
  const opCodes = new Opcodes(vm);

  const opcode = opCodes.data.find((owc) => owc.word === word)?.opcode;
  return opcode === undefined ? -1 : opcode;
};

export const opcodeToWord = (opcode: number, vm: VM): string => {
  const opCodes = new Opcodes(vm);

  return opCodes.data.find((owc) => owc.opcode === opcode)?.word || "";
};

// supports all opcodes
export const currentScope = (wizDataList: WizDataList): boolean => wizDataList.flow[wizDataList.flow.length - 1];
export const EMOJI_REGEX = /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g;