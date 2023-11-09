class PaginationHelper {
    constructor(collection, itemsPerPage) {
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        // returns the number of items within the entire collection
        return this.collection.length
    }
    pageCount() {
        // returns the number of pages
        let itemCount = Math.ceil(this.collection.length / this.itemsPerPage);
        return itemCount;
    }
    pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        if (pageIndex < 0 || pageIndex >= this.pageCount()) return -1;
        if (pageIndex === this.pageCount() - 1) {
            const itemLeft = this.itemCount() % this.itemsPerPage
            return itemLeft === 0 ? this.itemsPerPage : itemLeft;
        } else {
            return this.itemsPerPage
        }
    }
    pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        if (itemIndex < 0 || itemIndex >= this.itemCount()) return -1;
        return Math.floor(itemIndex / this.itemsPerPage)
    }
}


var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.pageCount()); // should == 2
console.log(helper.itemCount()); // should == 6
console.log(helper.pageItemCount(0)); // should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); // should == 1 (zero based index)
console.log(helper.pageIndex(2)); // should == 0
console.log(helper.pageIndex(20)); // should == -1
console.log(helper.pageIndex(-10)); // should == -1