//1
const newReleases = [
    {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }],
    },
];

const arrayLoopForEach = (arr) => {
    const res = [];
    arr.forEach((element) => {
        res.push({ id: element.id, name: element.title });
    });
    console.log(res);
};

//Test
arrayLoopForEach(newReleases);

//2
const arrayLoopMap = (arr) => {
    const res = [];
    arr.map((element) => {
        res.push({ id: element.id, name: element.title });
    });
    console.log(res);
};

const arrayLoopMap2 = (arr) => {
    return arr.map((element) => ({ id: element.id, name: element.title }));
};

//Test

arrayLoopMap(newReleases);
arrayLoopMap2(newReleases);
