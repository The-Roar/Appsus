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
            backgroundColor: "#ff0000",
            color: "#000000"
        }
    },
    {
        id: "b63acbf2adba",
        type: "img",
        isPinned: false,
        content: {
            title: "Nap Time",
            img: "/missKeep/assets/img/nap-time.jpg"
        },
        style: {
            backgroundColor: "#00d",
            color: "#ffffff"
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
        }, style: { backgroundColor: "#ffffff", color: "#ff0000" }
    }, {
        id: "b63a8uuopadba",
        type: "video",
        isPinned: true,
        content: {
            title: "cute cat",
            video: "https://www.youtube.com/watch?v=uHKfrz65KSU"
        }, style: { backgroundColor: "#f5f5dc", color: "#000000" }
    }
];