class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = Array.from({ length: size }, () => []);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    insert(key, value) {
        const index = this._hash(key);
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return `Key ${key} not found`;
    }

    remove(key) {
        const index = this._hash(key);
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1);
                return;
            }
        }
        return `Key ${key} not found`;
    }

    toString() {
        return this.table.map(bucket => bucket.map(pair => `${pair[0]}: ${pair[1]}`).join(', ')).join(' | ');
    }
}

// Example

const ht = new HashTable(5);
ht.insert("name", "Maria");
ht.insert("age", 25);
ht.insert("city", "Sao Paulo");
ht.insert("name", "Carlos");
console.log(`Hash Table: ${ht}`);
console.log(`Get 'name': ${ht.get('name')}`);
console.log(`Get 'city': ${ht.get('city')}`);
ht.remove("age");
console.log(`Hash Table after removing 'age': ${ht}`);
