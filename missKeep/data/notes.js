export const gNotesData = [
    {
        id: "b63ac99aadba",
        type: "txt",
        isPinned: true,
        content: {
            title: "My diary",
            txt: "Today was a good day!"
        },
        style: {
            backgroundColor: "red",
            color: "black"
        }
    },
    {
        id: "b63acbf2adba",
        type: "img",
        isPinned: false,
        content: {
            title: "Me playing Mi",
            img: "/missKeep/assets/img/nap-time.jpg"
        },
        style: {
            backgroundColor: "#00d",
            color: "white"
        }
    },
    {
        id: "b63acce2adba",
        type: "todos",
        isPinned: false,
        content: {
            title: "Get groceries:",
            todos: [
                { txt: "Milk", doneAt: null },
                { txt: "Sugar", doneAt: 187111111 }
            ]
        }, style: { backgroundColor: "white", color: "red" }
    }, {
        id: "b63a8uuopadba",
        type: "video",
        isPinned: true,
        content: {
            title: "cute cat",
            video: "https://www.youtube.com/watch?v=uHKfrz65KSU"
        }, style: { backgroundColor: "beige", color: "black" }
    }
];