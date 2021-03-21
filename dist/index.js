class Block {
    constructor(index, hash, previousHash, data, timestaps) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestaps = timestaps;
    }
}
const genesisBlock = new Block(0, "231454", "", "I'm first block!", 123); // 초기 블럭 생성
let BlockChain = [genesisBlock]; // 첫 블럭을 chain에 넣는다.
console.log(BlockChain);
//# sourceMappingURL=index.js.map