import *as CryptoJS from 'crypto-js';

class Block{
    public index: number;
    public hash: string;
    public previousHash: string;
    public data : string;
    public timestaps : number;

    static calculateHash = (
        index: number,
        previousHash: string,
        data : string,
        timestaps : number):string => {
        return CryptoJS.SHA256(index+previousHash+data+timestaps).toString(); //block의 해시값 계산, static으로 블럭생성전 해시값 계산.
    }
    
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
let BlockChain: Block[] = [genesisBlock]; // 첫 블럭을 chain에 넣는다.

const getBlockChain : Block[] = BlockChain; // 블럭 배열을 반환받아 블럭체인을 알아낸다.
const getLatestBlock : Block = BlockChain[BlockChain.length - 1]; // 마지막으로 업데이트된 블럭을 얻어낸다.
const getNewTimeStemp : number = Math.round(new Date().getTime() / 1000); // timestemp를 구하는 상수. 반올림해서 정수 얻음.
                            //getTime = 1970.01.01기준 이후 흘러온 milisec. 

const createNewBlock = (data:string):Block => {
    let preBlock:Block = getLatestBlock;
    let preHash:string = preBlock.hash;
    let NewIdx:number = preBlock.index + 1;
    let NewTimeStemp:number = getNewTimeStemp;
    let Hash:string = Block.calculateHash(NewIdx,preHash,data,NewTimeStemp);

    let NewBlock:Block = new Block(NewIdx,Hash,preHash,data,NewTimeStemp);
    return NewBlock;
}

console.log(createNewBlock('Hi!'), createNewBlock('NoNo'));
console.log(createNewBlock('he is good man'), createNewBlock('YesYes'));




