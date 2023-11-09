let groupAnagram = words => {
    const anagrams = {};
    for (let word of words) {
        const sorted = word.split('').sort().join('');
        anagrams[sorted] ? anagrams[sorted].push(word) : anagrams[sorted] = [word];
    }
    return Object.values(anagrams);
}

console.log(groupAnagram(["tsar", "rat", "tar", "star", "tars", "cheese"]));