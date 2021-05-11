import IStackData from "../../model/IStackData";
declare const OP_1ADD: (stackData: IStackData) => IStackData[];
declare const OP_1SUB: (stackData: IStackData) => IStackData[];
declare const OP_NEGATE: (stackData: IStackData) => IStackData[];
declare const OP_ABS: (stackData: IStackData) => IStackData[];
declare const OP_NOT: (stackData: IStackData) => IStackData[];
declare const OP_0NOTEQUAL: (stackData: IStackData) => IStackData[];
declare const OP_ADD: (stackData1: IStackData, stackData2: IStackData) => IStackData[];
declare const OP_SUB: (stackData2: IStackData, stackData1: IStackData) => IStackData[];
declare const OP_MUL: (stackData1: IStackData, stackData2: IStackData) => IStackData[];
declare const OP_DIV: (stackData1: IStackData, stackData2: IStackData) => IStackData[];
declare const OP_LSHIFT: (stackData2: IStackData, stackData1: IStackData) => IStackData[];
declare const OP_RSHIFT: (stackData2: IStackData, stackData1: IStackData) => IStackData[];
declare const OP_BOOLAND: (stackData2: IStackData, stackData1: IStackData) => IStackData[];
declare const OP_BOOLOR: (stackData2: IStackData, stackData1: IStackData) => IStackData[];
declare const OP_NUMEQUAL: (stackData2: IStackData, stackData1: IStackData) => IStackData[];
declare const OP_NUMEQUALVERIFY: (stackData2: IStackData, stackData1: IStackData) => boolean;
declare const OP_NUMNOTEQUAL: (stackData2: IStackData, stackData1: IStackData) => IStackData[];
declare const OP_LESSTHAN: (stackData2: IStackData, stackData1: IStackData) => IStackData[];
declare const OP_GREATERTHAN: (stackData2: IStackData, stackData1: IStackData) => IStackData[];
declare const OP_LESSTHANOREQUAL: (stackData2: IStackData, stackData1: IStackData) => IStackData[];
declare const OP_GREATERTHANOREQUAL: (stackData2: IStackData, stackData1: IStackData) => IStackData[];
declare const OP_MIN: (stackData2: IStackData, stackData1: IStackData) => IStackData[];
declare const OP_MAX: (stackData2: IStackData, stackData1: IStackData) => IStackData[];
declare const OP_WITHIN: (stackData3: IStackData, stackData2: IStackData, stackData1: IStackData) => IStackData[];
export { OP_1ADD, OP_1SUB, OP_NEGATE, OP_ABS, OP_NOT, OP_0NOTEQUAL, OP_ADD, OP_SUB, OP_MUL, OP_DIV, OP_LSHIFT, OP_RSHIFT, OP_BOOLAND, OP_BOOLOR, OP_NUMEQUAL, OP_NUMEQUALVERIFY, OP_NUMNOTEQUAL, OP_LESSTHAN, OP_GREATERTHAN, OP_LESSTHANOREQUAL, OP_GREATERTHANOREQUAL, OP_MIN, OP_MAX, OP_WITHIN, };