//Test
class Node {
    constructor({value=null}) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (this.value !== null) {
        if (value < this.value) {
          if (this.left === null) {
            this.left = new Node({value});
          } else {
            this.left.insert(value);
          }
        } else if (value > this.value){
          if (this.right === null) {
            this.right = new Node({value});
          } else {
            this.right.insert(value);
          }
        }
      } else {
        this.value = value;
      }
    }
    inOrder(list) {
        if (this.left !== null) {
            this.left.inOrder(list);
        }
        //Cuidado porque value puede ser null
        //console.log (this.value);
        list.push(this.value);
        if (this.right !== null) {
            this.right.inOrder(list);
        }
    }
    inOrderV2() {
        const list = [];
        if (this.left !== null) {
            const listLeft = this.left.inOrderV2();
            list = list.concat(listLeft)
        }
        //Cuidado porque value puede ser null
        //console.log (this.value);
        list.push(this.value);
        if (this.right !== null) {
            const listRight = this.right.inOrderV2();
            list = list.concat(listRight);
        }
        return list;
    }
    inPreOrder() {
        const list = [];
        if (this.left !== null) {
            const listLeft = this.left.inPreOrder();
            list = list.concat(listLeft)
        }
        if (this.right !== null) {
            const listRight = this.right.inPreOrder();
            list = list.concat(listRight);
        }
        //Meto la raiz
        list.push(this.value);
        return list;
    }
  }
  
//const node = new Node({});

const tree = new Node({value:20})
tree.insert(8)
tree.insert(5)
tree.insert(9)
tree.insert(6)
tree.insert(9)
tree.insert(12)

//const myList = [];
//tree.inOrder(myList);
const myList = tree.inOrderV2();
console.log(myList);
let a;

const treeStr = '[{node:20,left:8,rigth:null},{node:8,left:5,rigth:9},{}]'