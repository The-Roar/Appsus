export const gNotesData = [
    {
        id: "b63ac99aadba",
        type: "txt",
        isPinned: true,
        content: {
            title: "My diary",
            txt: "Today was a good day!"
        },
        style: {}
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
            backgroundColor: "#00d"
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
        },
    }
];