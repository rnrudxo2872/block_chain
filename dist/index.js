"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestaps) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestaps = timestaps;
    }
}
Block.calculateHash = (index, previousHash, data, timestaps) => {
    return CryptoJS.SHA256(index + previousHash + data + timestaps).toString(); //block의 해시값 계산, static으로 블럭생성전 해시값 계산.
};
Block.ValidateStructure = (target) => {
    return (typeof target.data === "string" &&
        typeof target.hash === "string" &&
        typeof target.index === "number" &&
        typeof target.previousHash === "string" &&
        typeof target.timestaps === "number");
};
const genesisBlock = new Block(0, "231454", "", "I'm first block!", 123); // 초기 블럭 생성
let BlockChain = [genesisBlock]; // 첫 블럭을 chain에 넣는다.
const getBlockChain = () => BlockChain; // 블럭 배열을 반환받아 블럭체인을 알아낸다.
const getLatestBlock = () => BlockChain[BlockChain.length - 1]; // 마지막으로 업데이트된 블럭을 얻어낸다.
const getNewTimeStemp = () => Math.round(new Date().getTime() / 1000); // timestemp를 구하는 상수. 반올림해서 정수 얻음.
//getTime = 1970.01.01기준 이후 흘러온 milisec.
const createNewBlock = (data) => {
    let preBlock = getLatestBlock();
    let preHash = preBlock.hash;
    let NewIdx = preBlock.index + 1;
    let NewTimeStemp = getNewTimeStemp();
    let Hash = Block.calculateHash(NewIdx, preHash, data, NewTimeStemp);
    let NewBlock = new Block(NewIdx, Hash, preHash, data, NewTimeStemp);
    addBlock(NewBlock);
    return NewBlock;
};
const getBlockHash = (data) => {
    return Block.calculateHash(data.index, data.previousHash, data.data, data.timestaps);
};
const blockValid = (candidateBlock, preBlock) => {
    if (!Block.ValidateStructure(candidateBlock)) {
        return false;
    }
    else if (preBlock.index + 1 !== candidateBlock.index ||
        preBlock.hash !== candidateBlock.previousHash // 후보 블럭과 이전 블럭의 index 연관성과 hash값을 비교.
    ) {
        return false;
    }
    else if (getBlockHash(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    return true;
};
const addBlock = (candidateBlock) => {
    if (blockValid(candidateBlock, getLatestBlock())) {
        BlockChain.push(candidateBlock);
    }
};
//console.log(createNewBlock('first block'),createNewBlock('second block'),createNewBlock('third block'));
createNewBlock('first block');
createNewBlock('second block');
createNewBlock('third block');
console.log(getBlockChain());
//# sourceMappingURL=index.js.map