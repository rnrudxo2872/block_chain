class Block{
    public index: number;
    public hash: string;
    public previousHash: string;
    public data : string;
    public timestaps : number;
    
    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data : string,
        timestaps : number){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestaps = timestaps;
    }
}

const genesisBlock:Block = new Block(0,"231454","","I'm first block!",123); // 초기 블럭 생성
let BlockChain: [Block] = [genesisBlock]; // 첫 블럭을 chain에 넣는다.

console.log(BlockChain);

